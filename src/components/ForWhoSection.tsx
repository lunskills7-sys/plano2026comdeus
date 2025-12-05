const ForWhoSection = () => {
  const targets = [
    "Para quem deseja começar 2026 espiritualmente forte",
    "Para quem quer criar constância com Deus",
    "Para quem deseja menos ansiedade e mais clareza",
    "Para quem quer sentir a presença de Deus diariamente",
    "Para quem deseja transformação espiritual real",
  ];

  return (
    <section className="section-container animate-slide-up animation-delay-200">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
        🎯 Para quem é este plano?
      </h2>
      
      <div className="space-y-3">
        {targets.map((target, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 bg-card rounded-xl px-5 py-4 shadow-soft border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-sm">✓</span>
            </div>
            <p className="text-foreground font-medium">{target}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForWhoSection;
