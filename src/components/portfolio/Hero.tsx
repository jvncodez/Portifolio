import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ParticleBackground from './ParticleBackground';
import { personalData } from '@/data/personal.loader';

const easeOut = [0.25, 0.4, 0.25, 1] as const;

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: easeOut },
  }),
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />

      {/* CSS animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.08] rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {t.hero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-muted-foreground max-w-xl"
            >
              {t.hero.subtitlePre}
              <span className="text-primary font-semibold">{t.hero.subtitleName}</span>
              {t.hero.subtitlePost}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-primary-foreground overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                  boxShadow: '0 0 30px -5px hsl(var(--primary) / 0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.15)',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors" />
                <span className="relative z-10">{t.hero.cta}</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring - CSS */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/20 animate-rotate-slow" />
              
              {/* Profile Image */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-border shadow-2xl glow-primary">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src={personalData.profilePhoto}
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 glass-strong glass-border rounded-2xl p-4 shadow-xl animate-glow-pulse cursor-default">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">{t.hero.experience}</div>
              </div>

              {/* Floating dots - CSS */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-primary/40 rounded-full animate-float" />
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-primary/30 rounded-full animate-float-delayed" />

              {/* Decorative blur orbs */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
