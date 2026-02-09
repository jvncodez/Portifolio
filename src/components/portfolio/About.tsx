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
      {/* CSS decorative */}
      <div className="absolute top-20 right-10 w-20 h-20 border border-primary/10 rounded-2xl rotate-12 pointer-events-none animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{t.about.intro}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.skills}</p>
            </div>

            {/* Education */}
            <div className="glass-card p-4 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300">
              <div className="p-2 rounded-lg glass-badge">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t.about.education.title}</h4>
                <p className="text-sm text-muted-foreground">{t.about.education.technical}</p>
                <p className="text-sm text-muted-foreground">{t.about.education.university}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-badge text-primary text-sm font-medium cursor-default hover:scale-105 transition-transform duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="space-y-6"
          >
            <div className="glass-card p-6 glow-primary animate-border-glow hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg glass-badge">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{t.about.mission.title}</h4>
              </div>
              <p className="text-muted-foreground italic">"{t.about.mission.text}"</p>
            </div>

            {/* Core Stack */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                {t.about.coreStack.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg glass glass-border text-sm font-medium text-foreground hover:scale-105 hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
