import { FC, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import athletePullupImg from "@/assets/athlete-hoodie-pullup.jpg";
import athleteBoxingImg from "@/assets/athlete-hoodie-boxing.jpg";
import athleteDeadliftImg from "@/assets/athlete-hoodie-deadlift.jpg";
import athleteStretchImg from "@/assets/athlete-hoodie-stretch.jpg";

/**
 * FORGE PRODUCT SHOWCASE — Hero Hoodie
 * Real athlete photography with FORGE branding
 */

const AthleteCard: FC<{ 
  image: string;
  title: string;
  subtitle: string;
  delay?: number;
}> = ({ image, title, subtitle, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group overflow-hidden rounded-sm"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-forge-ember/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-forge-ember text-xs tracking-[0.3em] uppercase">{subtitle}</span>
          <h3 className="text-white font-heading text-2xl mt-1">{title}</h3>
        </div>
      </div>
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

      <div className="max-w-7xl mx-auto relative z-10">
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
            450 GSM heavyweight cotton blend. Industrial construction. Worn by those who earn it.
          </p>
        </motion.div>

        {/* Hero athlete shot - full width */}
        <motion.div
          className="relative mb-12 overflow-hidden rounded-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="aspect-[21/9] relative">
            <img 
              src={athletePullupImg} 
              alt="Athlete doing pull-ups in FORGE hoodie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <span className="text-forge-ember text-xs tracking-[0.3em] uppercase">In Action</span>
              <h3 className="text-white font-heading text-3xl md:text-5xl mt-2">BUILT FOR POWER</h3>
            </div>
          </div>
        </motion.div>

        {/* Athlete grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <AthleteCard 
            image={athleteBoxingImg}
            title="STRIKE READY"
            subtitle="Combat Training"
            delay={0.1}
          />
          <AthleteCard 
            image={athleteDeadliftImg}
            title="RAW STRENGTH"
            subtitle="Powerlifting"
            delay={0.2}
          />
          <AthleteCard 
            image={athleteStretchImg}
            title="URBAN FORGE"
            subtitle="Street Ready"
            delay={0.3}
          />
        </div>

        {/* Product specs */}
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
