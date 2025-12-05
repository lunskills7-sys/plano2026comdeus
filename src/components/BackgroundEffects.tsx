const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-background to-cream-dark" />
      
      {/* Divine light rays from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[600px] opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-gold-light/40 via-gold-light/10 to-transparent" 
             style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(40 60% 70% / 0.4) 0%, hsl(40 60% 70% / 0.1) 40%, transparent 70%)' }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl animate-float-slow" />
      <div className="absolute top-[40%] right-[5%] w-48 h-48 rounded-full bg-gradient-to-br from-accent/15 to-transparent blur-3xl animate-float-medium" />
      <div className="absolute bottom-[20%] left-[15%] w-56 h-56 rounded-full bg-gradient-to-br from-gold-light/20 to-transparent blur-3xl animate-float-reverse" />
      <div className="absolute top-[60%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl animate-float-slow" />
      
      {/* Subtle sparkles */}
      <div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-gold/60 animate-sparkle" />
      <div className="absolute top-[25%] right-[30%] w-1.5 h-1.5 rounded-full bg-gold-light/70 animate-sparkle animation-delay-200" />
      <div className="absolute top-[45%] left-[40%] w-2 h-2 rounded-full bg-accent/50 animate-sparkle animation-delay-400" />
      <div className="absolute top-[55%] right-[15%] w-1 h-1 rounded-full bg-gold/80 animate-sparkle animation-delay-100" />
      <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 rounded-full bg-gold-light/60 animate-sparkle animation-delay-300" />
      <div className="absolute top-[80%] right-[35%] w-2 h-2 rounded-full bg-gold/40 animate-sparkle animation-delay-500" />
      
      {/* Warm glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-gold/5 via-transparent to-transparent" />
      
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
    </div>
  );
};

export default BackgroundEffects;
