import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import athleteHeroImg from "@/assets/athlete-hoodie-hero.jpg";
import athleteTrainingImg from "@/assets/athlete-training-detail.jpg";
import athleteBacklitImg from "@/assets/athlete-hoodie-backlit.jpg";

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
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] overflow-hidden bg-background">
      {/* Hero athlete image - full bleed */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ scale }}
        >
          <img 
            src={athleteHeroImg} 
            alt="Athlete in FORGE hoodie - intense focused training"
            className="w-full h-full object-cover object-center"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
        </motion.div>

        {/* Content overlay */}
        <motion.div 
          className="relative z-10 h-full flex items-end pb-20 px-6 md:px-12"
          style={{ opacity }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-forge-ember text-xs tracking-[0.4em] uppercase font-medium">03 — Vision</span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading mt-4 leading-none">
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
      </div>

      {/* Secondary athlete shots grid */}
      <div className="relative z-20 bg-background py-20 px-6 md:px-12">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          style={{ y }}
        >
          {/* Training detail shot */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <img 
              src={athleteTrainingImg} 
              alt="Female athlete training - raw intensity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-forge-ember text-xs tracking-[0.3em] uppercase">Training</span>
              <p className="text-white font-heading text-2xl mt-1">PURE EFFORT</p>
            </div>
          </motion.div>

          {/* Backlit hoodie shot */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <img 
              src={athleteBacklitImg} 
              alt="Athlete silhouette with ember glow"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-forge-ember text-xs tracking-[0.3em] uppercase">Identity</span>
              <p className="text-white font-heading text-2xl mt-1">FORGED IN FIRE</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Photography direction callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-4 text-forge-steel/60 text-sm tracking-widest uppercase">
            <span className="w-8 h-px bg-forge-ember" />
            Photography Direction
            <span className="w-8 h-px bg-forge-ember" />
          </div>
          <p className="mt-6 text-forge-steel text-lg leading-relaxed">
            Every image captures the <span className="text-white">moment of transformation</span>—
            where discipline meets dedication. No filters. No retouching. 
            Just <span className="text-forge-ember">authentic power</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AthleteSection;
