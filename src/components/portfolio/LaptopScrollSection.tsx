import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LaptopParticles from './LaptopParticles';
import Projects from './Projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const LaptopScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: 0-40% — lid opens
  const lidRotate = useTransform(scrollYProgress, [0, 0.4], [85, 15]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const laptopY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);

  // Phase 2: 40-100% — content scrolls inside screen
  const contentY = useTransform(scrollYProgress, [0.4, 1], ['0%', '-60%']);

  // Fade-in text after laptop opens
  const textOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.85, 1], [30, 0]);

  // Screen glow intensity
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.1, 0.6]);

  if (isMobile) {
    return (
      <section className="py-24" style={{ background: '#05070F' }}>
        <div className="relative">
          <LaptopParticles />
          <Projects embedded />
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} style={{ height: '250vh' }}>
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#05070F' }}
      >
        <LaptopParticles />

        {/* Laptop container */}
        <motion.div
          className="relative z-10"
          style={{
            scale: laptopScale,
            y: laptopY,
            perspective: 1500,
          }}
        >
          <div
            className="relative mx-auto"
            style={{
              width: 'min(900px, 80vw)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Lid / Screen */}
            <motion.div
              className="relative origin-bottom"
              style={{
                rotateX: lidRotate,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="relative rounded-t-2xl overflow-hidden"
                style={{
                  aspectRatio: '16/10',
                  background: '#0a0a0a',
                  border: '2px solid rgba(96,165,250,0.3)',
                  boxShadow: '0 0 30px rgba(96,165,250,0.15)',
                }}
              >
                {/* Screen bezel */}
                <div
                  className="absolute inset-0 rounded-t-xl m-2 overflow-hidden"
                  style={{ background: '#111' }}
                >
                  {/* Screen content — scrolls internally */}
                  <motion.div style={{ y: contentY }} className="p-4">
                    <Projects embedded />
                  </motion.div>

                  {/* Screen reflection / gloss */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      opacity: glowOpacity,
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(96,165,250,0.05) 100%)',
                    }}
                  />
                </div>

                {/* Camera dot */}
                <div
                  className="absolute top-1 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    background: '#1a1a1a',
                    border: '1px solid rgba(96,165,250,0.3)',
                  }}
                />
              </div>
            </motion.div>

            {/* Base / Keyboard area */}
            <div
              className="relative rounded-b-2xl"
              style={{
                height: 18,
                background: 'linear-gradient(180deg, #1a1a1a 0%, #111 100%)',
                border: '2px solid rgba(96,165,250,0.2)',
                borderTop: 'none',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 20px rgba(96,165,250,0.08)',
              }}
            >
              {/* Trackpad notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-lg"
                style={{
                  width: 80,
                  height: 4,
                  background: '#222',
                  border: '1px solid rgba(96,165,250,0.15)',
                  borderTop: 'none',
                }}
              />
            </div>

            {/* Shadow under laptop */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2"
              style={{
                width: '90%',
                height: 30,
                background: 'radial-gradient(ellipse, rgba(96,165,250,0.12) 0%, transparent 70%)',
                filter: 'blur(15px)',
              }}
            />
          </div>
        </motion.div>

        {/* Fade-in text after scroll */}
        <motion.p
          className="absolute bottom-12 text-center text-sm font-medium z-10"
          style={{
            opacity: textOpacity,
            y: textY,
            color: 'rgba(125,211,252,0.7)',
          }}
        >
          {t.projects.subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default LaptopScrollSection;
