import { FC } from "react";

interface ForgeAppIconProps {
  size?: number;
  className?: string;
  variant?: "dark" | "light" | "ember";
}

/**
 * FORGE APP ICON
 * 
 * Optimized for small sizes (app icon, favicon)
 * Maximum clarity and recognition
 */
export const ForgeAppIcon: FC<ForgeAppIconProps> = ({ 
  size = 64, 
  className = "",
  variant = "dark"
}) => {
  const variants = {
    dark: {
      bg: "hsl(0 0% 4%)",
      fill: "hsl(0 0% 95%)",
      cut: "hsl(0 0% 4%)",
    },
    light: {
      bg: "hsl(0 0% 95%)",
      fill: "hsl(0 0% 4%)",
      cut: "hsl(0 0% 95%)",
    },
    ember: {
      bg: "hsl(20 85% 45%)",
      fill: "hsl(0 0% 95%)",
      cut: "hsl(20 85% 35%)",
    },
  };

  const colors = variants[variant];

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: size, height: size }}
    >
      {/* Background */}
      <rect width="100" height="100" rx="20" fill={colors.bg} />
      
      {/* F Icon - centered and optimized for small sizes */}
      <g transform="translate(20, 15)">
        {/* Main F body */}
        <path
          d="
            M 0 0
            L 35 0
            L 35 12
            L 16 12
            L 16 32
            L 35 32
            L 35 44
            L 16 44
            L 16 70
            L 0 70
            Z
          "
          fill={colors.fill}
        />
        {/* Signature triangular cut */}
        <path
          d="
            M 35 0
            L 60 0
            L 35 25
            Z
          "
          fill={colors.fill}
        />
      </g>
    </svg>
  );
};

export default ForgeAppIcon;
