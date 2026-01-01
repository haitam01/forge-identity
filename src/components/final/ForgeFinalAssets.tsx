import { FC } from "react";
import { ForgeFinalLogo } from "./ForgeFinalLogo";
import { ForgeFinalWordmark } from "./ForgeFinalWordmark";
import { ForgeFinalAppIcon } from "./ForgeFinalAppIcon";

/**
 * FORGE FINAL ASSETS — LOCKED
 * 
 * Complete locked brand assets display
 */
export const ForgeFinalAssets: FC = () => {
  return (
    <div className="space-y-24">
      {/* PRIMARY LOGO */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          Primary Logo — Locked
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* White on Black */}
          <div className="aspect-square bg-forge-black border border-forge-steel/30 flex items-center justify-center">
            <ForgeFinalLogo size={140} color="white" />
          </div>
          {/* Black on White */}
          <div className="aspect-square bg-forge-white flex items-center justify-center">
            <ForgeFinalLogo size={140} color="black" />
          </div>
        </div>
        <p className="text-center text-xs text-forge-steel mt-6">
          Single diagonal cut • No gradients • Production-ready
        </p>
      </section>

      {/* SIZE TEST */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          Size Validation
        </p>
        <div className="flex items-end justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="w-16 h-16 bg-forge-black border border-forge-steel/30 flex items-center justify-center mx-auto">
              <ForgeFinalLogo size={12} color="white" />
            </div>
            <p className="text-xs text-forge-steel mt-2">16px</p>
            <p className="text-[10px] text-forge-ember">Favicon</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-forge-black border border-forge-steel/30 flex items-center justify-center mx-auto">
              <ForgeFinalLogo size={24} color="white" />
            </div>
            <p className="text-xs text-forge-steel mt-2">32px</p>
            <p className="text-[10px] text-forge-steel">Tag</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-forge-black border border-forge-steel/30 flex items-center justify-center mx-auto">
              <ForgeFinalLogo size={48} color="white" />
            </div>
            <p className="text-xs text-forge-steel mt-2">64px</p>
            <p className="text-[10px] text-forge-steel">App</p>
          </div>
          <div className="text-center">
            <div className="w-28 h-28 bg-forge-black border border-forge-steel/30 flex items-center justify-center mx-auto">
              <ForgeFinalLogo size={80} color="white" />
            </div>
            <p className="text-xs text-forge-steel mt-2">Chest</p>
            <p className="text-[10px] text-forge-steel">2.5"</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-forge-black border border-forge-steel/30 flex items-center justify-center mx-auto">
              <ForgeFinalLogo size={44} color="white" />
            </div>
            <p className="text-xs text-forge-steel mt-2">Sleeve</p>
            <p className="text-[10px] text-forge-steel">1.5"</p>
          </div>
        </div>
      </section>

      {/* APP ICONS */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          App Icons
        </p>
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="rounded" theme="dark" />
            <p className="text-xs text-forge-steel mt-3">iOS Dark</p>
          </div>
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="rounded" theme="light" />
            <p className="text-xs text-forge-steel mt-3">iOS Light</p>
          </div>
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="square" theme="dark" />
            <p className="text-xs text-forge-steel mt-3">Android</p>
          </div>
        </div>
      </section>

      {/* EMBROIDERY VERSION */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          Embroidery — Single Color
        </p>
        <div className="max-w-md mx-auto">
          <div className="aspect-video bg-[#1a1a1a] border border-forge-steel/30 flex items-center justify-center relative">
            {/* Fabric texture */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(0 0% 20%) 2px, hsl(0 0% 20%) 3px)'
            }} />
            <ForgeFinalLogo size={100} color="white" className="relative z-10" />
          </div>
          <p className="text-center text-xs text-forge-steel mt-4">
            Thread: White #FFFFFF on Black fabric • Stitch count: ~8,000
          </p>
        </div>
      </section>

      {/* WORDMARK */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          Wordmark — Locked
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="aspect-[3/1] bg-forge-black border border-forge-steel/30 flex items-center justify-center">
            <ForgeFinalWordmark size={240} color="white" />
          </div>
          <div className="aspect-[3/1] bg-forge-white flex items-center justify-center">
            <ForgeFinalWordmark size={240} color="black" />
          </div>
        </div>
      </section>

      {/* LOCKUPS */}
      <section>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8 text-center">
          Logo Lockups
        </p>
        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Horizontal */}
          <div className="aspect-[4/1] bg-forge-black border border-forge-steel/30 flex items-center justify-center gap-6 px-8">
            <ForgeFinalLogo size={60} color="white" />
            <div className="w-px h-12 bg-forge-steel/30" />
            <ForgeFinalWordmark size={180} color="white" />
          </div>
          
          {/* Stacked */}
          <div className="aspect-[2/1] bg-forge-black border border-forge-steel/30 flex flex-col items-center justify-center gap-4">
            <ForgeFinalLogo size={80} color="white" />
            <ForgeFinalWordmark size={160} color="white" />
          </div>
        </div>
      </section>

      {/* PRODUCTION CHECK */}
      <section className="p-8 border border-green-500/30 bg-green-500/5">
        <p className="text-center text-green-500 font-heading text-lg mb-4">✓ PRODUCTION READY</p>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <p className="text-forge-steel-light">Printable</p>
            <p className="text-green-500">✓ Yes</p>
          </div>
          <div>
            <p className="text-forge-steel-light">Embroiderable</p>
            <p className="text-green-500">✓ Yes</p>
          </div>
          <div>
            <p className="text-forge-steel-light">Scalable</p>
            <p className="text-green-500">✓ 16px to ∞</p>
          </div>
          <div>
            <p className="text-forge-steel-light">Single Color</p>
            <p className="text-green-500">✓ No gradients</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgeFinalAssets;
