import { motion } from 'framer-motion';
import { Shield, Code, Cpu, GraduationCap, Briefcase, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Shield, label: t.about.highlights.security },
    { icon: Code, label: t.about.highlights.backend },
    { icon: Cpu, label: t.about.highlights.automation },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.intro}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.skills}
              </p>
            </div>

            {/* Education */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
              <div className="p-2 rounded-lg bg-primary/10">
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
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Experience Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hortec</h4>
                  <p className="text-sm text-muted-foreground">{t.about.experience.hortec}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SayMed</h4>
                  <p className="text-sm text-muted-foreground">{t.about.experience.saymed}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">VenttureHealth</h4>
                  <p className="text-sm text-muted-foreground">{t.about.experience.ventture}</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-bold text-lg">{t.about.mission.title}</h4>
              </div>
              <p className="text-muted-foreground italic">
                "{t.about.mission.text}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
