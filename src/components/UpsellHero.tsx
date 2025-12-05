const UpsellHero = () => {
  return (
    <section className="section-container py-16 sm:py-20 text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-card/70 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 shadow-card border border-primary/20">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="text-sm font-medium text-foreground">
          ⏳ Oferta exclusiva por tempo limitado
        </span>
      </div>
      
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-8">
        Antes de ir para a área de membros…{" "}
        <span className="text-gradient-gold block sm:inline">
          Que tal começar 2026 com Deus todos os dias?
        </span>
      </h1>
      
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        💛 Você fez uma excelente escolha! Agora, tenho uma oportunidade exclusiva 
        para você viver um início de ano completamente transformado ao lado de Deus.
      </p>
    </section>
  );
};

export default UpsellHero;
