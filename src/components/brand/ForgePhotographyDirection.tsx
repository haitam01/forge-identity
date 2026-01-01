import { FC } from "react";

/**
 * FORGE PHOTOGRAPHY DIRECTION
 * 
 * Visual mood: Raw, high contrast, directional lighting
 * Subjects: Real athletes, imperfect, powerful
 */
export const ForgePhotographyDirection: FC = () => {
  return (
    <div className="space-y-16">
      {/* Mood Board Header */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-heading text-3xl text-forge-white mb-4">RAW. POWERFUL. EARNED.</p>
        <p className="text-forge-steel-light">
          FORGE photography captures the reality of training — not the glossy aftermath. 
          Sweat, strain, focus. The moments that matter happen in the dark.
        </p>
      </div>

      {/* Photo Grid Mockup */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Main hero shot */}
        <div className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto bg-gradient-to-br from-forge-steel/20 to-forge-black border border-forge-steel/20 relative overflow-hidden">
          {/* Simulated photo placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-32 mx-auto mb-4 bg-gradient-to-b from-forge-steel/30 to-forge-steel/10 rounded relative overflow-hidden">
                {/* Athlete silhouette */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-forge-black rounded-t-full" />
                {/* Directional light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forge-ember/10 to-transparent" />
              </div>
              <p className="text-xs text-forge-steel uppercase tracking-widest">Hero Shot</p>
              <p className="text-[10px] text-forge-steel/60 mt-1">Directional side lighting</p>
            </div>
          </div>
          {/* Light beam overlay */}
          <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-forge-ember/5 to-transparent transform -skew-x-12" />
        </div>

        {/* Detail shot 1 */}
        <div className="aspect-square bg-forge-black border border-forge-steel/20 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* Grip detail mockup */}
            <div className="w-16 h-4 bg-forge-steel/30 rounded-sm mb-2" />
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-3 h-8 bg-forge-steel/20 rounded" />
              ))}
            </div>
            <p className="text-[10px] text-forge-steel mt-4 uppercase tracking-widest">Detail: Grip</p>
          </div>
          {/* Sweat texture overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 30% 40%, hsl(0 0% 50%) 1px, transparent 1px)',
            backgroundSize: '8px 8px'
          }} />
        </div>

        {/* Detail shot 2 */}
        <div className="aspect-square bg-forge-black border border-forge-steel/20 relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Face/focus mockup */}
            <div className="w-12 h-16 bg-forge-steel/20 rounded-full mb-2" />
            <div className="w-8 h-1 bg-forge-ember/50 mt-1" />
            <p className="text-[10px] text-forge-steel mt-4 uppercase tracking-widest">Focus</p>
          </div>
          {/* High contrast shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-forge-black to-transparent" />
        </div>
      </div>

      {/* Photography Rules */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-forge-ember mb-6">REQUIRED</p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-1 bg-forge-ember flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-white">HIGH CONTRAST</p>
                <p className="text-sm text-forge-steel">Deep blacks, bright highlights. No flat, evenly-lit images.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-forge-ember flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-white">DIRECTIONAL LIGHTING</p>
                <p className="text-sm text-forge-steel">Hard side light or top light. Visible shadows that sculpt the body.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-forge-ember flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-white">VISIBLE SWEAT</p>
                <p className="text-sm text-forge-steel">Real exertion. Glistening skin. Authentic effort.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-forge-ember flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-white">NO SMILES, NO POSING</p>
                <p className="text-sm text-forge-steel">Captured in the moment of effort. Grimace is acceptable.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-forge-ember flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-white">REAL ATHLETES</p>
                <p className="text-sm text-forge-steel">Powerful, not perfect. Scars and calluses are assets.</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-6">FORBIDDEN</p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-1 bg-red-500/50 flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-steel-light">STUDIO GLAMOUR</p>
                <p className="text-sm text-forge-steel">No beauty lighting, no softboxes, no perfect skin.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-red-500/50 flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-steel-light">POSED FLEXING</p>
                <p className="text-sm text-forge-steel">No bodybuilding poses. Capture mid-action only.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-red-500/50 flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-steel-light">INFLUENCER AESTHETICS</p>
                <p className="text-sm text-forge-steel">No gym selfie angles. No lifestyle backgrounds.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-red-500/50 flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-steel-light">SATURATED COLORS</p>
                <p className="text-sm text-forge-steel">Desaturated palette. Steel and shadow, not vibrant.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="w-1 bg-red-500/50 flex-shrink-0" />
              <div>
                <p className="font-heading text-forge-steel-light">HAPPY TRAINING</p>
                <p className="text-sm text-forge-steel">This isn't fun. This is work. Show the struggle.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Color Grading */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase text-forge-steel mb-8">Color Grading</p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-forge-steel/20 flex items-center justify-center">
            <p className="text-[10px] text-forge-steel">SHADOWS: Pure black</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] border border-forge-steel/20 flex items-center justify-center">
            <p className="text-[10px] text-forge-white">MIDTONES: Steel</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-[#8a8a8a] to-[#5a5a5a] border border-forge-steel/20 flex items-center justify-center">
            <p className="text-[10px] text-forge-white">HIGHLIGHTS: Cool</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-forge-ember/30 to-forge-ember/10 border border-forge-steel/20 flex items-center justify-center">
            <p className="text-[10px] text-forge-ember">ACCENT: Ember only</p>
          </div>
        </div>
        <p className="text-center text-xs text-forge-steel mt-4">
          Orange appears naturally only where heat sources or intense effort is present
        </p>
      </div>

      {/* Tagline */}
      <div className="text-center py-12 border-t border-b border-forge-steel/20">
        <p className="font-heading text-2xl md:text-4xl text-forge-white">
          EFFORT &gt; <span className="text-forge-steel-light">AESTHETICS</span>
        </p>
        <p className="text-forge-steel text-sm mt-4 max-w-md mx-auto">
          The best FORGE photo makes you feel uncomfortable. 
          That's the point.
        </p>
      </div>
    </div>
  );
};

export default ForgePhotographyDirection;
