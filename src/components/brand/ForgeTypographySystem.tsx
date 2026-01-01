import { FC } from "react";

/**
 * FORGE TYPOGRAPHY SYSTEM
 * 
 * Display: FORGE DISPLAY (Oswald - Sharp, angular, industrial)
 * Body: Clean geometric sans (Barlow)
 * Technical numbers: Dashboard/blueprint style
 */
export const ForgeTypographySystem: FC = () => {
  return (
    <div className="space-y-16">
      {/* Display Type */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-6">Display / Headlines</p>
        <div className="space-y-4">
          <h1 className="font-heading text-7xl md:text-8xl text-forge-white">FORGE DISPLAY</h1>
          <p className="font-heading text-4xl md:text-5xl text-forge-steel-light">
            STRENGTH EARNED, NOT GIVEN
          </p>
          <p className="font-heading text-2xl text-forge-steel">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </p>
        </div>
        <p className="text-forge-steel text-sm mt-6 max-w-lg">
          Bold, industrial, geometric. Sharp edges inspired by metal plates and machinery. 
          Used for headlines, impact text, and brand statements.
        </p>
      </div>

      {/* Body Type */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-6">Body / UI Text</p>
        <div className="space-y-4">
          <p className="font-body text-5xl text-forge-white">Barlow</p>
          <p className="font-body text-xl text-forge-steel-light leading-relaxed max-w-2xl">
            Clean, readable, modern. Built for readability across all platforms. Used for body copy, 
            descriptions, and interface elements. The perfect counterbalance to our aggressive display type.
          </p>
          <p className="font-body text-lg text-forge-steel">
            abcdefghijklmnopqrstuvwxyz 0123456789
          </p>
        </div>
      </div>

      {/* Technical Numbers */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-6">Technical Numbers</p>
        <div className="flex flex-wrap gap-8 items-end">
          <div className="text-center">
            <p className="font-heading text-8xl text-forge-ember font-bold tracking-tighter">78</p>
            <p className="text-xs text-forge-steel mt-2">Progress %</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-6xl text-forge-white tracking-tight">145<span className="text-2xl text-forge-steel">KG</span></p>
            <p className="text-xs text-forge-steel mt-2">Weight</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl text-forge-steel-light tracking-widest font-mono">04:32</p>
            <p className="text-xs text-forge-steel mt-2">Timer</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl text-forge-white">REP <span className="text-forge-ember">12</span>/12</p>
            <p className="text-xs text-forge-steel mt-2">Counter</p>
          </div>
        </div>
        <p className="text-forge-steel text-sm mt-8">
          Dashboard-style numbers. Technical, precise, blueprint-inspired. 
          Orange accent marks achievements and active states.
        </p>
      </div>

      {/* Type Specimens */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-6">Slogan Specimens</p>
        <div className="space-y-6">
          <div className="p-8 border border-forge-steel/20 bg-forge-black">
            <p className="font-heading text-3xl md:text-4xl text-forge-white tracking-wide">
              FORGED UNDER <span className="text-forge-ember">PRESSURE</span>
            </p>
          </div>
          <div className="p-8 border border-forge-steel/20 bg-forge-black">
            <p className="font-heading text-2xl md:text-3xl text-forge-steel-light tracking-widest">
              NO SHORTCUTS. NO EXCUSES.
            </p>
          </div>
          <div className="p-8 border border-forge-steel/20 bg-forge-white">
            <p className="font-heading text-2xl md:text-3xl text-forge-black tracking-wide">
              BECOME <span className="text-forge-ember">FORGED</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgeTypographySystem;
