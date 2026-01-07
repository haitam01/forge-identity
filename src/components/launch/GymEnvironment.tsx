import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";
import { ForgeFinalWordmark } from "@/components/final/ForgeFinalWordmark";

/**
 * FORGE GYM ENVIRONMENT — Brand in context
 * Industrial gym setting with signage
 */

export const GymEnvironment: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-forge-ember text-xs tracking-[0.4em] uppercase font-medium">04 — Environment</span>
          <h2 className="text-5xl md:text-6xl font-heading mt-4 forge-text-gradient">The Forge</h2>
        </motion.div>

        {/* Gym wall mockup */}
        <motion.div
          className="relative aspect-[16/9] rounded-sm overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Concrete wall texture */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, hsl(0 0% 12%) 0%, hsl(0 0% 8%) 100%),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 100px,
                  hsl(0 0% 15% / 0.3) 100px,
                  hsl(0 0% 15% / 0.3) 101px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 100px,
                  hsl(0 0% 15% / 0.3) 100px,
                  hsl(0 0% 15% / 0.3) 101px
                )
              `
            }}
          />
          
          {/* Brick texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 30px,
                  hsl(0 0% 0%) 30px,
                  hsl(0 0% 0%) 32px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 60px,
                  hsl(0 0% 0%) 60px,
                  hsl(0 0% 0%) 62px
                )
              `
            }}
          />

          {/* Dramatic lighting */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, hsl(0 0% 25% / 0.3) 0%, transparent 60%)'
            }}
          />

          {/* Wall-mounted logo - backlit effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {/* Backlight glow */}
              <div 
                className="absolute inset-0 blur-3xl scale-150"
                style={{
                  background: 'radial-gradient(circle, hsl(21 100% 50% / 0.3) 0%, transparent 70%)'
                }}
              />
              
              {/* Logo */}
              <div className="relative flex flex-col items-center gap-6">
                <ForgeFinalLogo size={150} color="white" />
                <ForgeFinalWordmark size={280} color="white" />
              </div>
            </motion.div>
          </div>

          {/* Floor reflection */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 5%) 100%)'
            }}
          />

          {/* Equipment silhouettes */}
          <div className="absolute bottom-8 left-8 w-20 h-24 bg-black/40 rounded-sm" />
          <div className="absolute bottom-8 right-8 w-32 h-16 bg-black/40 rounded-sm" />
        </motion.div>

        {/* Additional context mockups */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Flag banner */}
          <motion.div
            className="relative aspect-[3/4] rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-forge-black flex items-center justify-center">
              <div className="flex flex-col items-center">
                <ForgeFinalLogo size={80} color="white" />
                <div className="mt-4 text-forge-steel text-xs tracking-[0.3em] uppercase">
                  FORGED UNDER PRESSURE
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-forge-steel/50 text-xs">Wall Banner</div>
          </motion.div>

          {/* Locker room plaque */}
          <motion.div
            className="relative aspect-[3/4] rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(145deg, hsl(0 0% 18%), hsl(0 0% 10%))'
              }}
            >
              {/* Brushed metal */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 1px,
                    hsl(0 0% 40%) 1px,
                    hsl(0 0% 40%) 2px
                  )`
                }}
              />
              <div 
                className="relative p-8 border border-forge-steel/20"
                style={{ filter: 'drop-shadow(0 4px 20px hsl(0 0% 0% / 0.5))' }}
              >
                <ForgeFinalLogo size={60} color="white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-forge-steel/50 text-xs">Metal Plaque</div>
          </motion.div>

          {/* Entry signage */}
          <motion.div
            className="relative aspect-[3/4] rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, hsl(0 0% 6%) 0%, hsl(0 0% 2%) 100%)'
              }}
            >
              {/* Neon-style glow */}
              <div className="relative">
                <div 
                  className="absolute inset-0 blur-2xl"
                  style={{
                    background: 'hsl(21 100% 50% / 0.4)'
                  }}
                />
                <ForgeFinalWordmark size={160} color="white" className="relative" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-forge-steel/50 text-xs">Backlit Sign</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GymEnvironment;
