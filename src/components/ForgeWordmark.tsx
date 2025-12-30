import { FC } from "react";

interface ForgeWordmarkProps {
  size?: number;
  className?: string;
  color?: "white" | "black" | "steel";
}

/**
 * FORGE WORDMARK
 * 
 * Industrial, bold, all-caps custom letterforms
 * Sharp edges, geometric construction
 * Premium and timeless
 */
export const ForgeWordmark: FC<ForgeWordmarkProps> = ({ 
  size = 200, 
  className = "",
  color = "white"
}) => {
  const colorMap = {
    white: "hsl(0 0% 95%)",
    black: "hsl(0 0% 4%)",
    steel: "hsl(0 0% 55%)",
  };

  const fillColor = colorMap[color];

  return (
    <svg
      viewBox="0 0 500 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size * 0.2 }}
    >
      {/* F - with signature cut */}
      <path
        d="
          M 0 0
          L 70 0
          L 70 16
          L 20 16
          L 20 42
          L 55 42
          L 55 58
          L 20 58
          L 20 100
          L 0 100
          L 0 0
          Z
        "
        fill={fillColor}
      />
      {/* F signature cut */}
      <path
        d="
          M 55 0
          L 70 0
          L 70 16
          L 55 0
          Z
        "
        fill="hsl(0 0% 8%)"
      />

      {/* O - geometric, squared */}
      <path
        d="
          M 90 0
          L 160 0
          L 160 100
          L 90 100
          L 90 0
          Z
          M 110 18
          L 110 82
          L 140 82
          L 140 18
          L 110 18
          Z
        "
        fill={fillColor}
        fillRule="evenodd"
      />

      {/* R - bold with angular leg */}
      <path
        d="
          M 180 0
          L 250 0
          L 260 12
          L 260 40
          L 250 52
          L 240 52
          L 265 100
          L 242 100
          L 218 54
          L 200 54
          L 200 100
          L 180 100
          L 180 0
          Z
          M 200 16
          L 200 40
          L 238 40
          L 238 16
          L 200 16
          Z
        "
        fill={fillColor}
        fillRule="evenodd"
      />

      {/* G - squared with bar */}
      <path
        d="
          M 285 0
          L 360 0
          L 360 18
          L 305 18
          L 305 82
          L 340 82
          L 340 58
          L 320 58
          L 320 42
          L 360 42
          L 360 100
          L 285 100
          L 285 0
          Z
        "
        fill={fillColor}
      />

      {/* E - industrial with cuts */}
      <path
        d="
          M 380 0
          L 455 0
          L 455 18
          L 400 18
          L 400 42
          L 440 42
          L 440 58
          L 400 58
          L 400 82
          L 455 82
          L 455 100
          L 380 100
          L 380 0
          Z
        "
        fill={fillColor}
      />
    </svg>
  );
};

export default ForgeWordmark;
