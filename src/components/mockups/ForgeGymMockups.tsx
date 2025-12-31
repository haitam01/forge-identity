import { FC } from "react";
import { ForgeAppIcon } from "../ForgeAppIcon";
import { ForgeWordmark } from "../ForgeWordmark";

/**
 * FORGE GYM ENVIRONMENT MOCKUPS
 */
export const ForgeGymMockups: FC = () => {
  return (
    <div className="space-y-12">
      <h3 className="text-2xl mb-8 text-center">Gym Environment</h3>

      {/* Main Gym Wall */}
      <div className="relative aspect-[16/9] bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border border-[hsl(var(--border))] overflow-hidden">
        {/* Brick texture overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, hsl(var(--border)) 60px, hsl(var(--border)) 61px), repeating-linear-gradient(0deg, transparent, transparent 30px, hsl(var(--border)) 30px, hsl(var(--border)) 31px)'
        }} />
        
        {/* Large Wall Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-[60px] bg-[hsl(var(--accent))] opacity-20" />
            <ForgeAppIcon size={280} variant="dark" />
          </div>
        </div>

        {/* Wordmark below */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ForgeWordmark size={400} color="steel" />
        </div>

        {/* Floor indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        
        {/* Gym equipment silhouettes */}
        <div className="absolute bottom-8 left-8 w-32 h-24 bg-[#111] rounded opacity-50" />
        <div className="absolute bottom-8 right-8 w-24 h-32 bg-[#111] rounded opacity-50" />
      </div>
      <p className="text-center text-sm text-[hsl(var(--muted-foreground))]">Main Gym Wall • Backlit steel signage</p>

      {/* Smaller Applications */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Floor Decal */}
        <div className="text-center">
          <div className="aspect-square bg-[#1a1a1a] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            {/* Floor texture */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at center, hsl(var(--border)) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
            {/* Distressed logo */}
            <div className="opacity-40">
              <ForgeAppIcon size={150} variant="dark" />
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Floor Decal</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Vinyl • 6ft diameter</p>
        </div>

        {/* Weight Plate */}
        <div className="text-center">
          <div className="aspect-square bg-[#0a0a0a] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            {/* Plate circle */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border-4 border-[#333] flex items-center justify-center relative">
              {/* Inner ring */}
              <div className="absolute inset-4 rounded-full border-2 border-[#444]" />
              {/* Center hole */}
              <div className="absolute w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-[#333]" />
              {/* Logo */}
              <div className="absolute top-4">
                <ForgeAppIcon size={32} variant="dark" />
              </div>
              {/* Weight text */}
              <div className="absolute bottom-6">
                <p className="text-xs text-[hsl(var(--muted-foreground))] font-bold">25 KG</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Weight Plate</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Cast rubber with embossed logo</p>
        </div>

        {/* Locker */}
        <div className="text-center">
          <div className="aspect-square bg-[#0a0a0a] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden p-4">
            {/* Locker door */}
            <div className="w-full h-full bg-gradient-to-b from-[#252525] to-[#1a1a1a] border border-[#333] relative">
              {/* Vents */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-1 bg-[#0a0a0a]" />
                ))}
              </div>
              {/* Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ForgeAppIcon size={48} variant="dark" />
              </div>
              {/* Handle */}
              <div className="absolute bottom-6 right-4 w-1 h-8 bg-[#444] rounded" />
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Member Locker</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Etched steel door</p>
        </div>
      </div>

      {/* Additional Applications */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Entry Signage */}
        <div className="text-center">
          <div className="aspect-[2/1] bg-gradient-to-b from-[#0a0a0a] to-[#111] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            {/* Door frame */}
            <div className="absolute inset-x-4 inset-y-2 border-2 border-[#333] flex items-center justify-between px-8">
              <ForgeAppIcon size={64} variant="dark" />
              <ForgeWordmark size={200} color="white" />
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Entry Signage</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Illuminated channel letters</p>
        </div>

        {/* Staff Apparel */}
        <div className="text-center">
          <div className="aspect-[2/1] bg-[#0a0a0a] border border-[hsl(var(--border))] flex items-center justify-center gap-8 px-8">
            {/* Polo */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-28 bg-[#1a1a1a] relative" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 15%, 100% 100%, 0 100%, 0 15%)' }}>
                <div className="absolute top-6 left-4">
                  <ForgeAppIcon size={20} variant="ember" />
                </div>
              </div>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">Staff Polo</p>
            </div>
            {/* Cap */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-14 relative">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-[#1a1a1a] rounded-t-full" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#222] rounded-b-lg" />
                <div className="absolute top-3 left-1/2 -translate-x-1/2">
                  <ForgeAppIcon size={16} variant="ember" />
                </div>
              </div>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">Staff Cap</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Staff Apparel</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Ember accent for team identification</p>
        </div>
      </div>
    </div>
  );
};

export default ForgeGymMockups;
