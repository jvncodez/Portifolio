const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20 animate-particle"
          style={{
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            left: `${12 + i * 11}%`,
            top: `${15 + (i * 17) % 70}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${10 + i * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
