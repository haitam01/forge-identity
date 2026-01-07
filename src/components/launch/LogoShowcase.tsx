import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";
import { ForgeFinalWordmark } from "@/components/final/ForgeFinalWordmark";
import { ForgeFinalAppIcon } from "@/components/final/ForgeFinalAppIcon";

/**
 * FORGE LOGO SHOWCASE — Premium presentation
 * With depth, shadows, and contextual mockups
 */

export const LogoShowcase: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(0 0% 20%) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-forge-ember text-xs tracking-[0.4em] uppercase font-medium">01 — Identity</span>
          <h2 className="text-5xl md:text-6xl font-heading mt-4 forge-text-gradient">The Symbol</h2>
        </motion.div>

        {/* Primary logo with 3D depth effect */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Shadow layers for depth */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 opacity-20">
              <ForgeFinalLogo size={280} color="white" />
            </div>
            <div className="absolute inset-0 translate-x-2 translate-y-2 opacity-40">
              <ForgeFinalLogo size={280} color="white" />
            </div>
            {/* Main logo */}
            <div className="relative">
              <ForgeFinalLogo size={280} color="white" />
            </div>
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 blur-3xl bg-forge-ember/20" />
            </div>
          </div>
        </motion.div>

        {/* Logo variations grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Black on White */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-sm p-12 flex items-center justify-center h-64 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white" />
              <ForgeFinalLogo size={100} color="black" className="relative z-10" />
            </div>
            <p className="mt-4 text-forge-steel text-sm">Primary — Light</p>
          </motion.div>

          {/* White on Black */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black rounded-sm p-12 flex items-center justify-center h-64 relative overflow-hidden border border-forge-steel/20">
              <div className="absolute inset-0 bg-gradient-to-br from-forge-steel/5 to-transparent" />
              <ForgeFinalLogo size={100} color="white" className="relative z-10" />
            </div>
            <p className="mt-4 text-forge-steel text-sm">Primary — Dark</p>
          </motion.div>

          {/* Embossed effect */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div 
              className="rounded-sm p-12 flex items-center justify-center h-64 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, hsl(0 0% 15%), hsl(0 0% 8%))',
              }}
            >
              {/* Brushed metal texture */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 1px,
                    hsl(0 0% 30%) 1px,
                    hsl(0 0% 30%) 2px
                  )`
                }}
              />
              {/* Embossed logo */}
              <div className="relative" style={{ filter: 'drop-shadow(1px 1px 0 hsl(0 0% 25%)) drop-shadow(-1px -1px 0 hsl(0 0% 5%))' }}>
                <ForgeFinalLogo size={100} color="white" className="opacity-10" />
              </div>
            </div>
            <p className="mt-4 text-forge-steel text-sm">Embossed — Metal</p>
          </motion.div>
        </div>

        {/* Logo + Wordmark lockup */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-8 p-12 rounded-sm border border-forge-steel/10 bg-forge-steel/5">
            <ForgeFinalLogo size={80} color="white" />
            <div className="w-[1px] h-16 bg-forge-steel/20" />
            <ForgeFinalWordmark size={200} color="white" />
          </div>
          <p className="mt-6 text-forge-steel text-sm">Horizontal Lockup</p>
        </motion.div>

        {/* App icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="rounded" theme="dark" />
            <p className="mt-3 text-forge-steel text-xs">iOS</p>
          </div>
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="square" theme="dark" />
            <p className="mt-3 text-forge-steel text-xs">Android</p>
          </div>
          <div className="text-center">
            <ForgeFinalAppIcon size={120} variant="rounded" theme="light" />
            <p className="mt-3 text-forge-steel text-xs">Light Mode</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoShowcase;
