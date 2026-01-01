import { FC } from "react";
import { ForgeLogoMinimal } from "../ForgeLogoMinimal";

/**
 * FORGE GRAPHIC ELEMENTS
 * 
 * Only 2 signature elements:
 * 1. Diagonal strike motif (from the F cut)
 * 2. Subtle metal grain texture
 */
export const ForgeGraphicElements: FC = () => {
  return (
    <div className="space-y-16">
      {/* Element 1: Diagonal Strike */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Element 01 — The Strike</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-forge-black border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            {/* Multiple diagonal lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              <line x1="250" y1="0" x2="150" y2="200" stroke="hsl(21 100% 50%)" strokeWidth="3" />
              <line x1="300" y1="0" x2="200" y2="200" stroke="hsl(0 0% 35%)" strokeWidth="2" opacity="0.5" />
              <line x1="350" y1="0" x2="250" y2="200" stroke="hsl(0 0% 35%)" strokeWidth="1" opacity="0.3" />
            </svg>
            <div className="relative z-10">
              <ForgeLogoMinimal size={120} color="white" />
            </div>
          </div>
          <div>
            <p className="font-heading text-2xl text-forge-white mb-4">THE DIAGONAL STRIKE</p>
            <p className="text-forge-steel-light leading-relaxed">
              Derived from the signature cut in the F. This motif represents the moment of impact — 
              where raw material meets force and becomes something stronger.
            </p>
            <ul className="mt-6 space-y-2 text-forge-steel text-sm">
              <li>• Angle: 35° from vertical</li>
              <li>• Primary: Ember orange</li>
              <li>• Secondary: Steel gray (supporting lines)</li>
              <li>• Use: Posters, apparel graphics, dividers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Element 2: Metal Grain */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Element 02 — Metal Grain</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="font-heading text-2xl text-forge-white mb-4">BRUSHED STEEL TEXTURE</p>
            <p className="text-forge-steel-light leading-relaxed">
              A subtle directional texture that suggests industrial metal surfaces. 
              Always subtle — never competes with content.
            </p>
            <ul className="mt-6 space-y-2 text-forge-steel text-sm">
              <li>• Opacity: Maximum 8%</li>
              <li>• Direction: Horizontal grain</li>
              <li>• Use: Backgrounds, premium materials</li>
              <li>• Never: On photos, over text</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 aspect-square bg-forge-black border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            {/* Metal grain texture */}
            <div 
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 1px,
                    hsl(0 0% 50%) 1px,
                    hsl(0 0% 50%) 2px
                  )
                `,
                backgroundSize: '4px 100%'
              }}
            />
            <p className="font-heading text-4xl text-forge-white z-10">FORGED</p>
          </div>
        </div>
      </div>

      {/* Application Examples */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Applications</p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Poster */}
          <div className="aspect-[3/4] bg-forge-black border border-forge-steel/20 relative overflow-hidden p-6 flex flex-col justify-end">
            {/* Diagonal strikes */}
            <svg className="absolute top-0 right-0 w-1/2 h-1/2" viewBox="0 0 200 200">
              <line x1="100" y1="0" x2="0" y2="150" stroke="hsl(21 100% 50%)" strokeWidth="4" />
              <line x1="150" y1="0" x2="50" y2="150" stroke="hsl(0 0% 35%)" strokeWidth="2" opacity="0.4" />
              <line x1="200" y1="0" x2="100" y2="150" stroke="hsl(0 0% 35%)" strokeWidth="1" opacity="0.2" />
            </svg>
            <ForgeLogoMinimal size={40} color="white" className="mb-4" />
            <p className="font-heading text-xl text-forge-white">NO PAIN</p>
            <p className="font-heading text-xl text-forge-ember">NO FORGE</p>
            <p className="text-xs text-forge-steel mt-4">Poster Application</p>
          </div>

          {/* App Screen */}
          <div className="aspect-[3/4] bg-forge-black border border-forge-steel/20 relative overflow-hidden">
            {/* Metal texture */}
            <div 
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 1px, hsl(0 0% 50%) 1px, hsl(0 0% 50%) 2px)`,
                backgroundSize: '3px 100%'
              }}
            />
            {/* App content */}
            <div className="relative z-10 p-4 h-full flex flex-col">
              <div className="flex items-center gap-2 pb-3 border-b border-forge-steel/20">
                <ForgeLogoMinimal size={20} color="white" />
                <span className="text-sm font-heading">FORGE</span>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-4xl font-heading text-forge-ember">245</p>
                <p className="text-xs text-forge-steel mt-1">TOTAL REPS</p>
                <div className="w-24 h-1 bg-forge-steel/30 mt-4">
                  <div className="w-3/4 h-full bg-forge-ember" />
                </div>
              </div>
              <p className="text-xs text-forge-steel text-center">App UI Application</p>
            </div>
          </div>

          {/* Clothing */}
          <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            {/* T-shirt shape */}
            <div className="w-3/4 h-4/5 bg-[#1a1a1a] relative" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 15%, 100% 100%, 0 100%, 0 15%)' }}>
              {/* Single strike on sleeve */}
              <svg className="absolute top-4 right-4 w-8 h-16" viewBox="0 0 30 60">
                <line x1="25" y1="0" x2="5" y2="60" stroke="hsl(21 100% 50%)" strokeWidth="3" />
              </svg>
              {/* Small F */}
              <div className="absolute top-1/4 left-1/4">
                <ForgeLogoMinimal size={24} color="white" />
              </div>
            </div>
            <p className="absolute bottom-4 text-xs text-forge-steel">Apparel Application</p>
          </div>
        </div>
      </div>

      {/* Warning */}
      <div className="p-6 border border-red-500/30 bg-red-500/5 text-center">
        <p className="text-red-500 font-heading text-lg mb-2">NO OTHER GRAPHIC ELEMENTS</p>
        <p className="text-forge-steel text-sm max-w-lg mx-auto">
          These are the ONLY two graphic elements in the FORGE system. 
          No additional textures, patterns, or decorative elements are permitted.
        </p>
      </div>
    </div>
  );
};

export default ForgeGraphicElements;
