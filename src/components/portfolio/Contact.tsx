import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";

const RATE_LIMIT_MS = 30_000;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

function loadRecaptchaScript(siteKey: string) {
  if (!siteKey || document.querySelector(`script[src*="recaptcha"]`)) return;
  const script = document.createElement('script');
  script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
  script.async = true;
  document.head.appendChild(script);
}

const Contact = () => {
  const { t, lang } = useLanguage();
  const [showToast, setShowToast] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitRef = useRef<number>(0);

  useEffect(() => {
    loadRecaptchaScript(RECAPTCHA_SITE_KEY);
  }, []);

  const contactSchema = z.object({
    name: z.string().trim().min(1, {
      message: lang === "pt" ? "Nome é obrigatório" : lang === "es" ? "Nombre es obligatorio" : "Name is required",
    }).max(100),
    email: z.string().trim().email({ message: lang === "pt" ? "E-mail inválido" : lang === "es" ? "Correo inválido" : "Invalid email" }).max(255),
    message: z.string().trim().min(1, {
      message: lang === "pt" ? "Mensagem é obrigatória" : lang === "es" ? "Mensaje es obligatorio" : "Message is required",
    }).max(1000),
  });

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return null;
    try {
      return await new Promise<string>((resolve) => {
        window.grecaptcha!.ready(async () => {
          const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
          resolve(token);
        });
      });
    } catch {
      return null;
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      const wait = Math.ceil((RATE_LIMIT_MS - (now - lastSubmitRef.current)) / 1000);
      const waitMsg = {
        pt: `Aguarde ${wait}s antes de enviar novamente`,
        en: `Please wait ${wait}s before submitting again`,
        es: `Espere ${wait}s antes de enviar de nuevo`,
      };
      setErrors({ terms: waitMsg[lang] });
      return;
    }

    if (!agreed) {
      setErrors({
        terms: lang === "pt" ? "Você precisa aceitar os termos" : lang === "es" ? "Debes aceptar los términos" : "You must accept the terms",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    lastSubmitRef.current = now;

    try {
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          recaptchaToken,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        const errorMsg = {
          pt: json.error === 'Too many requests. Try again later.'
            ? 'Muitas tentativas. Tente novamente em breve.'
            : json.error === 'reCAPTCHA verification failed'
              ? 'Verificação anti-spam falhou. Tente novamente.'
              : 'Erro ao enviar. Tente novamente.',
          en: json.error || 'Failed to send. Try again.',
          es: json.error === 'Too many requests. Try again later.'
            ? 'Demasiados intentos. Inténtelo de nuevo.'
            : 'Error al enviar. Inténtelo de nuevo.',
        };
        setErrors({ terms: errorMsg[lang] });
        return;
      }

      if (json.url) {
        window.open(json.url, '_blank', 'noopener,noreferrer');
      }

      (e.target as HTMLFormElement).reset();
      setAgreed(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch {
      // Fallback: if API is unavailable, use client-side approach
      const c = ['+','5','5','8','1','9','8','1','1','2','3','5','4','9'].join('');
      const whatsappMessage = encodeURIComponent(
        `Olá, me chamo ${data.name}, meu email é o ${data.email} estou entrando em contato devido ${data.message}`
      );
      window.open(`https://wa.me/${c}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } finally {
      setIsSubmitting(false);
    }
  }, [agreed, lang, contactSchema, getRecaptchaToken]);

  const termsLabel = {
    pt: (
      <>
        Li e concordo com a{" "}
        <Link to="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>{" "}
        e{" "}
        <Link to="/terms" className="text-primary hover:underline">Termos de Serviço</Link>.
      </>
    ),
    en: (
      <>
        I have read and agree to the{" "}
        <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
        and{" "}
        <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
      </>
    ),
    es: (
      <>
        He leído y acepto la{" "}
        <Link to="/privacy" className="text-primary hover:underline">Política de Privacidad</Link>{" "}
        y los{" "}
        <Link to="/terms" className="text-primary hover:underline">Términos de Servicio</Link>.
      </>
    ),
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "jvn.silva01@gmail.com" },
    { icon: Phone, label: "Phone", value: "+55 (81) *****-3549" },
    { icon: MapPin, label: "Address", value: "Recife, PE - Brazil" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.hire.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t.hire.subtitle}</p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Systemic Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative glass-card border-primary/30 p-6 md:p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 animate-pulse-glow rounded-2xl" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0 p-2 rounded-lg glass-badge">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                  {t.systemAlert.label}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {t.systemAlert.text}
                </p>
              </div>
            </div>
            {/* CSS scanning line */}
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line"
              style={{ width: '50%' }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-3xl overflow-hidden glass-border glow-primary">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                loading="lazy"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass-badge flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 glow-primary">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.hire.form.name}</label>
                  <Input
                    name="name"
                    placeholder={t.hire.form.name}
                    className={`h-12 glass-input ${errors.name ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.hire.form.email}</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.hire.form.email}
                    className={`h-12 glass-input ${errors.email ? "border-destructive" : ""}`}
                    required
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.hire.form.message}</label>
                <Textarea
                  name="message"
                  placeholder={t.hire.form.message}
                  className={`min-h-32 resize-none glass-input ${errors.message ? "border-destructive" : ""}`}
                  required
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    {termsLabel[lang]}
                  </label>
                </div>
                {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full gap-2 glass-btn text-primary-foreground rounded-xl">
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {t.hire.form.send}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="flex items-center gap-3 px-6 py-4 glass-strong glass-border text-primary rounded-xl shadow-xl glow-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">{t.hire.form.success}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
