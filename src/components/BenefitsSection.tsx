const BenefitsSection = () => {
  const benefits = [
    { emoji: "🕊️", title: "Mais paz interior" },
    { emoji: "💆", title: "Menos preocupação" },
    { emoji: "🧭", title: "Direção espiritual clara" },
    { emoji: "💛", title: "Relacionamento com Deus fortalecido" },
    { emoji: "🧠", title: "Vida emocional mais organizada" },
    { emoji: "🌟", title: "Ano novo com propósito real" },
  ];

  return (
    <section className="section-container py-4 animate-slide-up animation-delay-300">
      <div className="relative overflow-hidden bg-gradient-to-br from-card/70 via-card/60 to-secondary/40 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-card border border-border/40">
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 rounded-full blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-accent/15 rounded-full blur-[60px]" />
        
        <div className="relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-10 text-center">
            🎁 Benefícios que você vai experimentar
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-background/70 backdrop-blur-sm rounded-xl px-6 py-5 shadow-soft border border-border/30 hover:border-primary/30 hover:shadow-card hover:bg-background/90 transition-all duration-300 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{benefit.emoji}</span>
                <span className="text-foreground font-semibold text-base sm:text-lg">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
