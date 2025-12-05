const CTASection = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          🧾 Pronto para transformar seu 2026?
        </h2>
        
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          Se você deseja entrar em 2026 caminhando com Deus dia após dia, 
          clique abaixo para adicionar este plano completo à sua compra.
        </p>
      </div>
      
      {/* CAKTO Code Container */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl animate-pulse-soft" />
        
        <div className="relative bg-card border-2 border-dashed border-primary/40 rounded-2xl p-8 sm:p-12 text-center shadow-card">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Integração de Pagamento
            </span>
          </div>
          
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
            🟢 AQUI VAI O CÓDIGO DA CAKTO
          </h3>
          
          <p className="text-muted-foreground text-sm">
            Cole o código do botão da Cakto neste espaço
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
