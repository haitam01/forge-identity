import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";

/**
 * FORGE FINAL STATEMENT — Closing manifesto
 * Cinematic, powerful, memorable
 */

export const FinalStatement: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(0 0% 8%) 0%, hsl(0 0% 2%) 70%)'
          }}
        />
        
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />

        {/* Ember glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(21 100% 50% / 0.08) 0%, transparent 60%)",
            scale: logoScale,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Logo */}
        <motion.div
          style={{ scale: logoScale, opacity: logoOpacity }}
          className="mb-16"
        >
          <ForgeFinalLogo size={120} color="white" className="mx-auto" />
        </motion.div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight">
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              THIS IS THE SYMBOL.
            </motion.span>
            <motion.span 
              className="block text-white mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              THIS IS THE PRODUCT.
            </motion.span>
            <motion.span 
              className="block text-forge-steel mt-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              EVERYTHING ELSE IS BUILT ON THIS.
            </motion.span>
          </h2>
        </motion.div>

        {/* Divider line */}
        <motion.div
          className="mt-16 mb-12 mx-auto"
          initial={{ width: 0 }}
          animate={isInView ? { width: "120px" } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="h-[1px] bg-gradient-to-r from-transparent via-forge-ember to-transparent" />
        </motion.div>

        {/* Final tagline */}
        <motion.p
          className="text-forge-ember text-sm tracking-[0.5em] uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Forged Under Pressure
        </motion.p>
      </div>
    </section>
  );
};

export default FinalStatement;
