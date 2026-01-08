import { FC, useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";

/**
 * FORGE HERO — Nike/Adidas Level Cinematic Brand Reveal
 * Signature motion system with ember particles
 */

const EmberParticle: FC<{ delay: number; startX: number }> = ({ delay, startX }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{ 
      left: `${startX}%`, 
      bottom: 0,
      background: 'radial-gradient(circle, hsl(25 100% 60%) 0%, hsl(18 100% 50%) 50%, transparent 100%)',
      boxShadow: '0 0 10px hsl(18 100% 50% / 0.8)'
    }}
    initial={{ opacity: 0, y: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [-20, -150, -300, -400],
      x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
      scale: [0, 1.5, 1, 0.5],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const StrikeSpark: FC<{ delay: number; angle: number }> = ({ delay, angle }) => {
  const distance = 100 + Math.random() * 200;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-forge-ember"
      style={{ 
        left: "50%", 
        top: "50%",
        boxShadow: '0 0 20px hsl(18 100% 50%), 0 0 40px hsl(25 100% 60% / 0.5)'
      }}
      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      animate={{
        opacity: [1, 1, 0],
        x: [0, x * 0.5, x],
        y: [0, y * 0.5, y],
        scale: [1, 0.8, 0],
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
};

export const HeroSection: FC = () => {
  const [phase, setPhase] = useState<"loading" | "strike" | "reveal" | "complete">("loading");
  const [showEmbers, setShowEmbers] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
  const logoY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("strike"), 100);
    const timer2 = setTimeout(() => {
      setPhase("reveal");
      setShowEmbers(true);
    }, 700);
    const timer3 = setTimeout(() => setPhase("complete"), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Generate strike sparks
  const sparks = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i / 30) * Math.PI * 2 - Math.PI / 2,
    delay: Math.random() * 0.2,
  }));

  // Generate ambient embers
  const embers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startX: 35 + Math.random() * 30,
    delay: i * 0.3,
  }));

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Deep black background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background" />
      
      {/* Animated grid pattern */}
      <motion.div 
        className="absolute inset-0 grid-pattern opacity-0"
        animate={{ opacity: phase === "complete" ? 0.3 : 0 }}
        transition={{ duration: 2 }}
      />

      {/* Central ember glow - breathing effect */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(18 100% 50% / 0.2) 0%, hsl(18 100% 50% / 0.05) 40%, transparent 70%)"
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: phase !== "loading" ? 1 : 0, 
          scale: phase === "complete" ? [1, 1.1, 1] : 1 
        }}
        transition={{ 
          opacity: { duration: 1 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Ember particles rising */}
      {showEmbers && (
        <div className="absolute inset-0 pointer-events-none">
          {embers.map((ember) => (
            <EmberParticle key={ember.id} delay={ember.delay} startX={ember.startX} />
          ))}
        </div>
      )}

      {/* Vignette overlay */}
      <div className="absolute inset-0 vignette" />

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ opacity: contentOpacity }}
      >
        {/* Strike sparks container */}
        <div className="relative">
          {phase === "reveal" && sparks.map((spark) => (
            <StrikeSpark key={spark.id} delay={spark.delay} angle={spark.angle} />
          ))}

          {/* Logo with signature strike animation */}
          <motion.div
            style={{ scale: logoScale, y: logoY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 2, y: -200 }}
              animate={phase !== "loading" ? { 
                opacity: 1, 
                scale: 1, 
                y: 0,
              } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                animate={phase === "reveal" ? { 
                  filter: ["brightness(4)", "brightness(1)"],
                } : {}}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Logo glow effect */}
                <motion.div 
                  className="absolute inset-0 blur-2xl opacity-30"
                  style={{ filter: 'blur(40px)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === "complete" ? 0.4 : 0 }}
                >
                  <div className="w-[200px] h-[200px] mx-auto rounded-full bg-forge-ember" />
                </motion.div>
                <ForgeFinalLogo size={200} color="white" className="mx-auto relative z-10" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Brand name - massive display type */}
        <motion.h1
          className="mt-8 forge-text-hero text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none"
          initial={{ opacity: 0, y: 60 }}
          animate={phase === "reveal" || phase === "complete" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="forge-text-gradient">FORGE</span>
        </motion.h1>

        {/* Tagline with ember accent */}
        <motion.div
          className="mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={phase === "complete" ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p 
            className="text-lg md:text-xl tracking-[0.5em] uppercase font-light"
            initial={{ y: 40 }}
            animate={phase === "complete" ? { y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-forge-steel">Forged</span>
            <span className="mx-4 text-forge-ember">•</span>
            <span className="text-forge-steel">Under</span>
            <span className="mx-4 text-forge-ember">•</span>
            <span className="text-forge-steel">Pressure</span>
          </motion.p>
        </motion.div>

        {/* CTA Button - signature hover effect */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={phase === "complete" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="forge-btn text-white">
            <span>Explore Collection</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={phase === "complete" ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-forge-steel text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-forge-ember to-transparent" />
        </motion.div>
      </motion.div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
    </section>
  );
};

export default HeroSection;