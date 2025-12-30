import { FC } from "react";

interface ForgeLogoMinimalProps {
  size?: number;
  className?: string;
  color?: "white" | "black" | "steel" | "ember";
}

/**
 * MINIMAL FORGE "F" LOGO
 * 
 * Single color version for maximum versatility
 * The cut is the signature - everything else is secondary
 */
export const ForgeLogoMinimal: FC<ForgeLogoMinimalProps> = ({ 
  size = 100, 
  className = "",
  color = "white"
}) => {
  const colorMap = {
    white: "hsl(0 0% 95%)",
    black: "hsl(0 0% 4%)",
    steel: "hsl(0 0% 55%)",
    ember: "hsl(20 85% 45%)",
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
        Pure shape, no gradients, just the cut
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
