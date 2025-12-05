const CTASection = () => {
  return (
    <section className="section-container py-8">
      <div className="relative overflow-hidden bg-card/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-card border border-border/40">
        {/* Decorative glows */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            🧾 Pronto para transformar seu 2026?
          </h2>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Se você deseja entrar em 2026 caminhando com Deus dia após dia, 
            volte ao topo e clique no botão para adicionar este plano à sua compra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
