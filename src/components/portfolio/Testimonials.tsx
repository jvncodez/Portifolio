import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialsData = [
  {
    name: "Arthur Muniz",
    role: "CEO Ventturehealth",
    text: {
      pt: "Trabalho com o João há algum tempo e posso afirmar que ele é um profissional extremamente competente e comprometido. Seu conhecimento em redes, inteligência artificial e segurança da informação demonstra profundidade técnica e visão estratégica. Ele entrega soluções robustas, bem estruturadas e com agilidade, sempre mantendo a qualidade.",
      en: "I have been working with João for some time and I can affirm that he is an extremely competent and committed professional. His knowledge in networking, artificial intelligence, and information security demonstrates technical depth and strategic vision. He delivers robust, well-structured solutions with agility, always maintaining quality.",
      es: "Trabajo con João hace algún tiempo y puedo afirmar que es un profesional sumamente competente y comprometido. Su conocimiento en redes, inteligencia artificial y seguridad de la información demuestra profundidad técnica y visión estratégica. Entrega soluciones robustas, bien estructuradas y con agilidad, siempre manteniendo la calidad.",
    },
    photo: "/images/img-arthurmuniz.jpeg",
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
    name: "Marivaldo Pedro",
    role: "Analista e desenvolvedor de Sistemas - Integrante da Hortec 2023",
    text: {
      pt: "Tive a oportunidade de trabalhar com João Victor e posso afirmar que ele é um profissional extremamente comprometido, responsável e dedicado ao que faz. Demonstra grande senso de responsabilidade, cumpre prazos com consistência e mantém um alto padrão de qualidade em suas entregas.",
      en: "I had the opportunity to work with João Victor and I can affirm that he is an extremely committed, responsible, and dedicated professional. He demonstrates a great sense of responsibility, consistently meets deadlines, and maintains a high standard of quality in his deliverables.",
      es: "Tuve la oportunidad de trabajar con João Victor y puedo afirmar que es un profesional sumamente comprometido, responsable y dedicado. Demuestra un gran sentido de la responsabilidad, cumple con los plazos con constancia y mantiene un alto nivel de calidad en sus entregas.",
    },
    photo: "/images/img-mariva.jpeg",
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
      pt: "Conheço o João a um bom tempo, ele se destaca pela sua persistência, constância e seus conhecimentos em Cloud e IA.",
      en: "I've known João for a long time, he stands out for his persistence, consistency, and his knowledge in Cloud and AI.",
      es: "Conozco a João desde hace un buen tiempo, se destaca por su persistencia, constancia y sus conocimientos en Cloud e IA.",
    },
    photo: "/images/img-julio.jpeg",
  },
  {
    name: "Luiz Carlos",
    role: "Mídia Audiovisual",
    text: {
      pt: "Sou um grande amigo de João e posso afirmar que ele é um profissional dedicado e com foco em solucionar problemas, com voz ativa e resolutivo.",
      en: "I am a close friend of João and I can affirm that he is a dedicated professional focused on solving problems, with an active voice and resolution-driven.",
      es: "Soy un gran amigo de João y puedo afirmar que es un profesional dedicado y enfocado en solucionar problemas, con voz activa y resolutivo.",
    },
    photo: "/images/img-luiz-carlos.jpeg",
  },
];

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative w-full md:w-[calc(33.333%-1rem)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-full glass-card p-8 glow-hover flex flex-col">
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
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px] flex-1">
                  "{testimonial.text[lang]}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <div className="w-12 h-12 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                    {testimonial.photo ? (
                      <img
                        src={testimonial.photo}
                        loading="lazy"
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full glass-badge flex items-center justify-center text-primary font-bold text-sm">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
