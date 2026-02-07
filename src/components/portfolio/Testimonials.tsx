import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialsData = [
  {
    name: "Arthur Muniz",
    role: "CEO Ventturehealth",
    text: {
      pt: "O trabalho de João em redes neurais demonstra um entendimento profundo. Seus projetos entregam soluções robustas.",
      en: "João's work on neural networks demonstrates deep understanding. His projects deliver robust solutions.",
      es: "El trabajo de João en redes neuronales demuestra un entendimiento profundo. Sus proyectos entregan soluciones robustas.",
    },
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Eisangela Rocha",
    role: "Analista de Ti - Samoa Resorts",
    text: {
      pt: "Gostaria de registrar nosso reconhecimento e agradecimento ao João por todo o trabalho realizado no setor de TI. Durante o período em que esteve conosco, demonstrou comprometimento, profissionalismo e muita disposição para colaborar com o time, sempre buscando soluções e contribuindo para a melhoria contínua dos processos.",
      en: "I would like to express our recognition and gratitude to João for all the work done in the IT department. During his time with us, he demonstrated commitment, professionalism, and great willingness to collaborate with the team, always seeking solutions and contributing to the continuous improvement of processes.",
      es: "Me gustaría registrar nuestro reconocimiento y agradecimiento a João por todo el trabajo realizado en el sector de TI. Durante el período en que estuvo con nosotros, demostró compromiso, profesionalismo y mucha disposición para colaborar con el equipo, siempre buscando soluciones y contribuyendo a la mejora continua de los procesos.",
    },
    photo: "/images/img-elis.jpeg",
  },
  {
    name: "Rodrigo Silva",
    role: "Comercial Ventturehealth",
    text: {
      pt: "É uma satisfação fechar projetos de desenvolvimento para a Ventture, com a confiança que João entregará resultados de excelência.",
      en: "As a sales professional, it is a pleasure to close development projects for Ventture, with the confidence that João and his team will deliver excellent results.",
      es: "Como comercial, es una satisfacción cerrar proyectos de desarrollo para Ventture, con la confianza de que João y su equipo entregarán resultados de excelencia.",
    },
    photo: "/images/testimonial-ava.jpg",
  },
  {
    name: "Júlio César",
    role: "Desenvolvedor de Sistemas",
    text: {
      pt: "Ele se destaca pela sua persistência, constância e seus conhecimentos em Cloud e IA",
      en: "He stands out for his persistence, consistency, and his knowledge in Cloud and AI.",
      es: "Se destaca por su persistencia, constancia y sus conocimientos en Cloud e IA.",
    },
    photo: "/images/img-julio.jpeg",
  },
  {
    name: "Joanderson Lacerda",
    role: "Professor de Química, Coordenador de Projetos - Hortec",
    text: {
      pt: "Em desenvolvimento",
      en: "Under development",
      es: "En desarrollo",
    },
    photo: "",
  },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Testimonials Grid - 3 columns */}
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-full md:w-[calc(33.333%-1rem)]"
            >
              <div className="relative h-full glass-card p-8 glow-hover">
                {/* Quote icon */}
                <div className="absolute -top-4 right-8">
                  <div className="w-8 h-8 rounded-full glass-badge flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  "{testimonial.text[lang]}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <div className="relative">
                    {testimonial.photo ? (
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full glass-badge flex items-center justify-center text-primary font-bold text-sm">
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
