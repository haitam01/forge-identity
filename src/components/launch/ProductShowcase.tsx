import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ForgeFinalLogo } from "@/components/final/ForgeFinalLogo";

/**
 * FORGE PRODUCT SHOWCASE — Hero Hoodie
 * Atmospheric product presentation with parallax
 */

const HoodieView: FC<{ 
  view: "front" | "back" | "side"; 
  delay?: number;
}> = ({ view, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <div 
        className="aspect-[3/4] rounded-sm relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 8%) 0%, hsl(0 0% 4%) 100%)',
        }}
      >
        {/* Dramatic lighting */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 0%, hsl(0 0% 20% / 0.4) 0%, transparent 60%)'
          }}
        />

        {/* Hoodie illustration */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full max-w-[200px]">
            {/* Hoodie body */}
            <div 
              className="aspect-[4/5] rounded-t-[60px] relative"
              style={{
                background: 'linear-gradient(180deg, hsl(0 0% 10%) 0%, hsl(0 0% 6%) 100%)',
                boxShadow: 'inset 0 20px 40px hsl(0 0% 15% / 0.3), 0 20px 60px hsl(0 0% 0% / 0.8)'
              }}
            >
              {/* Hood */}
              <div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-[70%] h-12"
                style={{
                  background: 'linear-gradient(180deg, hsl(0 0% 12%) 0%, hsl(0 0% 8%) 100%)',
                  borderRadius: '50% 50% 0 0',
                }}
              />
              
              {/* Seam line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-forge-steel/10" />
              
              {/* Logo placement */}
              {view === "front" && (
                <div className="absolute top-12 left-8">
                  <ForgeFinalLogo size={24} color="white" />
                </div>
              )}
              
              {view === "back" && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                  <ForgeFinalLogo size={60} color="white" className="opacity-80" />
                </div>
              )}

              {/* Pocket */}
              {view === "front" && (
                <div 
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 rounded-t-lg"
                  style={{
                    background: 'linear-gradient(180deg, hsl(0 0% 8%) 0%, hsl(0 0% 6%) 100%)',
                    boxShadow: 'inset 0 2px 4px hsl(0 0% 0% / 0.5)'
                  }}
                />
              )}

              {/* Sleeve detail for side view */}
              {view === "side" && (
                <div className="absolute top-16 -right-4 w-8 h-32 rounded-full bg-forge-steel/5" />
              )}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-forge-ember/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      <p className="mt-4 text-forge-steel text-sm capitalize">{view} View</p>
    </motion.div>
  );
};

export const ProductShowcase: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      {/* Atmospheric background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(0 0% 10%) 0%, hsl(0 0% 4%) 70%)'
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-forge-ember text-xs tracking-[0.4em] uppercase font-medium">02 — Product</span>
          <h2 className="text-5xl md:text-6xl font-heading mt-4 forge-text-gradient">Hero Hoodie</h2>
          <p className="mt-4 text-forge-steel max-w-md mx-auto">
            450 GSM heavyweight cotton blend. Industrial construction. Minimal branding.
          </p>
        </motion.div>

        {/* Product views */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <HoodieView view="front" delay={0.1} />
          <HoodieView view="back" delay={0.2} />
          <HoodieView view="side" delay={0.3} />
        </div>

        {/* Detail shots */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "Embroidered Logo", desc: "3-4cm width, white thread" },
            { label: "Industrial Seam", desc: "Reinforced shoulders" },
            { label: "Premium Fabric", desc: "450 GSM, anti-pilling" },
            { label: "Woven Label", desc: "Minimal internal branding" },
          ].map((detail, i) => (
            <motion.div
              key={detail.label}
              className="text-center p-6 rounded-sm border border-forge-steel/10 bg-forge-steel/5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-sm bg-forge-steel/10 flex items-center justify-center">
                <div className="w-8 h-8 border border-forge-steel/30 rounded-sm" />
              </div>
              <h4 className="text-sm font-heading">{detail.label}</h4>
              <p className="text-forge-steel text-xs mt-1">{detail.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
