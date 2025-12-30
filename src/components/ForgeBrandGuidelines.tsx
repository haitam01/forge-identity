import { FC } from "react";

interface ForgeBrandGuidelinesProps {
  className?: string;
}

/**
 * FORGE BRAND GUIDELINES
 * 
 * Spacing rules, minimum sizes, and usage guidelines
 */
export const ForgeBrandGuidelines: FC<ForgeBrandGuidelinesProps> = ({ className = "" }) => {
  return (
    <div className={`space-y-24 ${className}`}>
      {/* Clear Space Rules */}
      <div>
        <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8">Clear Space</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {/* F Symbol Clear Space */}
          <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8">
            <div className="relative inline-block">
              {/* Clear space visualization */}
              <div className="absolute -inset-8 border border-dashed border-forge-ember/50" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-forge-ember text-xs">X</div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-forge-ember text-xs">X</div>
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-forge-ember text-xs">X</div>
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-forge-ember text-xs">X</div>
              
              <svg viewBox="0 0 100 120" className="w-20 h-24">
                <path
                  d="M 10 0 L 60 0 L 75 18 L 32 18 L 32 48 L 62 48 L 62 66 L 32 66 L 32 120 L 10 120 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <p className="mt-12 text-forge-steel-light text-sm">
              <strong>F Symbol:</strong> Minimum clear space = height of the middle bar (X)
            </p>
          </div>

          {/* Wordmark Clear Space */}
          <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8">
            <div className="relative inline-block">
              <div className="absolute -inset-6 border border-dashed border-forge-ember/50" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-forge-ember text-xs">Y</div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-forge-ember text-xs">Y</div>
              
              <svg viewBox="0 0 500 100" className="w-48 h-10">
                <path d="M 0 0 L 70 0 L 70 16 L 20 16 L 20 42 L 55 42 L 55 58 L 20 58 L 20 100 L 0 100 Z" fill="#FFFFFF" />
                <path d="M 55 0 L 70 0 L 70 16 L 55 0 Z" fill="#000000" />
                <path d="M 90 0 L 160 0 L 160 100 L 90 100 Z M 110 18 L 110 82 L 140 82 L 140 18 Z" fill="#FFFFFF" fillRule="evenodd" />
                <path d="M 180 0 L 250 0 L 260 12 L 260 40 L 250 52 L 240 52 L 265 100 L 242 100 L 218 54 L 200 54 L 200 100 L 180 100 Z M 200 16 L 200 40 L 238 40 L 238 16 Z" fill="#FFFFFF" fillRule="evenodd" />
                <path d="M 285 0 L 360 0 L 360 18 L 305 18 L 305 82 L 340 82 L 340 58 L 320 58 L 320 42 L 360 42 L 360 100 L 285 100 Z" fill="#FFFFFF" />
                <path d="M 380 0 L 455 0 L 455 18 L 400 18 L 400 42 L 440 42 L 440 58 L 400 58 L 400 82 L 455 82 L 455 100 L 380 100 Z" fill="#FFFFFF" />
              </svg>
            </div>
            <p className="mt-12 text-forge-steel-light text-sm">
              <strong>Wordmark:</strong> Minimum clear space = cap height (Y)
            </p>
          </div>
        </div>
      </div>

      {/* Minimum Sizes */}
      <div>
        <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8">Minimum Sizes</h3>
        <div className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-8">
          <div className="flex flex-wrap items-end gap-12">
            {/* F Symbol sizes */}
            <div className="text-center">
              <svg viewBox="0 0 100 120" className="w-16 h-20 mx-auto">
                <path d="M 10 0 L 60 0 L 75 18 L 32 18 L 32 48 L 62 48 L 62 66 L 32 66 L 32 120 L 10 120 Z" fill="#FFFFFF" />
              </svg>
              <p className="mt-4 text-forge-ember text-sm font-mono">64px</p>
              <p className="text-forge-steel text-xs">Print minimum</p>
            </div>
            <div className="text-center">
              <svg viewBox="0 0 100 120" className="w-8 h-10 mx-auto">
                <path d="M 10 0 L 60 0 L 75 18 L 32 18 L 32 48 L 62 48 L 62 66 L 32 66 L 32 120 L 10 120 Z" fill="#FFFFFF" />
              </svg>
              <p className="mt-4 text-forge-ember text-sm font-mono">32px</p>
              <p className="text-forge-steel text-xs">Digital minimum</p>
            </div>
            <div className="text-center">
              <svg viewBox="0 0 100 120" className="w-4 h-5 mx-auto">
                <path d="M 10 0 L 60 0 L 75 18 L 32 18 L 32 48 L 62 48 L 62 66 L 32 66 L 32 120 L 10 120 Z" fill="#FFFFFF" />
              </svg>
              <p className="mt-4 text-forge-ember text-sm font-mono">16px</p>
              <p className="text-forge-steel text-xs">Favicon</p>
            </div>
            
            <div className="w-px h-20 bg-forge-steel/30 mx-4" />
            
            {/* Wordmark sizes */}
            <div className="text-center">
              <svg viewBox="0 0 500 100" className="w-40 h-8 mx-auto">
                <path d="M 0 0 L 70 0 L 70 16 L 20 16 L 20 42 L 55 42 L 55 58 L 20 58 L 20 100 L 0 100 Z" fill="#FFFFFF" />
                <path d="M 90 0 L 160 0 L 160 100 L 90 100 Z M 110 18 L 110 82 L 140 82 L 140 18 Z" fill="#FFFFFF" fillRule="evenodd" />
                <path d="M 180 0 L 250 0 L 260 12 L 260 40 L 250 52 L 240 52 L 265 100 L 242 100 L 218 54 L 200 54 L 200 100 L 180 100 Z M 200 16 L 200 40 L 238 40 L 238 16 Z" fill="#FFFFFF" fillRule="evenodd" />
                <path d="M 285 0 L 360 0 L 360 18 L 305 18 L 305 82 L 340 82 L 340 58 L 320 58 L 320 42 L 360 42 L 360 100 L 285 100 Z" fill="#FFFFFF" />
                <path d="M 380 0 L 455 0 L 455 18 L 400 18 L 400 42 L 440 42 L 440 58 L 400 58 L 400 82 L 455 82 L 455 100 L 380 100 Z" fill="#FFFFFF" />
              </svg>
              <p className="mt-4 text-forge-ember text-sm font-mono">160px wide</p>
              <p className="text-forge-steel text-xs">Wordmark minimum</p>
            </div>
          </div>
        </div>
      </div>

      {/* Do's and Don'ts */}
      <div>
        <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8">Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Do's */}
          <div>
            <p className="text-forge-ember text-sm tracking-wider mb-4">✓ DO</p>
            <div className="space-y-4">
              {[
                "Use on solid black or white backgrounds",
                "Maintain minimum clear space",
                "Use approved color variations only",
                "Keep proportions locked when scaling",
                "Use ember accent sparingly"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-forge-steel-light text-sm">
                  <span className="w-1.5 h-1.5 bg-forge-ember rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          {/* Don'ts */}
          <div>
            <p className="text-forge-steel text-sm tracking-wider mb-4">✗ DON'T</p>
            <div className="space-y-4">
              {[
                "Stretch or distort the logo",
                "Add effects like shadows or gradients",
                "Place on busy or patterned backgrounds",
                "Change the signature diagonal cut",
                "Use unapproved colors"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-forge-steel text-sm line-through decoration-forge-steel/50">
                  <span className="w-1.5 h-1.5 bg-forge-steel rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* File Formats */}
      <div>
        <h3 className="text-sm tracking-[0.3em] uppercase text-forge-steel mb-8">Deliverable Formats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { format: ".SVG", desc: "Web, scalable" },
            { format: ".AI", desc: "Vector editing" },
            { format: ".EPS", desc: "Print production" },
            { format: ".PNG", desc: "Digital, transparent" }
          ].map((file) => (
            <div key={file.format} className="bg-forge-steel/5 border border-forge-steel/20 rounded-lg p-6 text-center">
              <p className="text-forge-white font-mono text-lg">{file.format}</p>
              <p className="text-forge-steel text-xs mt-2">{file.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForgeBrandGuidelines;
