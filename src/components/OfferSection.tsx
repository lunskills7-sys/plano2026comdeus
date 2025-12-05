const OfferSection = () => {
  return (
    <section className="section-container py-4 animate-slide-up animation-delay-400">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/15 backdrop-blur-xl p-8 sm:p-12 border border-primary/30 shadow-card">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-[60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-light/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/25 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wide">🔥 OFERTA ESPECIAL</span>
          </div>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 font-display">
            Esta é uma <strong className="text-gradient-gold">oferta única</strong>, disponível apenas aqui nesta página.
          </p>
          
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            ⚠️ Se você fechar, talvez não veja essa condição novamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
