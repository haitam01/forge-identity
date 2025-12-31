import { ForgeLogo } from "@/components/ForgeLogo";
import { ForgeLogoMinimal } from "@/components/ForgeLogoMinimal";
import { ForgeWordmark } from "@/components/ForgeWordmark";
import { ForgeLogoFull } from "@/components/ForgeLogoFull";
import { ForgeAppIcon } from "@/components/ForgeAppIcon";
import { ForgeBrandGuidelines } from "@/components/ForgeBrandGuidelines";
import { ForgeAppBranding } from "@/components/ForgeAppBranding";
import { ForgeClothingMockups } from "@/components/mockups/ForgeClothingMockups";
import { ForgeGymMockups } from "@/components/mockups/ForgeGymMockups";

const Index = () => {
  return (
    <div className="min-h-screen bg-forge-black text-forge-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(hsl(0 0% 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 text-center">
          <div className="animate-forge-reveal">
            <ForgeLogo size={180} showGlow />
          </div>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <ForgeWordmark size={400} color="white" className="mx-auto" />
          </div>

          <p className="mt-8 text-forge-steel-light text-lg tracking-[0.3em] uppercase animate-fade-in" style={{ animationDelay: '0.9s' }}>
            Forged Under Pressure
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="w-px h-16 bg-gradient-to-b from-forge-steel to-transparent" />
        </div>
      </section>

      {/* Brand Overview */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Brand Vision</span>
              <h2 className="text-4xl md:text-5xl font-heading mt-4 leading-tight">
                Not Just A Brand.<br />
                <span className="text-forge-steel-light">An Identity.</span>
              </h2>
              <p className="mt-8 text-forge-steel-light text-lg leading-relaxed">
                FORGE is a premium lifestyle and performance brand for athletes, gym enthusiasts, 
                and sports passionate people. It represents discipline, strength, and transformation 
                under pressure.
              </p>
              <p className="mt-6 text-forge-steel text-lg">
                People don't use FORGE—they become <span className="text-forge-ember font-semibold">FORGED</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <ForgeLogoFull size={400} layout="stacked" color="white" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo System */}
      <section className="py-32 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Logo System</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Complete Identity</h2>
            <p className="mt-6 text-forge-steel-light max-w-2xl mx-auto">
              A cohesive system designed to work across all applications—from app icons to gym walls.
            </p>
          </div>

          {/* Primary Mark */}
          <div className="mb-24">
            <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">Primary Mark — The Forged F</h3>
            <div className="flex flex-wrap justify-center items-end gap-12">
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-12 inline-block">
                  <ForgeLogo size={120} />
                </div>
                <p className="mt-4 text-forge-steel text-sm">With Gradients</p>
              </div>
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-12 inline-block">
                  <ForgeLogoMinimal size={80} color="white" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Minimal White</p>
              </div>
              <div className="text-center">
                <div className="bg-forge-white border border-forge-steel/20 rounded-lg p-12 inline-block">
                  <ForgeLogoMinimal size={80} color="black" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Minimal Black</p>
              </div>
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-12 inline-block">
                  <ForgeLogoMinimal size={80} color="ember" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Ember Accent</p>
              </div>
            </div>
          </div>

          {/* Wordmark */}
          <div className="mb-24">
            <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">Wordmark</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8 inline-block">
                  <ForgeWordmark size={300} color="white" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">White on Dark</p>
              </div>
              <div className="text-center">
                <div className="bg-forge-white border border-forge-steel/20 rounded-lg p-8 inline-block">
                  <ForgeWordmark size={300} color="black" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Black on Light</p>
              </div>
            </div>
          </div>

          {/* Full Lockups */}
          <div className="mb-24">
            <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">Logo Lockups</h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8 inline-block">
                  <ForgeLogoFull size={350} layout="horizontal" color="white" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Horizontal</p>
              </div>
              <div className="text-center">
                <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8 inline-block">
                  <ForgeLogoFull size={180} layout="stacked" color="white" />
                </div>
                <p className="mt-4 text-forge-steel text-sm">Stacked</p>
              </div>
            </div>
          </div>

          {/* App Icons */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">App Icons</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <ForgeAppIcon size={80} variant="dark" />
                <p className="mt-4 text-forge-steel text-sm">Dark</p>
              </div>
              <div className="text-center">
                <ForgeAppIcon size={80} variant="light" />
                <p className="mt-4 text-forge-steel text-sm">Light</p>
              </div>
              <div className="text-center">
                <ForgeAppIcon size={80} variant="ember" />
                <p className="mt-4 text-forge-steel text-sm">Ember</p>
              </div>
              <div className="text-center">
                <ForgeAppIcon size={48} variant="dark" />
                <p className="mt-4 text-forge-steel text-sm">48px</p>
              </div>
              <div className="text-center">
                <ForgeAppIcon size={32} variant="dark" />
                <p className="mt-4 text-forge-steel text-sm">32px</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Signature Cut */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <ForgeLogoMinimal size={200} color="steel" />
                {/* Annotation line */}
                <svg className="absolute -right-32 top-0 w-40 h-20" viewBox="0 0 160 80">
                  <line x1="0" y1="20" x2="100" y2="20" stroke="hsl(20 85% 45%)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="0" cy="20" r="4" fill="hsl(20 85% 45%)" />
                </svg>
                <span className="absolute -right-64 top-3 text-forge-ember text-sm whitespace-nowrap">The Signature Cut</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Design Detail</span>
              <h2 className="text-4xl md:text-5xl font-heading mt-4">
                Forged Under<br />
                <span className="text-forge-steel-light">Pressure</span>
              </h2>
              <p className="mt-8 text-forge-steel-light text-lg leading-relaxed">
                The diagonal cut in the F isn't decoration—it's the brand's DNA. Like metal 
                struck by a hammer, this intentional mark represents transformation through 
                adversity.
              </p>
              <ul className="mt-8 space-y-4 text-forge-steel">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-forge-ember" />
                  Creates instant recognition
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-forge-ember" />
                  Suggests "forged metal" aesthetic
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-forge-ember" />
                  Differentiates from generic F marks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-32 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Color System</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Color Palette</h2>
            <p className="mt-6 text-forge-steel-light max-w-xl mx-auto">
              A disciplined palette that works in any context. Primary colors dominate, accent used sparingly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Matte Black */}
            <div className="group">
              <div className="aspect-square bg-forge-black border-2 border-forge-steel/30 rounded-lg flex items-end p-6 transition-all duration-300 group-hover:border-forge-steel/50">
                <div>
                  <p className="text-forge-white font-heading text-xl">Matte Black</p>
                  <p className="text-forge-steel text-sm mt-1 font-mono">#000000</p>
                  <p className="text-forge-steel text-xs mt-1">Primary Background</p>
                </div>
              </div>
            </div>

            {/* Steel Gray */}
            <div className="group">
              <div className="aspect-square bg-forge-steel rounded-lg flex items-end p-6 transition-all duration-300 group-hover:scale-[1.02]">
                <div>
                  <p className="text-forge-white font-heading text-xl">Steel Gray</p>
                  <p className="text-forge-white/60 text-sm mt-1 font-mono">#5A5A5A</p>
                  <p className="text-forge-white/60 text-xs mt-1">Secondary / Text</p>
                </div>
              </div>
            </div>

            {/* Burnt Orange */}
            <div className="group">
              <div className="aspect-square bg-forge-ember rounded-lg flex items-end p-6 transition-all duration-300 group-hover:scale-[1.02]">
                <div>
                  <p className="text-forge-black font-heading text-xl">Burnt Orange</p>
                  <p className="text-forge-black/60 text-sm mt-1 font-mono">#FF5A00</p>
                  <p className="text-forge-black/60 text-xs mt-1">Accent — Use Sparingly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Monochrome note */}
          <div className="mt-16 text-center">
            <p className="text-forge-steel text-sm">
              ✓ All marks work in pure black and white for maximum versatility
            </p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Typography</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Type System</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-forge-steel text-sm tracking-[0.2em] uppercase mb-4">Display / Headings</p>
              <p className="font-heading text-6xl text-forge-white">OSWALD</p>
              <p className="font-heading text-2xl text-forge-steel-light mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-heading text-2xl text-forge-steel mt-2">0123456789</p>
              <p className="text-forge-steel text-sm mt-6">
                Bold, industrial, geometric. Used for headlines and impact text.
              </p>
            </div>
            <div>
              <p className="text-forge-steel text-sm tracking-[0.2em] uppercase mb-4">Body / UI</p>
              <p className="font-body text-5xl text-forge-white">Barlow</p>
              <p className="font-body text-xl text-forge-steel-light mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</p>
              <p className="font-body text-xl text-forge-steel mt-2">0123456789</p>
              <p className="text-forge-steel text-sm mt-6">
                Clean, readable, modern. Used for body copy and UI elements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Logo & Color System */}
      <section className="py-32 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Application</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Fitness App Branding</h2>
            <p className="mt-6 text-forge-steel-light max-w-2xl mx-auto">
              The complete app logo system with color palette designed for the FORGE fitness experience.
            </p>
          </div>
          <ForgeAppBranding />
        </div>
      </section>

      {/* Clothing & Merchandise */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <ForgeClothingMockups />
        </div>
      </section>

      {/* Gym Environment */}
      <section className="py-32 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <ForgeGymMockups />
        </div>
      </section>

      {/* Brand Guidelines */}
      <section className="py-32 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">Specifications</span>
            <h2 className="text-4xl md:text-5xl font-heading mt-4">Brand Guidelines</h2>
            <p className="mt-6 text-forge-steel-light max-w-2xl mx-auto">
              Clear spacing rules, minimum sizes, and usage guidelines for consistent brand application.
            </p>
          </div>

          <ForgeBrandGuidelines />
        </div>
      </section>

      {/* The Ultimate Test */}
      <section className="py-32 px-6 bg-forge-black/50 border-t border-forge-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-forge-ember text-sm tracking-[0.3em] uppercase">The Test</span>
          <h2 className="text-3xl md:text-5xl font-heading mt-6 leading-relaxed">
            "If I see <span className="text-forge-ember">only this F</span> on a hoodie…<br />
            would I feel: <span className="text-forge-steel-light">'This is not for everyone.'</span>"
          </h2>
          
          <div className="mt-16 flex justify-center items-center gap-8">
            <div className="w-32 h-px bg-forge-steel/30" />
            <ForgeLogoMinimal size={60} color="white" />
            <div className="w-32 h-px bg-forge-steel/30" />
          </div>

          <p className="mt-16 text-forge-steel text-lg max-w-2xl mx-auto">
            A strong logo creates emotion without explanation.<br />
            FORGE is not about fitness. FORGE is about <span className="text-forge-ember">becoming</span>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-forge-steel/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <ForgeLogoFull size={200} layout="horizontal" color="steel" />
          <p className="text-forge-steel text-sm">
            © 2024 FORGE — Master Brand Identity
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
