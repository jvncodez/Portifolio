import { motion } from 'framer-motion';
import { Cloud, Code, Bot, Shield, Terminal, GitBranch } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const easeOut = [0.25, 0.4, 0.25, 1] as const;
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    { icon: Cloud, category: t.certifications.items[0].category, items: t.certifications.items[0].items, color: 'text-blue-400' },
    { icon: Code, category: t.certifications.items[1].category, items: t.certifications.items[1].items, color: 'text-yellow-400' },
    { icon: Bot, category: t.certifications.items[2].category, items: t.certifications.items[2].items, color: 'text-green-400' },
    { icon: Shield, category: t.certifications.items[3].category, items: t.certifications.items[3].items, color: 'text-red-400' },
    { icon: Terminal, category: t.certifications.items[4].category, items: t.certifications.items[4].items, color: 'text-purple-400' },
    { icon: GitBranch, category: t.certifications.items[5].category, items: t.certifications.items[5].items, color: 'text-orange-400' },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-40 h-40 border border-primary/5 rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
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
            {t.certifications.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto"
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.category}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-6 glow-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -15, 15, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className={`p-2 rounded-lg glass-badge ${cert.color}`}
                >
                  <cert.icon className="w-5 h-5" />
                </motion.div>
                <h3 className="font-semibold text-lg">{cert.category}</h3>
              </div>
              <ul className="space-y-2">
                {cert.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center glow-primary">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 text-primary"
            >
              {t.certifications.philosophy.title}
            </motion.h3>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "{t.certifications.philosophy.belief}"
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {t.certifications.philosophy.pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="p-4 rounded-xl glass glass-border cursor-default"
                >
                  <p className="font-semibold text-foreground">{pillar.title}</p>
                  <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-muted-foreground leading-relaxed">
              {t.certifications.philosophy.mission}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
