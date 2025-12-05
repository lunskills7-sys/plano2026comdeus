import { useEffect } from "react";

const ForWhoSection = () => {
  const targets = [
    "Para quem deseja começar 2026 espiritualmente forte",
    "Para quem quer criar constância com Deus",
    "Para quem deseja menos ansiedade e mais clareza",
    "Para quem quer sentir a presença de Deus diariamente",
    "Para quem deseja transformação espiritual real",
  ];

  useEffect(() => {
    // Load Cakto script
    const existingScript = document.querySelector(
      'script[src="https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section-container py-4 animate-slide-up animation-delay-200">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-10 text-center">
        🎯 Para quem é este plano?
      </h2>
      
      <div className="space-y-4 mb-12">
        {targets.map((target, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 bg-card/60 backdrop-blur-xl rounded-2xl px-6 py-5 shadow-card border border-border/40 hover:border-primary/40 hover:shadow-lg hover:bg-card/80 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-bold">✓</span>
            </div>
            <p className="text-foreground font-medium text-base sm:text-lg">{target}</p>
          </div>
        ))}
      </div>

      {/* CTA Cakto */}
      <div className="relative overflow-hidden rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/20 p-6 sm:p-8 shadow-card">
        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/15 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          <p className="text-center text-muted-foreground text-sm sm:text-base mb-6">
            👇 Clique abaixo para garantir sua oferta exclusiva
          </p>
          
          {/* Cakto Buttons Container */}
          <div className="flex flex-col items-center gap-4">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <cakto-upsell-buttons>
                    <cakto-upsell-accept
                      bg-color="#0f7865"
                      text-color="#ffffff"
                      upsell-accept-url="members_area"
                      offer-id="qpryggs"
                      app-base-url="https://app.cakto.com.br"
                      offer-type="upsell"
                      upsell-reject-url="members_area"
                    >
                      Sim, quero aproveitar a oferta
                    </cakto-upsell-accept>
                    <cakto-upsell-reject
                      upsell-reject-url="members_area"
                    >
                      Não, eu não quero aproveitar a oferta
                    </cakto-upsell-reject>
                  </cakto-upsell-buttons>
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
