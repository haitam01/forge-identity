import { FC } from "react";
import { ForgeAppIcon } from "../ForgeAppIcon";
import { ForgeWordmark } from "../ForgeWordmark";

/**
 * FORGE CLOTHING & MERCHANDISE MOCKUPS
 */
export const ForgeClothingMockups: FC = () => {
  return (
    <div className="space-y-16">
      <h3 className="text-2xl mb-8 text-center">Clothing & Merchandise</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Black Hoodie - Front */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            {/* Hoodie Shape */}
            <div className="absolute inset-4 bg-[#1a1a1a] rounded-t-[40%]">
              {/* Hood */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-[#222] rounded-t-full" />
              {/* Logo Placement - Center Chest */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
                <ForgeAppIcon size={80} variant="dark" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Hoodie - Center Chest</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">F Symbol • 4" print</p>
        </div>

        {/* Black Hoodie - Back */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 bg-[#1a1a1a] rounded-t-[40%]">
              {/* Hood */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-[#222] rounded-t-full" />
              {/* Logo Placement - Back Large */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
                <ForgeWordmark size={160} color="white" />
              </div>
              {/* Subtle F at bottom */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20">
                <ForgeAppIcon size={120} variant="dark" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Hoodie - Back Print</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Full Wordmark • Large</p>
        </div>

        {/* T-Shirt */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 bg-[#1a1a1a]" style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 15%, 100% 100%, 0 100%, 0 15%)' }}>
              {/* Left Chest Logo */}
              <div className="absolute top-1/4 left-1/4">
                <ForgeAppIcon size={40} variant="dark" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">T-Shirt - Left Chest</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">F Symbol • 2" embroidered</p>
        </div>

        {/* Gym Bag */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-8 bg-[#1a1a1a] rounded-lg">
              {/* Bag straps */}
              <div className="absolute -top-4 left-1/4 w-2 h-12 bg-[#333] rounded-full" />
              <div className="absolute -top-4 right-1/4 w-2 h-12 bg-[#333] rounded-full" />
              {/* Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ForgeAppIcon size={100} variant="ember" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Gym Bag</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Ember variant • Rubber patch</p>
        </div>

        {/* Water Bottle */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-x-16 inset-y-8 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-lg">
              {/* Cap */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-6 bg-[#333] rounded-t-lg" />
              {/* Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ForgeAppIcon size={48} variant="dark" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Water Bottle</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">Laser etched</p>
        </div>

        {/* Cap */}
        <div className="text-center">
          <div className="aspect-square bg-[#0A0A0A] border border-[hsl(var(--border))] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-8">
              {/* Cap shape */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#1a1a1a] rounded-t-full" />
              {/* Brim */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-36 h-8 bg-[#222] rounded-b-xl" />
              {/* Logo */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 translate-y-1">
                <ForgeAppIcon size={36} variant="dark" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Performance Cap</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">3D embroidered</p>
        </div>
      </div>

      {/* Tags & Labels */}
      <div className="mt-12">
        <h4 className="text-xl mb-6 text-center">Tags & Labels</h4>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Woven Label */}
          <div className="text-center">
            <div className="w-16 h-24 bg-[hsl(var(--forge-black))] flex items-center justify-center border border-[hsl(var(--border))]">
              <div className="text-center">
                <ForgeAppIcon size={24} variant="dark" />
                <p className="text-[6px] text-[hsl(var(--foreground))] mt-1 tracking-widest">FORGE</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">Woven Label</p>
          </div>

          {/* Hang Tag */}
          <div className="text-center">
            <div className="w-20 h-28 bg-[hsl(var(--forge-black))] flex flex-col items-center justify-center border border-[hsl(var(--border))] relative">
              {/* Hole */}
              <div className="absolute top-2 w-3 h-3 rounded-full border border-[hsl(var(--border))]" />
              <ForgeAppIcon size={32} variant="dark" />
              <p className="text-[8px] text-[hsl(var(--foreground))] mt-2 tracking-[0.2em]">FORGE</p>
              <p className="text-[6px] text-[hsl(var(--muted-foreground))] mt-1">PERFORMANCE</p>
            </div>
            <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">Hang Tag</p>
          </div>

          {/* Rubber Patch */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[hsl(var(--accent))] flex items-center justify-center">
              <ForgeAppIcon size={40} variant="ember" />
            </div>
            <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">Rubber Patch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgeClothingMockups;
