import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalData } from "@/data/personal.loader";

const easeOut = [0.25, 0.4, 0.25, 1] as const;

const testimonialsData = personalData.testimonials;

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const Testimonials = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Animated background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t.testimonials.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        {/* Testimonials Grid - 3 columns */}
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
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative w-full md:w-[calc(33.333%-1rem)]"
            >
              <div className="relative h-full glass-card p-8 glow-hover">
                {/* Quote icon with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 right-8"
                >
                  <div className="w-8 h-8 rounded-full glass-badge flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary" />
                  </div>
                </motion.div>

                {/* Rating with stagger */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + star * 0.08 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                  "{testimonial.text[lang]}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
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
                  </motion.div>
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
