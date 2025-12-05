const WhatIsSection = () => {
  const features = [
    { emoji: "📖", text: "Um versículo-chave" },
    { emoji: "💭", text: "Uma reflexão profunda" },
    { emoji: "🙏", text: "Uma oração guiada" },
    { emoji: "✨", text: "Uma ação prática" },
    { emoji: "📌", text: "Uma declaração profética para 2026" },
  ];

  return (
    <section className="section-container animate-slide-up animation-delay-100">
      <div className="card-elevated">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6 text-center">
          ✨ O que é este Plano de 30 Dias?
        </h2>
        
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center mb-8">
          O <strong className="text-foreground">Plano de 30 Dias para Começar 2026 com Deus</strong> é 
          uma jornada espiritual diária para fortalecer sua fé, trazer paz ao coração, 
          renovar sua mente e alinhar seu ano ao propósito de Deus.
        </p>
        
        <div className="bg-secondary/50 rounded-xl p-6">
          <p className="text-sm font-medium text-muted-foreground mb-4 text-center">
            Cada dia contém:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-background rounded-lg px-4 py-3 shadow-soft"
              >
                <span className="text-xl">{feature.emoji}</span>
                <span className="text-foreground font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
