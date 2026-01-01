import { FC } from "react";
import { ForgeFinalLogo } from "./ForgeFinalLogo";

/**
 * FORGE APP ICON — FINAL
 * Square and rounded versions
 */

interface ForgeFinalAppIconProps {
  size?: number;
  variant?: "square" | "rounded";
  theme?: "dark" | "light";
  className?: string;
}

export const ForgeFinalAppIcon: FC<ForgeFinalAppIconProps> = ({ 
  size = 64, 
  variant = "rounded",
  theme = "dark",
  className = "" 
}) => {
  const bgColor = theme === "dark" ? "#000000" : "#FFFFFF";
  const logoColor = theme === "dark" ? "white" : "black";
  const borderRadius = variant === "rounded" ? size * 0.22 : 0;

  return (
    <div 
      className={className}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: bgColor,
        borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: theme === "light" ? '1px solid #E0E0E0' : 'none'
      }}
    >
      <ForgeFinalLogo size={size * 0.5} color={logoColor} />
    </div>
  );
};

export default ForgeFinalAppIcon;
