import { FC } from "react";
import { ForgeAppIcon } from "./ForgeAppIcon";

/**
 * FORGE APP BRANDING
 * 
 * Complete app logo and color system showcase
 */
export const ForgeAppBranding: FC = () => {
  const appColors = [
    {
      name: "Background",
      token: "--background",
      hex: "#0A0A0A",
      usage: "Main app background"
    },
    {
      name: "Surface",
      token: "--card",
      hex: "#121212",
      usage: "Cards, modals, elevated surfaces"
    },
    {
      name: "Primary Text",
      token: "--foreground",
      hex: "#F2F2F2",
      usage: "Headlines, primary content"
    },
    {
      name: "Secondary Text",
      token: "--muted-foreground",
      hex: "#8C8C8C",
      usage: "Subtitles, captions, metadata"
    },
    {
      name: "Accent / CTA",
      token: "--accent",
      hex: "#FF5A00",
      usage: "Buttons, progress, highlights"
    },
    {
      name: "Border",
      token: "--border",
      hex: "#2E2E2E",
      usage: "Dividers, card borders"
    },
  ];

  return (
    <div className="space-y-16">
      {/* APP LOGO SECTION */}
      <section>
        <h3 className="text-2xl mb-8 text-center">App Logo</h3>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Primary App Icon */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-b from-[hsl(var(--secondary))] to-[hsl(var(--background))] border border-[hsl(var(--border))]">
              <ForgeAppIcon size={120} variant="dark" />
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Primary App Icon</p>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Dark variant • 1024×1024</p>
          </div>

          {/* Light Variant */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-[hsl(var(--foreground))] border border-[hsl(var(--border))]">
              <ForgeAppIcon size={120} variant="light" />
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Light Mode</p>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">For light backgrounds</p>
          </div>

          {/* Ember Variant */}
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-b from-[hsl(var(--secondary))] to-[hsl(var(--background))] border border-[hsl(var(--border))]">
              <ForgeAppIcon size={120} variant="ember" />
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">Ember Accent</p>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Special editions</p>
          </div>
        </div>

        {/* Size Variations */}
        <div className="mt-12 flex items-end justify-center gap-6">
          <div className="text-center">
            <ForgeAppIcon size={16} variant="dark" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">16px</p>
          </div>
          <div className="text-center">
            <ForgeAppIcon size={32} variant="dark" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">32px</p>
          </div>
          <div className="text-center">
            <ForgeAppIcon size={48} variant="dark" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">48px</p>
          </div>
          <div className="text-center">
            <ForgeAppIcon size={64} variant="dark" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">64px</p>
          </div>
          <div className="text-center">
            <ForgeAppIcon size={96} variant="dark" />
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">96px</p>
          </div>
        </div>
      </section>

      {/* APP COLOR PALETTE */}
      <section>
        <h3 className="text-2xl mb-8 text-center">App Color System</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {appColors.map((color) => (
            <div 
              key={color.name}
              className="p-4 border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
            >
              <div 
                className="w-full h-16 mb-3 border border-[hsl(var(--border))]"
                style={{ backgroundColor: color.hex }}
              />
              <p className="font-semibold text-[hsl(var(--foreground))]">{color.name}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono mt-1">{color.hex}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">{color.usage}</p>
            </div>
          ))}
        </div>

        {/* Ember Accent Usage */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="p-6 border border-[hsl(var(--accent))] bg-[hsl(var(--card))]">
            <h4 className="text-lg text-[hsl(var(--accent))] mb-3">Ember Accent Guidelines</h4>
            <ul className="text-sm text-[hsl(var(--muted-foreground))] space-y-2">
              <li>• Use for primary CTAs and important actions</li>
              <li>• Progress indicators and achievement highlights</li>
              <li>• Active states and selected items</li>
              <li>• Limit to ~10% of the interface for maximum impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APP UI PREVIEW */}
      <section>
        <h3 className="text-2xl mb-8 text-center">App UI Preview</h3>
        
        <div className="max-w-sm mx-auto">
          {/* Phone Frame */}
          <div className="bg-[hsl(var(--background))] border-4 border-[hsl(var(--border))] rounded-[2rem] p-2 shadow-2xl">
            <div className="bg-[hsl(var(--background))] rounded-[1.5rem] overflow-hidden">
              {/* Status Bar */}
              <div className="h-6 bg-[hsl(var(--background))] flex items-center justify-between px-6">
                <span className="text-xs text-[hsl(var(--foreground))]">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 bg-[hsl(var(--foreground))]" />
                </div>
              </div>
              
              {/* App Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-[hsl(var(--border))]">
                <ForgeAppIcon size={32} variant="dark" />
                <span className="text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>FORGE</span>
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--secondary))]" />
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Stats Card */}
                <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4">
                  <p className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider">Today's Progress</p>
                  <p className="text-3xl font-bold mt-1" style={{ fontFamily: 'var(--font-display)' }}>78%</p>
                  <div className="mt-3 h-2 bg-[hsl(var(--secondary))]">
                    <div className="h-full w-3/4 bg-[hsl(var(--accent))]" />
                  </div>
                </div>
                
                {/* Workout Cards */}
                <div className="space-y-2">
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[hsl(var(--foreground))]">Push Day</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">6 exercises • 45 min</p>
                    </div>
                    <div className="w-10 h-10 bg-[hsl(var(--accent))] flex items-center justify-center text-[hsl(var(--accent-foreground))]">
                      →
                    </div>
                  </div>
                  <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[hsl(var(--foreground))]">Pull Day</p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">5 exercises • 40 min</p>
                    </div>
                    <div className="w-10 h-10 bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] flex items-center justify-center">
                      →
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Nav */}
              <div className="px-6 py-4 border-t border-[hsl(var(--border))] flex justify-around">
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto bg-[hsl(var(--accent))]" />
                  <p className="text-xs text-[hsl(var(--accent))] mt-1">Home</p>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto bg-[hsl(var(--muted-foreground))]" />
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Workouts</p>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto bg-[hsl(var(--muted-foreground))]" />
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Progress</p>
                </div>
                <div className="text-center">
                  <div className="w-6 h-6 mx-auto bg-[hsl(var(--muted-foreground))]" />
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgeAppBranding;
