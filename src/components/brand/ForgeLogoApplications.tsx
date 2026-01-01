import { FC } from "react";
import { ForgeLogoMinimal } from "../ForgeLogoMinimal";
import { ForgeWordmark } from "../ForgeWordmark";
import { ForgeAppIcon } from "../ForgeAppIcon";

/**
 * FORGE LOGO APPLICATIONS
 * 
 * Shows logo on various backgrounds and contexts
 */
export const ForgeLogoApplications: FC = () => {
  return (
    <div className="space-y-16">
      {/* Background Applications */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Background Applications</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Black background */}
          <div className="aspect-square bg-forge-black border border-forge-steel/30 flex items-center justify-center">
            <ForgeLogoMinimal size={80} color="white" />
          </div>
          
          {/* White background */}
          <div className="aspect-square bg-forge-white flex items-center justify-center">
            <ForgeLogoMinimal size={80} color="black" />
          </div>
          
          {/* Steel background */}
          <div className="aspect-square bg-forge-steel flex items-center justify-center">
            <ForgeLogoMinimal size={80} color="white" />
          </div>
          
          {/* Photo overlay */}
          <div className="aspect-square bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
            {/* Simulate photo texture */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'radial-gradient(circle at 60% 40%, hsl(0 0% 40%), hsl(0 0% 10%))'
            }} />
            <ForgeLogoMinimal size={80} color="white" className="relative z-10" />
          </div>
        </div>
      </div>

      {/* App Icon Contexts */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">App Icon</p>
        <div className="flex flex-wrap justify-center items-end gap-8">
          {/* iOS Home Screen Mockup */}
          <div className="text-center">
            <div className="w-64 h-48 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] rounded-2xl p-4 grid grid-cols-4 gap-3">
              {/* Row of app icons */}
              <div className="aspect-square bg-[#333] rounded-xl" />
              <div className="aspect-square bg-[#444] rounded-xl" />
              <ForgeAppIcon size={48} variant="dark" className="rounded-xl" />
              <div className="aspect-square bg-[#555] rounded-xl" />
              <div className="aspect-square bg-[#666] rounded-xl" />
              <div className="aspect-square bg-[#444] rounded-xl" />
              <div className="aspect-square bg-[#333] rounded-xl" />
              <div className="aspect-square bg-[#555] rounded-xl" />
            </div>
            <p className="text-xs text-forge-steel mt-3">iOS Home Screen</p>
          </div>
          
          {/* Different icon sizes */}
          <div className="flex items-end gap-4">
            <div className="text-center">
              <ForgeAppIcon size={60} variant="dark" />
              <p className="text-xs text-forge-steel mt-2">60px</p>
            </div>
            <div className="text-center">
              <ForgeAppIcon size={40} variant="dark" />
              <p className="text-xs text-forge-steel mt-2">40px</p>
            </div>
            <div className="text-center">
              <ForgeAppIcon size={29} variant="dark" />
              <p className="text-xs text-forge-steel mt-2">29px</p>
            </div>
            <div className="text-center">
              <ForgeAppIcon size={20} variant="dark" />
              <p className="text-xs text-forge-steel mt-2">20px</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clothing Tag */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Clothing Tag</p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Woven label */}
          <div className="text-center">
            <div className="w-20 h-28 bg-forge-black border border-forge-steel/30 flex flex-col items-center justify-center gap-2 relative">
              {/* Fabric texture */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 30%) 2px, hsl(0 0% 30%) 3px)'
              }} />
              <ForgeLogoMinimal size={28} color="white" className="relative z-10" />
              <p className="text-[8px] text-forge-steel-light tracking-[0.3em] relative z-10">FORGE</p>
            </div>
            <p className="text-xs text-forge-steel mt-3">Woven Label</p>
          </div>
          
          {/* Hang tag */}
          <div className="text-center">
            <div className="w-24 h-36 bg-forge-black border border-forge-steel/30 flex flex-col items-center justify-center gap-3 relative">
              {/* Hole */}
              <div className="absolute top-3 w-4 h-4 rounded-full border border-forge-steel/50" />
              <ForgeLogoMinimal size={36} color="white" className="mt-4" />
              <div className="w-12 h-px bg-forge-steel/30" />
              <p className="text-[10px] text-forge-steel-light tracking-[0.2em]">FORGE</p>
              <p className="text-[6px] text-forge-steel tracking-[0.15em]">PERFORMANCE</p>
            </div>
            <p className="text-xs text-forge-steel mt-3">Hang Tag</p>
          </div>
          
          {/* Embossed leather */}
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#2a2520] to-[#1a1510] rounded flex items-center justify-center relative overflow-hidden">
              {/* Leather texture */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'radial-gradient(circle at 30% 30%, transparent 20%, hsl(30 20% 15%) 100%)'
              }} />
              <ForgeLogoMinimal size={32} color="steel" className="relative z-10 opacity-70" />
            </div>
            <p className="text-xs text-forge-steel mt-3">Leather Deboss</p>
          </div>
        </div>
      </div>

      {/* Gym Wall */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Gym Wall Signage</p>
        <div className="aspect-[21/9] bg-gradient-to-b from-[#0a0a0a] to-[#151515] border border-forge-steel/20 relative overflow-hidden">
          {/* Brick texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 80px, hsl(0 0% 30%) 80px, hsl(0 0% 30%) 82px), repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(0 0% 30%) 40px, hsl(0 0% 30%) 42px)'
          }} />
          
          {/* Backlit logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
            {/* Glow */}
            <div className="absolute -inset-16 bg-forge-ember/10 blur-[60px] rounded-full" />
            <ForgeLogoMinimal size={180} color="white" className="relative z-10" />
            <ForgeWordmark size={320} color="steel" className="relative z-10" />
          </div>
          
          {/* Gym equipment shadows */}
          <div className="absolute bottom-0 left-8 w-40 h-32 bg-[#0a0a0a]/80 rounded-t" />
          <div className="absolute bottom-0 right-12 w-28 h-40 bg-[#0a0a0a]/80 rounded-t" />
        </div>
        <p className="text-center text-xs text-forge-steel mt-4">Backlit brushed steel signage • 8ft wide</p>
      </div>
    </div>
  );
};

export default ForgeLogoApplications;
