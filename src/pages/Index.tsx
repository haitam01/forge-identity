import { ForgeLogoMinimal } from "@/components/ForgeLogoMinimal";
import { ForgeWordmark } from "@/components/ForgeWordmark";
import { ForgeTypographySystem } from "@/components/brand/ForgeTypographySystem";
import { ForgeColorSystem } from "@/components/brand/ForgeColorSystem";
import { ForgeGraphicElements } from "@/components/brand/ForgeGraphicElements";
import { ForgeClothingDesign } from "@/components/brand/ForgeClothingDesign";
import { ForgeAppInterface } from "@/components/brand/ForgeAppInterface";
import { ForgePhotographyDirection } from "@/components/brand/ForgePhotographyDirection";
import { ForgeLogoApplications } from "@/components/brand/ForgeLogoApplications";
import { ForgeBrandGuidelines } from "@/components/ForgeBrandGuidelines";

const Index = () => {
  return (
    <div className="min-h-screen bg-forge-black text-forge-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="relative z-10 text-center">
          <ForgeLogoMinimal size={160} color="white" className="mx-auto" />
          <div className="mt-10">
            <ForgeWordmark size={380} color="white" className="mx-auto" />
          </div>
          <p className="mt-8 text-forge-steel-light text-lg tracking-[0.3em] uppercase">
            Forged Under Pressure
          </p>
        </div>
      </section>

      {/* 1. Logo System */}
      <section className="py-24 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">01</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Logo System</h2>
          </div>
          <ForgeLogoApplications />
        </div>
      </section>

      {/* 2. Typography */}
      <section className="py-24 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">02</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Typography</h2>
          </div>
          <ForgeTypographySystem />
        </div>
      </section>

      {/* 3. Color System */}
      <section className="py-24 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">03</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Color System</h2>
          </div>
          <ForgeColorSystem />
        </div>
      </section>

      {/* 4. Graphic Elements */}
      <section className="py-24 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">04</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Graphic Elements</h2>
          </div>
          <ForgeGraphicElements />
        </div>
      </section>

      {/* 5. Clothing & Merch */}
      <section className="py-24 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">05</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Clothing & Merch</h2>
          </div>
          <ForgeClothingDesign />
        </div>
      </section>

      {/* 6. App Interface */}
      <section className="py-24 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">06</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">App & Digital</h2>
          </div>
          <ForgeAppInterface />
        </div>
      </section>

      {/* 7. Photography */}
      <section className="py-24 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">07</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Photography Direction</h2>
          </div>
          <ForgePhotographyDirection />
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-24 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Specifications</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Brand Guidelines</h2>
          </div>
          <ForgeBrandGuidelines />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-forge-steel/10 text-center">
        <ForgeLogoMinimal size={40} color="steel" className="mx-auto" />
        <p className="mt-6 text-forge-steel text-sm tracking-widest uppercase">
          Forged Under Pressure
        </p>
        <p className="mt-4 text-forge-steel/50 text-xs">
          © 2026 FORGE. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
