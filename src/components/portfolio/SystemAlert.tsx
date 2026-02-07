import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SystemAlert = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Animated warning border */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <div className="relative glass-card border-primary/30 p-6 md:p-8 rounded-2xl overflow-hidden">
          {/* Pulsing background glow */}
          <div className="absolute inset-0 bg-primary/5 animate-pulse-glow rounded-2xl" />
          
          <div className="relative z-10 flex items-start gap-4">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="flex-shrink-0 p-2 rounded-lg glass-badge"
            >
              <AlertTriangle className="w-6 h-6 text-primary" />
            </motion.div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                {t.systemAlert.label}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t.systemAlert.text}
              </p>
            </div>
          </div>

          {/* Animated border line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ width: '50%' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SystemAlert;
