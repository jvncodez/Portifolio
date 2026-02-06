import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

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
    name: "João Eduardo",
    role: "Founder BME Medic",
    text: {
      pt: "Impressionada com a habilidade de João em arquitetar modelos de machine learning e explicar conceitos complexos.",
      en: "Impressed by João's ability to architect machine learning models and explain complex concepts.",
      es: "Impresionada con la habilidad de João para arquitectar modelos de ML y explicar conceptos complejos.",
    },
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
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
    name: "Sanjay Patel",
    role: "Engineering Director",
    text: {
      pt: "Ele se destaca pelo seu conhecimento em arquitetura e sua habilidade de resolver problemas complexos de negócio.",
      en: "He stands out for his architecture knowledge and ability to solve complex business problems.",
      es: "Se destaca por su conocimiento en arquitectura y su habilidad para resolver problemas complejos de negocio.",
    },
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">5.0</span>
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground italic">"{testimonial.text[lang]}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
