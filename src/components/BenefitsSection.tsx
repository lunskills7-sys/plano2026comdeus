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
    <section className="section-container animate-slide-up animation-delay-300">
      <div className="card-elevated bg-gradient-to-br from-card to-secondary/30">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-8 text-center">
          🎁 Benefícios que você vai experimentar
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-lg px-5 py-4 shadow-soft"
            >
              <span className="text-2xl">{benefit.emoji}</span>
              <span className="text-foreground font-medium">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
