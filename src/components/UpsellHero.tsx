const UpsellHero = () => {
  return (
    <section className="section-container py-12 sm:py-16 text-center animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full mb-6 shadow-soft">
        <span className="text-sm font-medium text-muted-foreground">
          ⏳ Oferta exclusiva por tempo limitado
        </span>
      </div>
      
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
        Antes de ir para a área de membros…{" "}
        <span className="text-gradient-gold">
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
