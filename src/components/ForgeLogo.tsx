import { FC } from "react";

interface ForgeLogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

/**
 * THE FORGE "F" LOGO
 * 
 * Design Principles:
 * - Built from straight lines only
 * - One signature diagonal cut (hammer strike)
 * - Heavy, forged proportions
 * - Vertical spine = solid, unbroken
 * - Top bar = strong, full
 * - Middle bar = shorter, aggressive
 */
export const ForgeLogo: FC<ForgeLogoProps> = ({ 
  size = 200, 
  className = "",
  showGlow = false 
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Ember glow effect */}
      {showGlow && (
        <div 
          className="absolute inset-0 bg-forge-ember opacity-30 blur-3xl animate-ember-pulse"
          style={{ transform: "scale(1.5)" }}
        />
      )}
      
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Gradient definitions */}
        <defs>
          {/* Steel gradient - vertical */}
          <linearGradient id="steelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#AAAAAA" />
            <stop offset="100%" stopColor="#5A5A5A" />
          </linearGradient>
          
          {/* Cut shadow gradient */}
          <linearGradient id="cutShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A1A1A" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          {/* Ember accent gradient */}
          <linearGradient id="emberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A2A" />
            <stop offset="100%" stopColor="#FF5A00" />
          </linearGradient>
        </defs>

        {/* 
          THE FORGED F
          
          Structure:
          - Vertical spine: x=10, width=22
          - Top bar: full width, y=0
          - Middle bar: shorter, aggressive
          - Signature cut: diagonal slice in top-right corner
        */}
        
        {/* Main F shape with signature diagonal cut */}
        <path
          d="
            M 10 0
            L 75 0
            L 75 18
            L 32 18
            L 32 48
            L 62 48
            L 62 66
            L 32 66
            L 32 120
            L 10 120
            L 10 0
            Z
          "
          fill="url(#steelGradient)"
        />

        {/* THE SIGNATURE CUT - Hammer strike in top right */}
        {/* This diagonal cut creates the unique identity */}
        <path
          d="
            M 60 0
            L 75 0
            L 75 18
            L 60 0
            Z
          "
          fill="url(#cutShadow)"
        />

        {/* Inner cut detail - creates depth */}
        <path
          d="
            M 62 0
            L 73 0
            L 73 14
            Z
          "
          fill="#000000"
        />

        {/* Subtle ember accent line at the cut edge */}
        <line
          x1="60"
          y1="0"
          x2="75"
          y2="18"
          stroke="url(#emberGradient)"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Bottom edge detail - subtle forge mark */}
        <rect
          x="10"
          y="116"
          width="22"
          height="4"
          fill="url(#cutShadow)"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default ForgeLogo;
