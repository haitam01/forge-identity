import { FC } from "react";
import { ForgeLogoMinimal } from "@/components/ForgeLogoMinimal";
import { ForgeWordmark } from "@/components/ForgeWordmark";
import { ForgeAppIcon } from "@/components/ForgeAppIcon";

/**
 * FORGE App Mockup - Shows the logo in a fitness app context
 */
export const ForgeAppMockup: FC = () => {
  return (
    <div className="bg-forge-black rounded-3xl border border-forge-steel/30 p-2 max-w-sm mx-auto shadow-2xl">
      {/* Phone frame */}
      <div className="bg-forge-black rounded-2xl overflow-hidden">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-3 text-xs text-forge-steel">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 border border-forge-steel rounded-sm">
              <div className="w-3/4 h-full bg-forge-ember" />
            </div>
          </div>
        </div>
        
        {/* App header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-forge-steel/10">
          <ForgeLogoMinimal size={28} color="white" />
          <div className="w-8 h-8 rounded-full bg-forge-steel/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-forge-ember" />
          </div>
        </div>
        
        {/* App content */}
        <div className="p-6 space-y-6">
          <div>
            <p className="text-forge-steel text-sm">Today's Progress</p>
            <p className="text-forge-white font-heading text-3xl mt-1">78%</p>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Workouts", value: "12" },
              { label: "Hours", value: "18" },
              { label: "Streak", value: "7" },
            ].map((stat) => (
              <div key={stat.label} className="bg-forge-steel/10 rounded-lg p-3 text-center">
                <p className="text-forge-white font-heading text-xl">{stat.value}</p>
                <p className="text-forge-steel text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Activity ring */}
          <div className="flex justify-center py-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="hsl(0 0% 20%)" strokeWidth="8" fill="none" />
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="#FF5A00" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray="251"
                  strokeDashoffset="55"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <ForgeLogoMinimal size={30} color="ember" />
              </div>
            </div>
          </div>
          
          {/* Action button */}
          <button className="w-full bg-forge-ember text-forge-black font-heading py-4 rounded-lg text-lg">
            START WORKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * FORGE Clothing Mockup - Shows the logo on apparel
 */
export const ForgeClothingMockup: FC = () => {
  return (
    <div className="space-y-12">
      {/* Hoodie mockup */}
      <div className="relative">
        <div className="bg-gradient-to-b from-forge-steel/20 to-forge-black rounded-2xl p-12 flex flex-col items-center">
          {/* Hoodie shape */}
          <div className="relative w-72 h-80">
            {/* Hood */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-forge-black rounded-t-full border-t-2 border-x-2 border-forge-steel/30" />
            
            {/* Body */}
            <div className="absolute top-12 left-0 right-0 bottom-0 bg-forge-black rounded-lg border-2 border-forge-steel/30 flex items-center justify-center">
              <ForgeLogoMinimal size={80} color="white" />
            </div>
            
            {/* Left sleeve */}
            <div className="absolute top-16 -left-8 w-12 h-32 bg-forge-black rounded-l-lg border-l-2 border-t-2 border-b-2 border-forge-steel/30 -rotate-12" />
            
            {/* Right sleeve */}
            <div className="absolute top-16 -right-8 w-12 h-32 bg-forge-black rounded-r-lg border-r-2 border-t-2 border-b-2 border-forge-steel/30 rotate-12" />
          </div>
          
          <p className="text-forge-steel-light mt-6 text-sm">Premium Hoodie — Chest Print</p>
        </div>
      </div>
      
      {/* Tag mockup */}
      <div className="flex justify-center gap-8">
        {/* Woven tag */}
        <div className="text-center">
          <div className="w-16 h-24 bg-forge-black border border-forge-steel/50 rounded-sm flex flex-col items-center justify-center p-2 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-2 bg-forge-steel/30 rounded-b-sm" />
            <ForgeLogoMinimal size={24} color="white" />
            <p className="text-[6px] text-forge-steel mt-2 tracking-widest">FORGED</p>
          </div>
          <p className="text-forge-steel text-xs mt-3">Woven Tag</p>
        </div>
        
        {/* Hang tag */}
        <div className="text-center">
          <div className="w-20 h-28 bg-forge-black border border-forge-steel/30 rounded-sm flex flex-col items-center justify-center p-3 relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-forge-steel/50" />
            <ForgeLogoMinimal size={32} color="white" />
            <div className="mt-3 w-full border-t border-forge-steel/20 pt-2">
              <ForgeWordmark size={60} color="steel" />
            </div>
          </div>
          <p className="text-forge-steel text-xs mt-3">Hang Tag</p>
        </div>
        
        {/* Embroidered patch */}
        <div className="text-center">
          <div className="w-20 h-20 bg-forge-ember rounded-lg flex items-center justify-center border-4 border-forge-black">
            <ForgeLogoMinimal size={36} color="black" />
          </div>
          <p className="text-forge-steel text-xs mt-3">Embroidered Patch</p>
        </div>
      </div>
    </div>
  );
};

/**
 * FORGE Gym Mockup - Shows the logo in gym environment
 */
export const ForgeGymMockup: FC = () => {
  return (
    <div className="space-y-8">
      {/* Gym wall rendering */}
      <div className="relative bg-gradient-to-b from-forge-steel/10 to-forge-black rounded-2xl overflow-hidden aspect-video">
        {/* Brick texture overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                hsl(0 0% 30%) 50px,
                hsl(0 0% 30%) 52px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 25px,
                hsl(0 0% 30%) 25px,
                hsl(0 0% 30%) 27px
              )
            `
          }}
        />
        
        {/* Spotlight effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-forge-ember/10 blur-3xl rounded-full" />
        
        {/* Logo on wall */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <ForgeLogoMinimal size={180} color="white" className="drop-shadow-2xl" />
            <div className="mt-8">
              <ForgeWordmark size={300} color="white" className="opacity-90" />
            </div>
          </div>
        </div>
        
        {/* Floor reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-forge-black to-transparent" />
        
        {/* Gym equipment silhouettes */}
        <div className="absolute bottom-4 left-8 flex gap-4 opacity-30">
          {/* Dumbbell */}
          <div className="w-16 h-6 flex items-center">
            <div className="w-4 h-6 bg-forge-steel rounded-sm" />
            <div className="flex-1 h-2 bg-forge-steel" />
            <div className="w-4 h-6 bg-forge-steel rounded-sm" />
          </div>
          {/* Barbell plate */}
          <div className="w-10 h-10 rounded-full border-4 border-forge-steel" />
        </div>
      </div>
      
      {/* Additional gym applications */}
      <div className="grid grid-cols-3 gap-4">
        {/* Floor decal */}
        <div className="bg-forge-steel/10 rounded-xl p-6 text-center">
          <div className="w-24 h-24 mx-auto rounded-full border-2 border-forge-steel/30 flex items-center justify-center bg-forge-black/50">
            <ForgeLogoMinimal size={40} color="steel" />
          </div>
          <p className="text-forge-steel text-xs mt-4">Floor Decal</p>
        </div>
        
        {/* Equipment branding */}
        <div className="bg-forge-steel/10 rounded-xl p-6 text-center">
          <div className="w-24 h-16 mx-auto bg-forge-black border border-forge-steel/30 rounded flex items-center justify-center">
            <ForgeLogoMinimal size={28} color="ember" />
          </div>
          <p className="text-forge-steel text-xs mt-4">Equipment</p>
        </div>
        
        {/* Wall banner */}
        <div className="bg-forge-steel/10 rounded-xl p-6 text-center">
          <div className="w-8 h-20 mx-auto bg-forge-ember flex items-center justify-center">
            <ForgeLogoMinimal size={20} color="black" />
          </div>
          <p className="text-forge-steel text-xs mt-4">Banner</p>
        </div>
      </div>
    </div>
  );
};

export default { ForgeAppMockup, ForgeClothingMockup, ForgeGymMockup };
