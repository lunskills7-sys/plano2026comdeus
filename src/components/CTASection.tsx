import { useEffect } from "react";

const CTASection = () => {
  useEffect(() => {
    // Load Cakto script
    const script = document.createElement("script");
    script.src = "https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
    </section>
  );
};

export default CTASection;
