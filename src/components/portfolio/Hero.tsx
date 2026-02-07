import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ParticleBackground from './ParticleBackground';

const easeOut = [0.25, 0.4, 0.25, 1] as const;

const textVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.8, ease: easeOut },
  }),
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-badge backdrop-blur-md"
            >
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-primary">
                {t.hero.badge}
              </span>
            </motion.div>

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
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-primary-foreground overflow-hidden transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary) / 0.8))',
                    boxShadow: '0 0 30px -5px hsl(var(--primary) / 0.4), inset 0 1px 0 0 hsl(0 0% 100% / 0.15)',
                  }}
                >
                  {/* Shimmer overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                  {/* Border glow */}
                  <span className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/40 transition-colors" />
                  <span className="relative z-10">{t.hero.cta}</span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Rotating ring */}
              <div className="absolute -inset-4 rounded-3xl border border-primary/20 animate-rotate-slow" style={{ animationDuration: '30s' }} />
              
              {/* Profile Image with glass frame */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-border shadow-2xl glow-primary">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/fc6c684b-f9e3-49e2-985f-78d3ac366989.png"
                />
              </div>

              {/* Experience Badge - glass */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-4 -right-4 glass-strong glass-border rounded-2xl p-4 shadow-xl animate-glow-pulse cursor-default"
              >
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">{t.hero.experience}</div>
              </motion.div>

              {/* Floating decorative dots */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-4 h-4 bg-primary/40 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 w-3 h-3 bg-primary/30 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 left-1/4 w-2 h-2 bg-primary/50 rounded-full"
              />

              {/* Decorative blur orbs */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse-glow" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
