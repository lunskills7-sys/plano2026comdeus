const WhatIsSection = () => {
  const features = [
    { emoji: "📖", text: "Um versículo-chave" },
    { emoji: "💭", text: "Uma reflexão profunda" },
    { emoji: "🙏", text: "Uma oração guiada" },
    { emoji: "✨", text: "Uma ação prática" },
    { emoji: "📌", text: "Uma declaração profética para 2026" },
  ];

  return (
    <section className="section-container py-4 animate-slide-up animation-delay-100">
      <div className="relative overflow-hidden bg-card/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-card border border-border/50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6 text-center">
            ✨ O que é este Plano de 30 Dias?
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center mb-10 max-w-2xl mx-auto">
            O <strong className="text-foreground">Plano de 30 Dias para Começar 2026 com Deus</strong> é 
            uma jornada espiritual diária para fortalecer sua fé, trazer paz ao coração, 
            renovar sua mente e alinhar seu ano ao propósito de Deus.
          </p>
          
          <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/30">
            <p className="text-sm font-medium text-muted-foreground mb-6 text-center uppercase tracking-wide">
              Cada dia contém:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-xl px-5 py-4 shadow-soft border border-border/30 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <span className="text-2xl">{feature.emoji}</span>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
