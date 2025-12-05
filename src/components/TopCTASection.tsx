import { useEffect } from "react";

const TopCTASection = () => {
  useEffect(() => {
    // Ensure Cakto script is loaded
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
    <section className="section-container py-6">
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

export default TopCTASection;
