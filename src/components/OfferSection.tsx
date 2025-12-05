const OfferSection = () => {
  return (
    <section className="section-container animate-slide-up animation-delay-400">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 p-8 sm:p-10 border border-primary/20">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">🔥 OFERTA ESPECIAL</span>
          </div>
          
          <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-6">
            Esta é uma <strong>oferta única</strong>, disponível apenas aqui nesta página.
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            ⚠️ Se você fechar, talvez não veja essa condição novamente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
