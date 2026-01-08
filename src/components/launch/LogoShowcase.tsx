import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";
import { ForgeFinalWordmark } from "@/components/final/ForgeFinalWordmark";
import { ForgeFinalAppIcon } from "@/components/final/ForgeFinalAppIcon";

/**
 * FORGE LOGO SHOWCASE — Nike/Adidas Level Presentation
 * Cinematic reveal with premium depth effects
 */

export const LogoShowcase: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-40 px-6 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forge-obsidian to-background" />
      
      {/* Animated grid */}
      <motion.div 
        className="absolute inset-0 grid-pattern"
        style={{ y: parallaxY }}
      />

      {/* Ember ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(18 100% 50% / 0.08) 0%, transparent 60%)"
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with stagger animation */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-forge-ember text-xs tracking-[0.5em] uppercase font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            01 — Brand Identity
          </motion.span>
          
          <motion.h2 
            className="text-6xl md:text-8xl forge-text-hero mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="forge-text-gradient">THE MARK</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-forge-steel max-w-lg mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A symbol forged in fire. Recognized instantly. Remembered forever.
          </motion.p>
        </motion.div>

        {/* Hero logo with layered depth effect */}
        <motion.div
          className="flex justify-center mb-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative group">
            {/* Multi-layer shadow for 3D depth */}
            {[0.15, 0.3, 0.5].map((opacity, i) => (
              <motion.div 
                key={i}
                className="absolute inset-0"
                style={{ 
                  transform: `translate(${(i + 1) * 8}px, ${(i + 1) * 8}px)`,
                  opacity 
                }}
                animate={{ 
                  transform: [
                    `translate(${(i + 1) * 8}px, ${(i + 1) * 8}px)`,
                    `translate(${(i + 1) * 6}px, ${(i + 1) * 6}px)`,
                    `translate(${(i + 1) * 8}px, ${(i + 1) * 8}px)`,
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ForgeFinalLogo size={320} color="white" />
              </motion.div>
            ))}
            
            {/* Main logo */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <ForgeFinalLogo size={320} color="white" />
            </motion.div>

            {/* Hover ember glow */}
            <motion.div 
              className="absolute inset-0 rounded-full blur-3xl bg-forge-ember/0 group-hover:bg-forge-ember/20 transition-all duration-700 -z-10"
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
        </motion.div>

        {/* Logo application grid - premium cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {[
            { bg: "white", color: "black", label: "Light Application", desc: "On white backgrounds" },
            { bg: "black", color: "white", label: "Dark Application", desc: "On dark backgrounds" },
            { bg: "ember", color: "black", label: "Brand Accent", desc: "For impact moments" },
          ].map((variant, i) => (
            <motion.div
              key={variant.label}
              className="group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <div 
                className={`
                  h-72 rounded-sm flex items-center justify-center relative overflow-hidden
                  hover-lift cursor-pointer
                  ${variant.bg === "white" ? "bg-white" : ""}
                  ${variant.bg === "black" ? "bg-black border border-forge-steel/20" : ""}
                  ${variant.bg === "ember" ? "bg-gradient-to-br from-forge-ember to-forge-ember-deep" : ""}
                `}
              >
                {/* Subtle inner shadow */}
                <div className="absolute inset-0 shadow-inner opacity-50" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ForgeFinalLogo 
                    size={100} 
                    color={variant.color as "black" | "white"} 
                  />
                </motion.div>
              </div>
              <div className="mt-5">
                <h4 className="text-white font-heading text-lg">{variant.label}</h4>
                <p className="text-forge-steel text-sm mt-1">{variant.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal lockup - signature presentation */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="forge-glass p-16 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden">
            {/* Animated border */}
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(90deg, transparent, hsl(18 100% 50% / 0.3), transparent)'
              }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <ForgeFinalLogo size={100} color="white" />
            
            <div className="hidden md:block w-px h-20 bg-gradient-to-b from-transparent via-forge-steel/40 to-transparent" />
            
            <ForgeFinalWordmark size={280} color="white" />
          </div>
          <p className="text-center mt-6 text-forge-steel text-sm tracking-widest uppercase">Primary Lockup</p>
        </motion.div>

        {/* App icon showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-center text-2xl font-heading text-forge-steel-light mb-12">Digital Presence</h3>
          
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { variant: "rounded" as const, theme: "dark" as const, label: "iOS App" },
              { variant: "square" as const, theme: "dark" as const, label: "Android" },
              { variant: "rounded" as const, theme: "light" as const, label: "Light Mode" },
            ].map((icon, i) => (
              <motion.div 
                key={icon.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="ember-border p-1 rounded-2xl"
                >
                  <ForgeFinalAppIcon size={120} variant={icon.variant} theme={icon.theme} />
                </motion.div>
                <p className="mt-4 text-forge-steel text-sm group-hover:text-white transition-colors">{icon.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </section>
  );
};

export default LogoShowcase;