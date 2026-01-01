import { FC } from "react";
import { ForgeLogoMinimal } from "../ForgeLogoMinimal";
import { ForgeWordmark } from "../ForgeWordmark";

/**
 * FORGE CLOTHING & MERCH DESIGN
 * 
 * Core Products:
 * - Hero Hoodie
 * - Performance T-Shirt
 * - Training Shorts
 */
export const ForgeClothingDesign: FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Hoodie */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Hero Product — The Forge Hoodie</p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Front */}
          <div className="text-center">
            <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden">
              {/* Hoodie shape */}
              <div className="absolute inset-4 bg-[#111] rounded-t-[30%]">
                {/* Hood */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#1a1a1a] rounded-t-full" />
                {/* Drawstrings */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4">
                  <div className="w-0.5 h-8 bg-[#333]" />
                  <div className="w-0.5 h-8 bg-[#333]" />
                </div>
                {/* Minimal F - Left Chest */}
                <div className="absolute top-1/4 left-1/4">
                  <ForgeLogoMinimal size={28} color="white" />
                </div>
                {/* Pocket seam */}
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-3/4 h-px bg-[#222]" />
              </div>
            </div>
            <p className="mt-4 text-forge-steel-light font-heading">FRONT</p>
            <p className="text-xs text-forge-steel">Minimal F • Left chest • Embroidered</p>
          </div>

          {/* Back */}
          <div className="text-center">
            <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden">
              <div className="absolute inset-4 bg-[#111] rounded-t-[30%]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-[#1a1a1a] rounded-t-full" />
                {/* Back graphic - Large strike + wordmark */}
                <svg className="absolute top-12 right-4 w-1/4 h-32" viewBox="0 0 50 120">
                  <line x1="45" y1="0" x2="5" y2="120" stroke="hsl(21 100% 50%)" strokeWidth="4" />
                  <line x1="50" y1="10" x2="10" y2="130" stroke="hsl(0 0% 25%)" strokeWidth="2" />
                </svg>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                  <ForgeWordmark size={140} color="white" />
                </div>
                <p className="absolute top-[55%] left-1/2 -translate-x-1/2 text-[8px] text-forge-steel tracking-[0.4em]">
                  FORGED UNDER PRESSURE
                </p>
              </div>
            </div>
            <p className="mt-4 text-forge-steel-light font-heading">BACK</p>
            <p className="text-xs text-forge-steel">Wordmark + Strike • Screen printed</p>
          </div>

          {/* Detail */}
          <div className="text-center">
            <div className="aspect-[3/4] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden p-8 flex flex-col justify-center gap-6">
              {/* Sleeve detail */}
              <div className="relative">
                <div className="w-full h-16 bg-[#111] rounded-sm relative overflow-hidden">
                  <svg className="absolute right-0 top-0 w-1/3 h-full" viewBox="0 0 40 64">
                    <line x1="35" y1="0" x2="5" y2="64" stroke="hsl(21 100% 50%)" strokeWidth="3" />
                  </svg>
                </div>
                <p className="text-xs text-forge-steel mt-2">Sleeve strike detail</p>
              </div>
              {/* Industrial seam */}
              <div className="relative">
                <div className="w-full h-8 bg-[#111] rounded-sm flex items-center justify-center">
                  <div className="w-3/4 h-px bg-forge-steel/50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4px, hsl(0 0% 35%) 4px, hsl(0 0% 35%) 6px)' }} />
                </div>
                <p className="text-xs text-forge-steel mt-2">Industrial seam stitching</p>
              </div>
              {/* Label */}
              <div className="relative flex justify-center">
                <div className="w-12 h-16 bg-forge-black border border-forge-steel/30 flex flex-col items-center justify-center">
                  <ForgeLogoMinimal size={16} color="white" />
                  <p className="text-[4px] text-forge-steel mt-1 tracking-widest">FORGE</p>
                </div>
                <p className="absolute -bottom-5 text-xs text-forge-steel">Woven label</p>
              </div>
            </div>
            <p className="mt-4 text-forge-steel-light font-heading">DETAILS</p>
            <p className="text-xs text-forge-steel">Premium construction details</p>
          </div>
        </div>
        <div className="mt-8 p-6 border border-forge-steel/20 bg-forge-black/50">
          <p className="font-heading text-lg text-forge-white mb-3">HOODIE SPECIFICATIONS</p>
          <div className="grid md:grid-cols-4 gap-4 text-sm text-forge-steel">
            <div><span className="text-forge-steel-light">Weight:</span> 450 GSM</div>
            <div><span className="text-forge-steel-light">Fit:</span> Relaxed athletic</div>
            <div><span className="text-forge-steel-light">Color:</span> Matte Black only</div>
            <div><span className="text-forge-steel-light">Details:</span> Industrial stitching</div>
          </div>
        </div>
      </div>

      {/* Performance T-Shirt */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Performance T-Shirt</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center">
            {/* T-shirt shape with heat-map paneling */}
            <div 
              className="w-2/3 h-3/4 relative"
              style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 12%, 100% 100%, 0 100%, 0 12%)' }}
            >
              {/* Base */}
              <div className="absolute inset-0 bg-[#111]" />
              {/* Heat-map inspired paneling - subtle */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-1/4 right-1/4 h-1/3 bg-forge-ember" />
                <div className="absolute top-1/4 left-0 right-0 h-1/4 bg-gradient-to-b from-forge-ember/50 to-transparent" />
              </div>
              {/* Panel seams */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-[#222]" />
              <div className="absolute top-1/2 left-0 w-1/4 h-px bg-[#222]" />
              <div className="absolute top-1/2 right-0 w-1/4 h-px bg-[#222]" />
              {/* Logo */}
              <div className="absolute top-1/4 left-1/4">
                <ForgeLogoMinimal size={24} color="white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-heading text-2xl text-forge-white mb-4">ATHLETIC CUT</p>
            <p className="text-forge-steel-light mb-6">
              Technical performance fabric with subtle heat-map inspired paneling. 
              Minimal branding — the fit and quality speak.
            </p>
            <ul className="space-y-2 text-sm text-forge-steel">
              <li>• Moisture-wicking technical fabric</li>
              <li>• Subtle panel construction</li>
              <li>• Flat-lock seams</li>
              <li>• Left chest F embroidery only</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Training Shorts */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Training Shorts</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="font-heading text-2xl text-forge-white mb-4">UTILITY MINIMAL</p>
            <p className="text-forge-steel-light mb-6">
              Clean, functional design with utility-inspired details. 
              No unnecessary decoration — pure performance.
            </p>
            <ul className="space-y-2 text-sm text-forge-steel">
              <li>• 7" inseam</li>
              <li>• Hidden zip pocket</li>
              <li>• Minimal F at hem</li>
              <li>• Four-way stretch</li>
            </ul>
          </div>
          <div className="aspect-[4/3] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden flex items-center justify-center order-1 md:order-2">
            {/* Shorts shape */}
            <div className="w-2/3 h-1/2 bg-[#111] relative rounded-sm">
              {/* Waistband */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-[#1a1a1a]" />
              {/* Utility pocket detail */}
              <div className="absolute top-6 right-4 w-6 h-8 border border-[#2a2a2a]" />
              {/* Small zip */}
              <div className="absolute top-7 right-5 w-0.5 h-6 bg-forge-steel/30" />
              {/* Logo at hem */}
              <div className="absolute bottom-2 left-4">
                <ForgeLogoMinimal size={12} color="steel" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flat Lay */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Studio Flat Lay</p>
        <div className="aspect-[21/9] bg-[#0a0a0a] border border-forge-steel/20 relative overflow-hidden p-8 flex items-center justify-center gap-8">
          {/* Hoodie folded */}
          <div className="w-32 h-24 bg-[#111] rounded relative">
            <ForgeLogoMinimal size={20} color="white" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          {/* T-shirt folded */}
          <div className="w-28 h-20 bg-[#111] rounded relative">
            <ForgeLogoMinimal size={14} color="white" className="absolute top-1/2 left-1/4 -translate-y-1/2" />
          </div>
          {/* Shorts folded */}
          <div className="w-24 h-16 bg-[#111] rounded relative">
            <ForgeLogoMinimal size={10} color="steel" className="absolute bottom-2 left-2" />
          </div>
        </div>
        <p className="text-center text-xs text-forge-steel mt-4">Core collection — Monochrome palette — Premium materials</p>
      </div>
    </div>
  );
};

export default ForgeClothingDesign;
