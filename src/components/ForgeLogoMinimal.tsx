import { FC } from "react";

interface ForgeLogoMinimalProps {
  size?: number;
  className?: string;
  color?: "white" | "black" | "steel" | "ember";
}

/**
 * MINIMAL FORGE "F" LOGO
 * 
 * Standalone F symbol for apps, clothing tags, gym branding
 * Single color version for maximum versatility
 * The diagonal cut is the signature
 * 
 * Brand Colors:
 * - Black: #000000
 * - White: #FFFFFF  
 * - Steel: #5A5A5A
 * - Ember: #FF5A00
 */
export const ForgeLogoMinimal: FC<ForgeLogoMinimalProps> = ({ 
  size = 100, 
  className = "",
  color = "white"
}) => {
  const colorMap = {
    white: "#FFFFFF",
    black: "#000000",
    steel: "#5A5A5A",
    ember: "#FF5A00",
  };

  const fillColor = colorMap[color];

  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size * 1.2 }}
    >
      {/* 
        THE FORGED F - Minimal Version
        
        Structure:
        - Vertical spine: solid, unbroken
        - Top bar: strong, full width
        - Middle bar: shorter, aggressive
        - Signature cut: diagonal slice in top-right
        
        Proportions: slightly wide for strength
      */}
      <path
        d="
          M 10 0
          L 60 0
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
        fill={fillColor}
      />
    </svg>
  );
};

export default ForgeLogoMinimal;
