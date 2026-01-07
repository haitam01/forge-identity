import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";

/**
 * FORGE ATHLETE SECTION — Raw, intense photography direction
 * High contrast, dramatic lighting, real effort
 */

export const AthleteSection: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background athlete silhouette */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 30%, hsl(0 0% 15%) 0%, transparent 50%),
              linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(0 0% 2%) 100%)
            `
          }}
        />
        
        {/* Dramatic side lighting */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, hsl(21 100% 50% / 0.05) 0%, transparent 30%, transparent 70%, hsl(0 0% 0%) 100%)'
          }}
        />

        {/* Athlete silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-2xl aspect-[3/4]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
          >
            {/* Head */}
            <div 
              className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[15%] aspect-square rounded-full"
              style={{
                background: 'linear-gradient(180deg, hsl(0 0% 12%) 0%, hsl(0 0% 6%) 100%)',
                boxShadow: '0 0 60px hsl(0 0% 0% / 0.8)'
              }}
            />
            
            {/* Shoulders/Torso wearing hoodie */}
            <div 
              className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[60%] aspect-[4/5]"
              style={{
                background: 'linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 4%) 100%)',
                borderRadius: '30% 30% 0 0',
                boxShadow: 'inset 0 20px 60px hsl(0 0% 20% / 0.2)'
              }}
            >
              {/* Logo on chest */}
              <div className="absolute top-12 left-8">
                <ForgeFinalLogo size={20} color="white" />
              </div>
              
              {/* Hood shadow */}
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-[80%] h-8"
                style={{
                  background: 'linear-gradient(180deg, hsl(0 0% 15%) 0%, transparent 100%)',
                  borderRadius: '50% 50% 0 0'
                }}
              />
            </div>

            {/* Arms */}
            <div 
              className="absolute top-[25%] left-[15%] w-[12%] h-[40%] rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(0 0% 6%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 6%) 100%)',
                transform: 'rotate(-5deg)'
              }}
            />
            <div 
              className="absolute top-[25%] right-[15%] w-[12%] h-[40%] rounded-full"
              style={{
                background: 'linear-gradient(90deg, hsl(0 0% 6%) 0%, hsl(0 0% 10%) 50%, hsl(0 0% 6%) 100%)',
                transform: 'rotate(5deg)'
              }}
            />
          </motion.div>
        </div>

        {/* Sweat/effort particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${40 + Math.random() * 20}%`,
              top: `${30 + Math.random() * 20}%`,
            }}
            animate={{
              y: [0, 20, 40],
              opacity: [0.5, 0.3, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}
      </motion.div>

      {/* Content overlay */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-end pb-20 px-6"
        style={{ opacity }}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-forge-ember text-xs tracking-[0.4em] uppercase font-medium">03 — Vision</span>
            <h2 className="text-6xl md:text-8xl font-heading mt-4 leading-none">
              <span className="forge-text-gradient">EARNED</span>
              <br />
              <span className="text-forge-steel">NOT GIVEN</span>
            </h2>
            <p className="mt-8 text-forge-steel max-w-md text-lg">
              Raw. High contrast. Directional lighting.<br />
              Visible sweat. No smiles. No posing.<br />
              <span className="text-forge-ember">Effort over aesthetics.</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AthleteSection;
