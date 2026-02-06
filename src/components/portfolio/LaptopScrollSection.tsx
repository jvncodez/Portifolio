import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LaptopParticles from './LaptopParticles';
import Projects from './Projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const KeyboardKeys = () => {
  // Simplified keyboard layout rows
  const rows = [
    { keys: 13, height: 'h-[14px]' },
    { keys: 13, height: 'h-[14px]' },
    { keys: 12, height: 'h-[14px]' },
    { keys: 11, height: 'h-[14px]' },
    { keys: 9, height: 'h-[14px]', hasSpacebar: true },
  ];

  return (
    <div className="flex flex-col gap-[3px] px-[8%] pt-[6%]">
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-[3px] justify-center">
          {row.hasSpacebar ? (
            <>
              {Array.from({ length: 3 }).map((_, ki) => (
                <div
                  key={ki}
                  className={`${row.height} flex-1 rounded-[2px]`}
                  style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.08)' }}
                />
              ))}
              <div
                className={`${row.height} rounded-[2px]`}
                style={{ flex: 4, background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.08)' }}
              />
              {Array.from({ length: 3 }).map((_, ki) => (
                <div
                  key={ki + 10}
                  className={`${row.height} flex-1 rounded-[2px]`}
                  style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.08)' }}
                />
              ))}
            </>
          ) : (
            Array.from({ length: row.keys }).map((_, ki) => (
              <div
                key={ki}
                className={`${row.height} flex-1 rounded-[2px]`}
                style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.08)' }}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

const LaptopScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1: 0-40% — lid opens (85deg = closed flat, 0deg = open upright)
  const lidRotate = useTransform(scrollYProgress, [0, 0.4], [85, 0]);
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

        {/* Laptop wrapper with perspective */}
        <motion.div
          className="relative z-10"
          style={{
            scale: laptopScale,
            y: laptopY,
            perspective: 1200,
          }}
        >
          {/* Entire laptop tilted slightly for top-down view */}
          <div
            className="relative mx-auto"
            style={{
              width: 'min(900px, 80vw)',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(12deg)',
            }}
          >
            {/* === LID (Screen) === */}
            <motion.div
              style={{
                rotateX: lidRotate,
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="relative rounded-t-xl overflow-hidden"
                style={{
                  aspectRatio: '16/10',
                  background: '#0c0c0c',
                  border: '2px solid rgba(96,165,250,0.25)',
                  boxShadow: '0 0 30px rgba(96,165,250,0.1)',
                }}
              >
                {/* Screen bezel */}
                <div
                  className="absolute inset-0 m-[6px] rounded-lg overflow-hidden"
                  style={{ background: '#111' }}
                >
                  {/* Screen content — scrolls internally */}
                  <motion.div style={{ y: contentY }} className="p-4">
                    <Projects embedded />
                  </motion.div>

                  {/* Screen reflection */}
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
                  className="absolute top-[2px] left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: 5,
                    height: 5,
                    background: '#1a1a1a',
                    border: '1px solid rgba(96,165,250,0.3)',
                  }}
                />
              </div>
            </motion.div>

            {/* === HINGE === */}
            <div
              style={{
                height: 6,
                background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
                borderLeft: '2px solid rgba(96,165,250,0.15)',
                borderRight: '2px solid rgba(96,165,250,0.15)',
              }}
            />

            {/* === BASE (Keyboard + Trackpad) === */}
            <div
              className="relative rounded-b-xl overflow-hidden"
              style={{
                paddingBottom: '8%',
                background: 'linear-gradient(180deg, #1c1c1e 0%, #141416 100%)',
                border: '2px solid rgba(96,165,250,0.15)',
                borderTop: 'none',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 15px rgba(96,165,250,0.06)',
              }}
            >
              {/* Keyboard */}
              <KeyboardKeys />

              {/* Trackpad */}
              <div className="flex justify-center mt-[6px]">
                <div
                  className="rounded-md"
                  style={{
                    width: '35%',
                    height: 50,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>
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

        {/* Fade-in text */}
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
