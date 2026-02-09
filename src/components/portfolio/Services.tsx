import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Cloud, Zap, Database, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIcons = [Code2, ShieldCheck, Cloud, Zap, Database, Globe];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* CSS decorative circle */}
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none animate-rotate-slow" style={{ animationDuration: '60s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div key={i} variants={cardVariants}>
                <div className="glass-card h-full p-6 group glow-hover hover:-translate-y-2 transition-transform duration-300">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.4)]"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0.05))',
                      border: '1px solid hsl(var(--primary) / 0.2)',
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
