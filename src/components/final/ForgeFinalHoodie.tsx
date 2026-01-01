import { FC } from "react";
import { ForgeFinalLogo } from "./ForgeFinalLogo";

/**
 * FORGE HERO HOODIE — FINAL LOCKED
 * 
 * One hoodie. Black. Minimal. Production-ready.
 */
export const ForgeFinalHoodie: FC = () => {
  return (
    <div className="space-y-16">
      {/* MAIN VIEWS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* FRONT */}
        <div className="text-center">
          <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden">
            {/* Hoodie body */}
            <div className="absolute inset-4 bg-[#0f0f0f] rounded-t-[35%]">
              {/* Hood */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-[#141414] rounded-t-full" />
              {/* Hood inner shadow */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-[#0a0a0a] rounded-full opacity-50" />
              {/* Drawstrings */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-8">
                <div className="w-0.5 h-10 bg-[#2a2a2a]" />
                <div className="w-0.5 h-12 bg-[#2a2a2a]" />
              </div>
              {/* Kangaroo pocket */}
              <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3/4 h-[15%]">
                <div className="w-full h-full border-t border-[#1a1a1a] rounded-t-lg" />
              </div>
              {/* LEFT CHEST LOGO — THE PLACEMENT */}
              <div className="absolute top-[28%] left-[22%]">
                <ForgeFinalLogo size={32} color="white" />
              </div>
              {/* Ribbed cuffs hint */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0a0a0a]" />
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-white text-lg">FRONT</p>
          <p className="text-xs text-forge-steel">Left chest • Embroidered F • 1.5"</p>
        </div>

        {/* BACK */}
        <div className="text-center">
          <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden">
            <div className="absolute inset-4 bg-[#0f0f0f] rounded-t-[35%]">
              {/* Hood back */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-[#141414] rounded-t-full" />
              {/* Center seam */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-[70%] bg-[#1a1a1a]" />
              {/* Clean back - NO graphics */}
              {/* Ribbed hem */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#0a0a0a]" />
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-white text-lg">BACK</p>
          <p className="text-xs text-forge-steel">Clean • No graphics</p>
        </div>

        {/* SIDE */}
        <div className="text-center">
          <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden">
            <div className="absolute inset-4 bg-[#0f0f0f]" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)' }}>
              {/* Hood side */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-[#141414]" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)' }} />
              {/* Arm */}
              <div className="absolute top-16 -right-4 w-16 h-32 bg-[#0c0c0c] rounded-full transform -rotate-12" />
              {/* Side seam - industrial double stitch */}
              <div className="absolute top-24 left-0 w-1 h-[60%] flex flex-col gap-0.5">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-full h-1 bg-[#1a1a1a]" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-4 font-heading text-forge-white text-lg">SIDE</p>
          <p className="text-xs text-forge-steel">Industrial seam construction</p>
        </div>
      </div>

      {/* DETAIL SHOTS */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">Details</p>
        <div className="grid md:grid-cols-4 gap-4">
          {/* Logo closeup */}
          <div className="aspect-square bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(0 0% 15%) 2px, hsl(0 0% 15%) 3px)'
            }} />
            <ForgeFinalLogo size={80} color="white" className="relative z-10" />
            <p className="absolute bottom-2 text-[10px] text-forge-steel">Embroidered Logo</p>
          </div>

          {/* Stitching */}
          <div className="aspect-square bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            <div className="w-full h-12 relative">
              {/* Double needle stitch */}
              <div className="absolute top-1/2 left-0 right-0 h-4 -translate-y-1/2 flex flex-col justify-between">
                <div className="w-full h-px bg-[#2a2a2a]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, hsl(0 0% 15%), hsl(0 0% 15%) 4px, transparent 4px, transparent 6px)' }} />
                <div className="w-full h-px bg-[#2a2a2a]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 2px, hsl(0 0% 15%) 2px, hsl(0 0% 15%) 6px, transparent 6px, transparent 8px)' }} />
              </div>
            </div>
            <p className="absolute bottom-2 text-[10px] text-forge-steel">Industrial Seam</p>
          </div>

          {/* Fabric */}
          <div className="aspect-square bg-[#0f0f0f] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 8%) 3px, hsl(0 0% 8%) 4px),
                repeating-linear-gradient(90deg, transparent, transparent 3px, hsl(0 0% 8%) 3px, hsl(0 0% 8%) 4px)
              `
            }} />
            <p className="absolute bottom-2 text-[10px] text-forge-steel">450 GSM French Terry</p>
          </div>

          {/* Tag */}
          <div className="aspect-square bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            <div className="w-16 h-24 bg-forge-black border border-forge-steel/40 flex flex-col items-center justify-center gap-2 relative">
              {/* Woven texture */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, hsl(0 0% 30%) 1px, hsl(0 0% 30%) 2px)'
              }} />
              <ForgeFinalLogo size={20} color="white" className="relative z-10" />
              <p className="text-[6px] text-forge-steel-light tracking-[0.2em] relative z-10">FORGE</p>
              <p className="text-[4px] text-forge-steel tracking-wider relative z-10">PERFORMANCE</p>
            </div>
            <p className="absolute bottom-2 text-[10px] text-forge-steel">Woven Label</p>
          </div>
        </div>
      </div>

      {/* ATHLETE SHOT */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">On-Body</p>
        <div className="aspect-[16/9] bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] border border-forge-steel/20 relative overflow-hidden">
          {/* Directional light from right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-forge-steel/5 to-transparent" />
          
          {/* Athlete silhouette - centered, powerful stance */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            {/* Head */}
            <div className="w-16 h-20 bg-[#1a1a1a] rounded-full mb-2" />
            {/* Shoulders + hoodie */}
            <div className="w-48 h-32 bg-[#111] rounded-t-[40%] relative">
              {/* Hoodie neck */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#0a0a0a] rounded-t-full" />
              {/* Sweat highlights */}
              <div className="absolute top-4 right-8 w-1 h-8 bg-forge-steel/10 rounded" />
              <div className="absolute top-6 right-12 w-0.5 h-4 bg-forge-steel/5 rounded" />
              {/* Logo visible */}
              <div className="absolute top-8 left-8">
                <ForgeFinalLogo size={20} color="white" />
              </div>
            </div>
            {/* Arms crossed or at side */}
            <div className="w-56 h-20 bg-[#111] -mt-2 relative">
              <div className="absolute left-0 top-0 w-16 h-full bg-[#0c0c0c] rounded-l-full" />
              <div className="absolute right-0 top-0 w-16 h-full bg-[#0c0c0c] rounded-r-full" />
            </div>
          </div>
          
          {/* Photo direction text */}
          <div className="absolute bottom-4 left-4 text-left">
            <p className="text-[10px] text-forge-steel">HIGH CONTRAST • DIRECTIONAL LIGHT</p>
            <p className="text-[10px] text-forge-steel">NO SMILE • NO POSE • INTENSITY</p>
          </div>
        </div>
      </div>

      {/* SPECS */}
      <div className="p-8 border border-forge-steel/20 bg-forge-black/50">
        <p className="font-heading text-forge-white text-xl mb-6 text-center">SPECIFICATIONS</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-forge-ember text-xs uppercase tracking-widest mb-2">Fabric</p>
            <p className="text-forge-steel-light">450 GSM French Terry</p>
            <p className="text-forge-steel">80% Cotton / 20% Polyester</p>
          </div>
          <div>
            <p className="text-forge-ember text-xs uppercase tracking-widest mb-2">Fit</p>
            <p className="text-forge-steel-light">Relaxed Athletic</p>
            <p className="text-forge-steel">Drop shoulder, slightly oversized</p>
          </div>
          <div>
            <p className="text-forge-ember text-xs uppercase tracking-widest mb-2">Construction</p>
            <p className="text-forge-steel-light">Industrial double-needle</p>
            <p className="text-forge-steel">Reinforced stress points</p>
          </div>
          <div>
            <p className="text-forge-ember text-xs uppercase tracking-widest mb-2">Branding</p>
            <p className="text-forge-steel-light">Left chest F only</p>
            <p className="text-forge-steel">White embroidery, 1.5" height</p>
          </div>
        </div>
      </div>

      {/* PRODUCTION CHECK */}
      <div className="p-8 border border-green-500/30 bg-green-500/5">
        <p className="text-center text-green-500 font-heading text-lg mb-4">✓ MANUFACTURABLE</p>
        <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-forge-steel-light">Standard Production</p>
            <p className="text-green-500">✓ No special machinery</p>
          </div>
          <div>
            <p className="text-forge-steel-light">Logo Application</p>
            <p className="text-green-500">✓ Standard embroidery</p>
          </div>
          <div>
            <p className="text-forge-steel-light">Scalable</p>
            <p className="text-green-500">✓ 100 to 100,000 units</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgeFinalHoodie;
