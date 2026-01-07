import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";
import { ForgeFinalWordmark } from "@/components/final/ForgeFinalWordmark";

/**
 * FORGE HERO — Cinematic Brand Reveal
 * Hammer strike animation with sparks
 */

const Spark: FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-forge-ember"
    style={{ left: "50%", top: "50%" }}
    initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    animate={{
      opacity: [1, 1, 0],
      x: x,
      y: y,
      scale: [1, 0.5, 0],
    }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    }}
  />
);

export const HeroSection: FC = () => {
  const [showSparks, setShowSparks] = useState(false);
  const [phase, setPhase] = useState<"strike" | "reveal" | "complete">("strike");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSparks(true);
      setPhase("reveal");
    }, 600);
    
    const timer2 = setTimeout(() => {
      setPhase("complete");
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Generate random sparks
  const sparks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 300,
    y: (Math.random() - 0.5) * 200 - 50,
    delay: Math.random() * 0.3,
  }));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} 
        />
        
        {/* Ember glow behind logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(21 100% 50% / 0.15) 0%, transparent 70%)"
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: phase === "complete" ? 0.6 : 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />

        {/* Steel texture overlay */}
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
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Sparks container */}
        <div className="relative">
          <AnimatePresence>
            {showSparks && sparks.map((spark) => (
              <Spark key={spark.id} delay={spark.delay} x={spark.x} y={spark.y} />
            ))}
          </AnimatePresence>

          {/* Logo with hammer strike animation */}
          <motion.div
            initial={{ opacity: 0, scale: 1.5, y: -100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              animate={phase === "reveal" ? { 
                filter: ["brightness(3)", "brightness(1)"],
              } : {}}
              transition={{ duration: 0.5 }}
            >
              <ForgeFinalLogo size={180} color="white" className="mx-auto" />
            </motion.div>
          </motion.div>
        </div>

        {/* Wordmark */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <ForgeFinalWordmark size={320} color="white" className="mx-auto" />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <p className="mt-10 text-forge-steel text-sm tracking-[0.4em] uppercase">
            Forged Under Pressure
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 2.5, duration: 0.5 },
            y: { delay: 2.5, duration: 2, repeat: Infinity }
          }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-forge-steel/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
