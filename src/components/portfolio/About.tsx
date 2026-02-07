import { motion } from 'framer-motion';
import { Shield, Code, Cpu, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const easeOut = [0.25, 0.4, 0.25, 1] as const;

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Shield, label: t.about.highlights.security },
    { icon: Code, label: t.about.highlights.backend },
    { icon: Cpu, label: t.about.highlights.automation },
  ];

  const techStack = ['Python', 'TypeScript', 'JavaScript', 'Node.js', 'React', 'HTML', 'CSS', 'C++', 'Supabase', 'Docker', 'n8n', 'Cursor', 'Git', 'GitHub', 'Linux', 'IPv4', 'IPv6', 'Infraestrutura de Rede'];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-20 h-20 border border-primary/10 rounded-2xl rotate-12 pointer-events-none"
      />

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
            {t.about.title}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.intro}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.skills}
              </p>
            </div>

            {/* Education */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-4 flex items-start gap-4"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="p-2 rounded-lg glass-badge"
              >
                <GraduationCap className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <h4 className="font-semibold mb-1">{t.about.education.title}</h4>
                <p className="text-sm text-muted-foreground">{t.about.education.technical}</p>
                <p className="text-sm text-muted-foreground">{t.about.education.university}</p>
              </div>
            </motion.div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-badge text-primary text-sm font-medium cursor-default"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-6 glow-primary animate-border-glow"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="p-2 rounded-lg glass-badge"
                >
                  <Target className="w-5 h-5 text-primary" />
                </motion.div>
                <h4 className="font-bold text-lg">{t.about.mission.title}</h4>
              </div>
              <p className="text-muted-foreground italic">
                "{t.about.mission.text}"
              </p>
            </motion.div>

            {/* Core Stack */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                {t.about.coreStack.title}
              </h4>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.03 } },
                }}
                className="flex flex-wrap gap-2"
              >
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.1, y: -3, borderColor: "hsl(var(--primary) / 0.5)" }}
                    className="px-3 py-1.5 rounded-lg glass glass-border text-sm font-medium text-foreground transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
