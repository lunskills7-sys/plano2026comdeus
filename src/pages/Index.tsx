import UpsellHero from "@/components/UpsellHero";
import WhatIsSection from "@/components/WhatIsSection";
import ForWhoSection from "@/components/ForWhoSection";
import BenefitsSection from "@/components/BenefitsSection";
import OfferSection from "@/components/OfferSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated Background Effects */}
      <BackgroundEffects />
      
      {/* Content Layer */}
      <div className="relative z-10">
      {/* Hero Section */}
      <UpsellHero />
      
      <div className="divider-soft" />
      
      {/* What Is Section */}
      <WhatIsSection />
      
      <div className="divider-soft" />
      
      {/* For Who Section */}
      <ForWhoSection />
      
      <div className="divider-soft" />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      <div className="divider-soft" />
      
      {/* Offer Section */}
      <OfferSection />
      
      <div className="divider-soft" />
      
      {/* CTA with Cakto Placeholder */}
      <CTASection />
      
      <div className="divider-soft" />
      
      {/* Footer */}
      <Footer />
      </div>
    </main>
  );
};

export default Index;
