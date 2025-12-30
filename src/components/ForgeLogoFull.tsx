import { FC } from "react";

interface ForgeLogoFullProps {
  size?: number;
  className?: string;
  color?: "white" | "black" | "steel";
  layout?: "horizontal" | "stacked";
}

/**
 * FORGE FULL LOGO LOCKUP
 * 
 * Combines the F icon with the FORGE wordmark
 * Available in horizontal and stacked layouts
 */
export const ForgeLogoFull: FC<ForgeLogoFullProps> = ({ 
  size = 300, 
  className = "",
  color = "white",
  layout = "horizontal"
}) => {
  const colorMap = {
    white: "hsl(0 0% 95%)",
    black: "hsl(0 0% 4%)",
    steel: "hsl(0 0% 55%)",
  };

  const fillColor = colorMap[color];

  if (layout === "stacked") {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ width: size, height: size }}
      >
        {/* F Icon - centered */}
        <g transform="translate(60, 10)">
          <path
            d="
              M 0 0
              L 55 0
              L 70 15
              L 20 15
              L 20 40
              L 50 40
              L 50 55
              L 20 55
              L 20 100
              L 0 100
              L 0 0
              Z
            "
            fill={fillColor}
          />
          {/* Signature cut */}
          <path
            d="
              M 45 0
              L 55 0
              L 70 15
              L 45 0
              Z
            "
            fill="hsl(0 0% 8%)"
          />
        </g>

        {/* FORGE wordmark - below */}
        <g transform="translate(10, 130) scale(0.36)">
          {/* F */}
          <path d="M 0 0 L 70 0 L 70 16 L 20 16 L 20 42 L 55 42 L 55 58 L 20 58 L 20 100 L 0 100 Z" fill={fillColor} />
          <path d="M 55 0 L 70 0 L 70 16 L 55 0 Z" fill="hsl(0 0% 8%)" />
          {/* O */}
          <path d="M 90 0 L 160 0 L 160 100 L 90 100 Z M 110 18 L 110 82 L 140 82 L 140 18 Z" fill={fillColor} fillRule="evenodd" />
          {/* R */}
          <path d="M 180 0 L 250 0 L 260 12 L 260 40 L 250 52 L 240 52 L 265 100 L 242 100 L 218 54 L 200 54 L 200 100 L 180 100 Z M 200 16 L 200 40 L 238 40 L 238 16 Z" fill={fillColor} fillRule="evenodd" />
          {/* G */}
          <path d="M 285 0 L 360 0 L 360 18 L 305 18 L 305 82 L 340 82 L 340 58 L 320 58 L 320 42 L 360 42 L 360 100 L 285 100 Z" fill={fillColor} />
          {/* E */}
          <path d="M 380 0 L 455 0 L 455 18 L 400 18 L 400 42 L 440 42 L 440 58 L 400 58 L 400 82 L 455 82 L 455 100 L 380 100 Z" fill={fillColor} />
        </g>
      </svg>
    );
  }

  // Horizontal layout
  return (
    <svg
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size * 0.2 }}
    >
      {/* F Icon */}
      <g transform="translate(0, 0) scale(0.65)">
        <path
          d="
            M 0 0
            L 55 0
            L 70 15
            L 20 15
            L 20 45
            L 50 45
            L 50 60
            L 20 60
            L 20 120
            L 0 120
            L 0 0
            Z
          "
          fill={fillColor}
        />
        <path
          d="
            M 45 0
            L 55 0
            L 70 15
            L 45 0
            Z
          "
          fill="hsl(0 0% 8%)"
        />
      </g>

      {/* Divider line */}
      <rect x="58" y="8" width="2" height="64" fill={fillColor} opacity="0.3" />

      {/* FORGE wordmark */}
      <g transform="translate(75, 5) scale(0.7)">
        {/* O */}
        <path d="M 0 0 L 60 0 L 60 100 L 0 100 Z M 16 16 L 16 84 L 44 84 L 44 16 Z" fill={fillColor} fillRule="evenodd" />
        {/* R */}
        <path d="M 80 0 L 140 0 L 150 10 L 150 42 L 140 52 L 130 52 L 155 100 L 132 100 L 108 54 L 100 54 L 100 100 L 80 100 Z M 100 16 L 100 40 L 128 40 L 128 16 Z" fill={fillColor} fillRule="evenodd" />
        {/* G */}
        <path d="M 175 0 L 245 0 L 245 18 L 195 18 L 195 82 L 225 82 L 225 58 L 210 58 L 210 42 L 245 42 L 245 100 L 175 100 Z" fill={fillColor} />
        {/* E */}
        <path d="M 265 0 L 330 0 L 330 18 L 285 18 L 285 42 L 320 42 L 320 58 L 285 58 L 285 82 L 330 82 L 330 100 L 265 100 Z" fill={fillColor} />
      </g>
    </svg>
  );
};

export default ForgeLogoFull;
