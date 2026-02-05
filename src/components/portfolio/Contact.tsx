import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';

const Contact = () => {
  const { t, lang } = useLanguage();
  const [showToast, setShowToast] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactSchema = z.object({
    name: z.string().trim().min(1, { message: lang === 'pt' ? 'Nome é obrigatório' : lang === 'es' ? 'Nombre es obligatorio' : 'Name is required' }).max(100),
    email: z.string().trim().email({ message: lang === 'pt' ? 'E-mail inválido' : lang === 'es' ? 'Correo inválido' : 'Invalid email' }).max(255),
    message: z.string().trim().min(1, { message: lang === 'pt' ? 'Mensagem é obrigatória' : lang === 'es' ? 'Mensaje es obligatorio' : 'Message is required' }).max(1000),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    if (!agreed) {
      setErrors({ terms: lang === 'pt' ? 'Você precisa aceitar os termos' : lang === 'es' ? 'Debes aceptar los términos' : 'You must accept the terms' });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
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

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    (e.target as HTMLFormElement).reset();
    setAgreed(false);
  };

  const termsLabel = {
    pt: (
      <>
        Li e concordo com a{' '}
        <Link to="/privacy" className="text-primary hover:underline">
          Política de Privacidade
        </Link>{' '}
        e{' '}
        <Link to="/terms" className="text-primary hover:underline">
          Termos de Serviço
        </Link>
        .
      </>
    ),
    en: (
      <>
        I have read and agree to the{' '}
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>
        .
      </>
    ),
    es: (
      <>
        He leído y acepto la{' '}
        <Link to="/privacy" className="text-primary hover:underline">
          Política de Privacidad
        </Link>{' '}
        y los{' '}
        <Link to="/terms" className="text-primary hover:underline">
          Términos de Servicio
        </Link>
        .
      </>
    ),
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'joao.silva@tech.com' },
    { icon: Phone, label: 'Phone', value: '+55 (81) 99999-9999' },
    { icon: MapPin, label: 'Address', value: 'Recife, PE - Brazil' },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.hire.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.hire.subtitle}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Workspace Image */}
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Workspace"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.hire.form.name}</label>
                  <Input
                    name="name"
                    placeholder={t.hire.form.name}
                    className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
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
                    className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
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
                  className={`min-h-32 resize-none ${errors.message ? 'border-destructive' : ''}`}
                  required
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>

              {/* Terms Checkbox */}
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

              <Button type="submit" size="lg" className="w-full gap-2">
                {t.hire.form.send}
                <Send className="w-4 h-4" />
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
            <div className="flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl shadow-xl">
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
