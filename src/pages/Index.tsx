import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";
import { ForgeFinalWordmark } from "@/components/final/ForgeFinalWordmark";
import { ForgeFinalAssets } from "@/components/final/ForgeFinalAssets";
import { ForgeFinalHoodie } from "@/components/final/ForgeFinalHoodie";

const Index = () => {
  return (
    <div className="min-h-screen bg-forge-black text-forge-white">
      {/* Hero — Simple. Final. */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
        <div className="relative z-10 text-center">
          <ForgeFinalLogo size={180} color="white" className="mx-auto" />
          <div className="mt-12">
            <ForgeFinalWordmark size={320} color="white" className="mx-auto" />
          </div>
          <p className="mt-10 text-forge-steel text-sm tracking-[0.4em] uppercase">
            Final Lock
          </p>
        </div>
      </section>

      {/* Logo System — Locked */}
      <section className="py-24 px-6 border-t border-forge-steel/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-xs tracking-[0.4em] uppercase">01</span>
            <h2 className="text-4xl font-heading mt-4">Logo — Locked</h2>
          </div>
          <ForgeFinalAssets />
        </div>
      </section>

      {/* Hero Hoodie — Locked */}
      <section className="py-24 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-xs tracking-[0.4em] uppercase">02</span>
            <h2 className="text-4xl font-heading mt-4">Hero Hoodie — Locked</h2>
          </div>
          <ForgeFinalHoodie />
        </div>
      </section>

      {/* Final Statement */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-3xl mx-auto text-center">
          <ForgeFinalLogo size={60} color="white" className="mx-auto mb-8" />
          <p className="font-heading text-3xl md:text-4xl text-forge-white leading-relaxed">
            THIS IS THE FORGE SYMBOL.<br />
            THIS IS THE FORGE HOODIE.<br />
            <span className="text-forge-steel">EVERYTHING ELSE IS BUILT ON THIS.</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-forge-steel/10 text-center">
        <ForgeFinalLogo size={24} color="white" className="mx-auto opacity-50" />
        <p className="mt-4 text-forge-steel/50 text-xs tracking-widest uppercase">
          Forged Under Pressure
        </p>
      </footer>
    </div>
  );
};

export default Index;
