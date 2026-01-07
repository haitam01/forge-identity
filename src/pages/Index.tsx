import { HeroSection } from "@/components/launch/HeroSection";
import { LogoShowcase } from "@/components/launch/LogoShowcase";
import { ProductShowcase } from "@/components/launch/ProductShowcase";
import { AthleteSection } from "@/components/launch/AthleteSection";
import { GymEnvironment } from "@/components/launch/GymEnvironment";
import { FinalStatement } from "@/components/launch/FinalStatement";
import { Footer } from "@/components/launch/Footer";

/**
 * FORGE BRAND LAUNCH — Maximum Enhancement
 * 
 * Cinematic animations, atmospheric depth,
 * premium presentation for global brand launch.
 */

const Index = () => {
  return (
    <div className="min-h-screen bg-forge-black text-forge-white overflow-x-hidden">
      {/* Hero — Hammer Strike Reveal */}
      <HeroSection />

      {/* Logo System — Premium Showcase */}
      <LogoShowcase />

      {/* Hero Hoodie — Product Presentation */}
      <ProductShowcase />

      {/* Athlete Vision — Photography Direction */}
      <AthleteSection />

      {/* Gym Environment — Brand in Context */}
      <GymEnvironment />

      {/* Final Statement — Closing Manifesto */}
      <FinalStatement />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
