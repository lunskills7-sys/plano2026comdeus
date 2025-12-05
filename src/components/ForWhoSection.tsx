const ForWhoSection = () => {
  const targets = [
    "Para quem deseja começar 2026 espiritualmente forte",
    "Para quem quer criar constância com Deus",
    "Para quem deseja menos ansiedade e mais clareza",
    "Para quem quer sentir a presença de Deus diariamente",
    "Para quem deseja transformação espiritual real",
  ];

  return (
    <section className="section-container py-4 animate-slide-up animation-delay-200">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-10 text-center">
        🎯 Para quem é este plano?
      </h2>
      
      <div className="space-y-4">
        {targets.map((target, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 bg-card/60 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-card border border-border/40 hover:border-primary/40 hover:shadow-lg hover:bg-card/80 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">✓</span>
            </div>
            <p className="text-foreground font-medium text-base sm:text-lg">{target}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForWhoSection;
