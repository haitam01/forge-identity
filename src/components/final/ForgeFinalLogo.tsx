import { FC } from "react";

/**
 * FORGE FINAL LOGO — LOCKED
 * 
 * The definitive F symbol.
 * Single diagonal cut. No gradients. Production-ready.
 * Works at all sizes, embroidery, print.
 */

interface ForgeFinalLogoProps {
  size?: number;
  color?: "black" | "white";
  className?: string;
}

export const ForgeFinalLogo: FC<ForgeFinalLogoProps> = ({ 
  size = 100, 
  color = "white",
  className = "" 
}) => {
  const fill = color === "white" ? "#FFFFFF" : "#000000";

  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size * 1.25 }}
    >
      {/*
        THE FORGE F — FINAL
        
        - Bold vertical spine
        - Strong top bar with single diagonal cut
        - Middle bar
        - No curves, no gradients
        - Production-ready for embroidery & print
      */}
      <path
        d="M0 0 L50 0 L80 0 L50 30 L50 18 L22 18 L22 42 L45 42 L45 58 L22 58 L22 100 L0 100 L0 0 Z"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ForgeFinalLogo;
