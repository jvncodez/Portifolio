import { motion } from 'framer-motion';
import { Cloud, Code, Bot, Shield, Terminal, GitBranch } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      icon: Cloud,
      category: t.certifications.items[0].category,
      items: t.certifications.items[0].items,
      color: 'text-blue-400',
    },
    {
      icon: Code,
      category: t.certifications.items[1].category,
      items: t.certifications.items[1].items,
      color: 'text-yellow-400',
    },
    {
      icon: Bot,
      category: t.certifications.items[2].category,
      items: t.certifications.items[2].items,
      color: 'text-green-400',
    },
    {
      icon: Shield,
      category: t.certifications.items[3].category,
      items: t.certifications.items[3].items,
      color: 'text-red-400',
    },
    {
      icon: Terminal,
      category: t.certifications.items[4].category,
      items: t.certifications.items[4].items,
      color: 'text-purple-400',
    },
    {
      icon: GitBranch,
      category: t.certifications.items[5].category,
      items: t.certifications.items[5].items,
      color: 'text-orange-400',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.certifications.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-secondary/50 ${cert.color}`}>
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
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass glass-border rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              {t.certifications.philosophy.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 italic">
              "{t.certifications.philosophy.belief}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {t.certifications.philosophy.pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50"
                >
                  <p className="font-semibold text-foreground">{pillar.title}</p>
                  <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                </motion.div>
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
