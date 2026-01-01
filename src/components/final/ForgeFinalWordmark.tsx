import { FC } from "react";

/**
 * FORGE FINAL WORDMARK — LOCKED
 * 
 * Uppercase. Condensed. Industrial.
 * Matches the F perfectly.
 */

interface ForgeFinalWordmarkProps {
  size?: number;
  color?: "black" | "white";
  className?: string;
}

export const ForgeFinalWordmark: FC<ForgeFinalWordmarkProps> = ({ 
  size = 200, 
  color = "white",
  className = "" 
}) => {
  const fill = color === "white" ? "#FFFFFF" : "#000000";

  return (
    <svg
      viewBox="0 0 280 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size * (50/280) }}
    >
      {/* F */}
      <path d="M0 0 L28 0 L40 0 L28 12 L28 8 L10 8 L10 21 L24 21 L24 29 L10 29 L10 50 L0 50 Z" fill={fill} />
      
      {/* O */}
      <path d="M50 0 L82 0 L82 50 L50 50 Z M60 8 L60 42 L72 42 L72 8 Z" fill={fill} fillRule="evenodd" />
      
      {/* R */}
      <path d="M92 0 L124 0 L124 20 L114 20 L114 8 L102 8 L102 21 L114 21 L124 21 L124 28 L114 28 L124 50 L112 50 L102 28 L102 50 L92 50 Z" fill={fill} />
      
      {/* G */}
      <path d="M134 0 L166 0 L166 8 L144 8 L144 42 L156 42 L156 29 L148 29 L148 21 L166 21 L166 50 L134 50 Z" fill={fill} />
      
      {/* E */}
      <path d="M176 0 L208 0 L208 8 L186 8 L186 21 L202 21 L202 29 L186 29 L186 42 L208 42 L208 50 L176 50 Z" fill={fill} />
    </svg>
  );
};

export default ForgeFinalWordmark;
