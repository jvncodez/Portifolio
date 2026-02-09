import { motion } from 'framer-motion';
import { Cloud, Code, Bot, Shield, Terminal, GitBranch } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    { id: 'cloud', icon: Cloud, category: t.certifications.items[0].category, items: t.certifications.items[0].items, color: 'text-blue-400' },
    { id: 'javascript', icon: Code, category: t.certifications.items[1].category, items: t.certifications.items[1].items, color: 'text-yellow-400' },
    { id: 'automation', icon: Bot, category: t.certifications.items[2].category, items: t.certifications.items[2].items, color: 'text-green-400' },
    { id: 'cybersecurity', icon: Shield, category: t.certifications.items[3].category, items: t.certifications.items[3].items, color: 'text-red-400' },
    { id: 'python', icon: Terminal, category: t.certifications.items[4].category, items: t.certifications.items[4].items, color: 'text-purple-400' },
    { id: 'vcs', icon: GitBranch, category: t.certifications.items[5].category, items: t.certifications.items[5].items, color: 'text-orange-400' },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* CSS decorative */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 border border-primary/5 rounded-full pointer-events-none animate-rotate-slow" style={{ animationDuration: '40s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.certifications.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="glass-card p-6 glow-hover hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg glass-badge ${cert.color}`}>
                  <cert.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{cert.category}</h3>
              </div>
              <ul className="space-y-2">
                {cert.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 text-center glow-primary">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              {t.certifications.philosophy.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "{t.certifications.philosophy.belief}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {t.certifications.philosophy.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl glass glass-border cursor-default hover:scale-105 hover:-translate-y-1 transition-all duration-200"
                >
                  <p className="font-semibold text-foreground">{pillar.title}</p>
                  <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                </div>
              ))}
            </div>
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
