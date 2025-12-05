import UpsellHero from "@/components/UpsellHero";
import WhatIsSection from "@/components/WhatIsSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import OfferSection from "@/components/OfferSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-secondary/30 to-primary/5 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent -z-10" />
      
      {/* Floating orbs for premium SaaS feel */}
      <div className="fixed top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="fixed bottom-40 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-light/5 rounded-full blur-[150px] -z-10" />
      
      {/* Hero Section */}
      <UpsellHero />
      
      <div className="divider-soft" />
      
      {/* What Is Section */}
      <WhatIsSection />
      
      <div className="divider-soft" />
      
      {/* For Who Section + CTA */}
      <ForWhoSection />
      
      <div className="divider-soft" />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      <div className="divider-soft" />
      
      {/* Offer Section */}
      <OfferSection />
      
      <div className="divider-soft" />
      
      {/* CTA Section */}
      <CTASection />
      
      <div className="divider-soft" />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
