import { FC } from "react";
import { Check, X } from "lucide-react";

/**
 * FORGE COLOR SYSTEM
 * 
 * Primary: Black, White, Steel Gray
 * Accent: Forge Orange (sparingly)
 * Includes usage guidelines
 */
export const ForgeColorSystem: FC = () => {
  return (
    <div className="space-y-16">
      {/* Primary Palette */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Primary Palette</p>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Black */}
          <div className="group">
            <div className="aspect-[4/3] bg-forge-black border-2 border-forge-steel/30 flex flex-col justify-end p-6">
              <p className="text-forge-white font-heading text-2xl">MATTE BLACK</p>
              <p className="text-forge-steel text-sm font-mono mt-2">#000000</p>
              <p className="text-forge-steel text-sm mt-1">Primary background, logos</p>
            </div>
          </div>

          {/* White */}
          <div className="group">
            <div className="aspect-[4/3] bg-forge-white flex flex-col justify-end p-6">
              <p className="text-forge-black font-heading text-2xl">PURE WHITE</p>
              <p className="text-forge-steel text-sm font-mono mt-2">#FFFFFF</p>
              <p className="text-forge-steel text-sm mt-1">Primary on dark, contrast</p>
            </div>
          </div>

          {/* Steel */}
          <div className="group">
            <div className="aspect-[4/3] bg-forge-steel flex flex-col justify-end p-6">
              <p className="text-forge-white font-heading text-2xl">STEEL GRAY</p>
              <p className="text-forge-white/60 text-sm font-mono mt-2">#5A5A5A</p>
              <p className="text-forge-white/60 text-sm mt-1">Secondary, supporting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accent Color */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Accent — Use Sparingly</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[3/2] bg-forge-ember flex flex-col justify-end p-8">
            <p className="text-forge-black font-heading text-3xl">FORGE ORANGE</p>
            <p className="text-forge-black/60 text-sm font-mono mt-2">#FF5A00</p>
            <p className="text-forge-black/60 text-sm mt-2">Heat, sparks, energy, action</p>
          </div>
          <div className="p-8 border border-forge-ember bg-forge-black/50 flex flex-col justify-center">
            <p className="font-heading text-xl text-forge-ember mb-4">EMBER GUIDELINES</p>
            <ul className="space-y-3 text-forge-steel-light text-sm">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-forge-ember mt-2 flex-shrink-0" />
                Maximum 10% of any composition
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-forge-ember mt-2 flex-shrink-0" />
                Reserved for: CTAs, progress, achievements
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-forge-ember mt-2 flex-shrink-0" />
                Never use for backgrounds or large fills
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-forge-ember mt-2 flex-shrink-0" />
                Represents "heat of the forge" — earned moments
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Correct Usage</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Allowed */}
          <div className="p-6 border border-green-500/30 bg-green-500/5">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-semibold">ALLOWED</span>
            </div>
            <ul className="space-y-3 text-forge-steel-light text-sm">
              <li>• Orange on buttons and CTAs</li>
              <li>• Progress bars and completion states</li>
              <li>• Achievement badges and highlights</li>
              <li>• Active navigation states</li>
              <li>• Accent text on dark backgrounds</li>
              <li>• Small icon highlights</li>
            </ul>
          </div>

          {/* Forbidden */}
          <div className="p-6 border border-red-500/30 bg-red-500/5">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-semibold">FORBIDDEN</span>
            </div>
            <ul className="space-y-3 text-forge-steel-light text-sm">
              <li>• Full orange backgrounds</li>
              <li>• Orange as primary logo color</li>
              <li>• Orange body text</li>
              <li>• Gradients with orange + other colors</li>
              <li>• Orange on light backgrounds</li>
              <li>• Overuse that dilutes impact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monochrome Priority */}
      <div className="p-8 border border-forge-steel/20 bg-forge-black text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-4">Design Principle</p>
        <p className="font-heading text-2xl md:text-3xl text-forge-white">
          IF IT DOESN'T WORK IN <span className="text-forge-steel-light">BLACK & WHITE</span>,<br />
          IT DOESN'T WORK.
        </p>
        <p className="text-forge-steel text-sm mt-6 max-w-xl mx-auto">
          All FORGE materials must be designed monochrome-first. 
          Orange is applied last, only where it adds meaning.
        </p>
      </div>
    </div>
  );
};

export default ForgeColorSystem;
