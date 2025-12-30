import { ForgeLogo } from "@/components/ForgeLogo";
import { ForgeLogoMinimal } from "@/components/ForgeLogoMinimal";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--forge-steel)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--forge-steel)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center animate-forge-reveal">
          {/* The Logo */}
          <div className="mb-8">
            <ForgeLogo size={280} showGlow className="drop-shadow-2xl" />
          </div>

          {/* Brand name */}
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-[0.2em] forge-text-gradient mb-4">
            FORGE
          </h1>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg md:text-xl tracking-[0.3em] uppercase font-body font-medium mb-12">
            Forged Under Pressure
          </p>

          {/* CTA */}
          <Button variant="forge" size="xl">
            Enter The Forge
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Design Principles Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center forge-text-gradient mb-4 animate-cut-in">
            Design Principles
          </h2>
          <p className="text-muted-foreground text-center mb-20 tracking-widest uppercase">
            Non-Negotiable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { word: "Forged", not: "Drawn" },
              { word: "Cut", not: "Written" },
              { word: "Heavy", not: "Decorative" },
              { word: "Stable", not: "Playful" },
            ].map((principle, index) => (
              <div 
                key={principle.word}
                className="group p-8 border border-border hover:border-forge-steel-light transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-3xl font-display forge-text-gradient mb-2 group-hover:forge-ember-text transition-all duration-500">
                  {principle.word}
                </p>
                <p className="text-muted-foreground tracking-widest text-sm">
                  NOT {principle.not.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cut Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Ember glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forge-ember opacity-10 blur-[150px] animate-heat-shimmer" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display forge-text-gradient mb-6">
              The Signature Cut
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              One diagonal cut. A hammer strike frozen in steel. 
              This is not decoration—it's identity forged under pressure.
            </p>
          </div>

          {/* Logo showcase */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="text-center">
              <div className="p-12 border border-border hover:border-accent transition-colors duration-500">
                <ForgeLogo size={180} />
              </div>
              <p className="mt-6 text-muted-foreground tracking-widest text-sm uppercase">
                Full Render
              </p>
            </div>

            <div className="text-center">
              <div className="p-12 border border-border hover:border-accent transition-colors duration-500 bg-foreground">
                <ForgeLogoMinimal size={80} color="black" />
              </div>
              <p className="mt-6 text-muted-foreground tracking-widest text-sm uppercase">
                On Light
              </p>
            </div>

            <div className="text-center">
              <div className="p-12 border border-border hover:border-accent transition-colors duration-500">
                <ForgeLogoMinimal size={80} color="white" />
              </div>
              <p className="mt-6 text-muted-foreground tracking-widest text-sm uppercase">
                On Dark
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Section */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center forge-text-gradient mb-16">
            Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Pure Black", color: "bg-forge-black", hex: "#0A0A0A" },
              { name: "Steel Gray", color: "bg-forge-steel", hex: "#4D4D4D" },
              { name: "Pure White", color: "bg-foreground", hex: "#F2F2F2" },
              { name: "Burnt Ember", color: "bg-accent", hex: "#D45A1A" },
            ].map((swatch) => (
              <div key={swatch.name} className="text-center">
                <div 
                  className={`aspect-square ${swatch.color} border border-border mb-4`}
                />
                <p className="font-display text-sm tracking-wider">{swatch.name}</p>
                <p className="text-muted-foreground text-xs font-mono mt-1">{swatch.hex}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
            The logo works in pure black and pure white. 
            Ember is used sparingly—only when fire speaks louder than steel.
          </p>
        </div>
      </section>

      {/* The Test Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display forge-text-gradient mb-8">
            The Ultimate Test
          </h2>
          
          <div className="p-12 border border-border mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              "If I see <span className="text-foreground">only this F</span> on a hoodie…<br/>
              would I feel:<br/>
              <span className="forge-ember-text font-display not-italic text-2xl md:text-3xl mt-4 block">
                'This brand is serious. This is not for everyone.'
              </span>"
            </p>
          </div>

          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-12">
            A strong logo creates emotion without explanation.
          </p>

          {/* Large minimal logo */}
          <div className="flex justify-center">
            <ForgeLogoMinimal size={120} color="white" className="opacity-80 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <ForgeLogoMinimal size={32} color="steel" />
            <span className="font-display tracking-[0.2em] text-muted-foreground">FORGE</span>
          </div>
          
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Forge • Force • Focus • Fire • Formed
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
