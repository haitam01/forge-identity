import { FC } from "react";
import { motion } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";

/**
 * FORGE FOOTER — Minimal, industrial
 */

export const Footer: FC = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-forge-steel/10">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(0 0% 50%) 2px,
            hsl(0 0% 50%) 3px
          )`
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ForgeFinalLogo size={40} color="white" className="opacity-60 hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Links */}
          <div className="flex gap-12 text-forge-steel text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">Brand Guidelines</span>
            <span className="hover:text-white transition-colors cursor-pointer">Tech Pack</span>
            <span className="hover:text-white transition-colors cursor-pointer">Assets</span>
          </div>

          {/* Year */}
          <p className="text-forge-steel/40 text-xs tracking-widest">
            © 2025 FORGE
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-forge-steel/30 text-xs tracking-[0.4em] uppercase">
            Strength Earned. Never Given.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
