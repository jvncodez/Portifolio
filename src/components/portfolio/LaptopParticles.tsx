import { motion } from 'framer-motion';
import { useMemo } from 'react';

const LaptopParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle, rgba(96,165,250,0.6) 0%, rgba(125,211,252,0.2) 100%)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(96,165,250,0.3)`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default LaptopParticles;
