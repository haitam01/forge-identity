import { FC, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { CartProvider } from '@/context/CartContext';
import { ShopHeader } from '@/components/shop/ShopHeader';
import { ProductCard } from '@/components/shop/ProductCard';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { getProductsByCategory } from '@/data/products';
import { ForgeAppIcon } from '@/components/ForgeAppIcon';

// Import hero images
import forgeCampaignBanner from '@/assets/forge-campaign-banner.jpg';
import forgeWomenDeadlift from '@/assets/forge-women-deadlift.jpg';
import forgeMenHoodieFront from '@/assets/forge-men-hoodie-front.jpg';
import forgeWomenBoxing from '@/assets/forge-women-boxing.jpg';
import forgeMenActionRopes from '@/assets/forge-men-action-ropes.jpg';
import forgeBackpackDetail from '@/assets/forge-backpack-detail.jpg';
import forgeWomenHoodieBack from '@/assets/forge-women-hoodie-back.jpg';

// Category Section with Products
const CategorySection: FC<{
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  category: string;
  reverse?: boolean;
}> = ({ title, subtitle, tagline, image, category, reverse }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const products = getProductsByCategory(category);

  return (
    <section ref={ref} className="relative">
      {/* Category Hero */}
      <div className={`grid md:grid-cols-2 min-h-[70vh]`}>
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`relative overflow-hidden ${reverse ? 'md:order-2' : ''}`}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`flex flex-col justify-center p-12 md:p-16 lg:p-24 bg-[hsl(var(--forge-black))] ${reverse ? 'md:order-1' : ''}`}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-[hsl(var(--forge-ember))] tracking-[0.4em] text-xs mb-4"
          >
            {tagline}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed max-w-md"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3 text-[hsl(var(--muted-foreground))]"
          >
            <span className="text-4xl font-display">{products.length}</span>
            <span className="text-xs tracking-[0.2em]">PRODUCTS</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="py-16 md:py-24 px-6 bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Brand Statement Component
const BrandStatement: FC<{ text: string; small?: boolean }> = ({ text, small }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className={`${small ? 'py-20' : 'py-32'} px-6 bg-[hsl(var(--forge-black))] relative overflow-hidden`}
    >
      {!small && (
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
          <ForgeAppIcon size={600} variant="dark" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <blockquote className={`font-display ${small ? 'text-2xl md:text-4xl' : 'text-3xl md:text-5xl lg:text-6xl'} tracking-tight leading-tight`}>
          "{text}"
        </blockquote>
      </motion.div>
    </motion.section>
  );
};

// Featured Lookbook Grid
const LookbookGrid: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const looks = [
    { image: forgeWomenBoxing, label: "COMBAT READY" },
    { image: forgeMenActionRopes, label: "ENDLESS WORK" },
    { image: forgeWomenHoodieBack, label: "WALK AWAY STRONG" },
    { image: forgeBackpackDetail, label: "CARRY THE WEIGHT" },
  ];

  return (
    <section ref={ref} className="bg-[hsl(var(--forge-black))]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center py-16 px-6"
      >
        <p className="text-[hsl(var(--forge-ember))] tracking-[0.4em] text-xs mb-4">
          BUILT BY FIRE
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight">
          THE WORK SHOWS
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        {looks.map((look, index) => (
          <motion.div
            key={look.label}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
          >
            <motion.img
              src={look.image}
              alt={look.label}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-[hsl(var(--foreground))]">
                {look.label}
              </p>
            </div>
            <motion.div
              className="absolute inset-0 border-2 border-[hsl(var(--forge-ember))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ShopContent: FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ShopHeader />
      <CartDrawer />

      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={forgeCampaignBanner}
            alt="FORGE Campaign"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[hsl(var(--background))]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ForgeAppIcon size={80} variant="dark" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tight mt-8"
          >
            FORGE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[hsl(var(--muted-foreground))] tracking-[0.4em] text-sm md:text-base mt-4"
          >
            STRENGTH IS FORGED, NOT GIVEN
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
              SCROLL TO EXPLORE
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-5 h-5 text-[hsl(var(--forge-ember))]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <BrandStatement text="NO COMFORT. ONLY PROGRESS." />

      {/* Women's Collection */}
      <CategorySection
        title="WOMEN'S"
        tagline="STRENGTH IS EARNED"
        subtitle="Power without exhibition. Strength without softness. Every piece engineered for those who train without cameras."
        image={forgeWomenDeadlift}
        category="women"
      />

      {/* Lookbook Grid */}
      <LookbookGrid />

      {/* Men's Collection */}
      <CategorySection
        title="MEN'S"
        tagline="STEEL DOESN'T LIE"
        subtitle="Controlled aggression. Discipline. Stillness under pressure. The body language says it all."
        image={forgeMenHoodieFront}
        category="men"
        reverse
      />

      {/* Brand Statement 2 */}
      <BrandStatement text="FORGED UNDER PRESSURE" small />

      {/* Accessories Collection */}
      <CategorySection
        title="GEAR"
        tagline="CARRY THE WEIGHT"
        subtitle="Military-grade construction. Function first. Every accessory built to endure what you endure."
        image={forgeBackpackDetail}
        category="accessories"
      />

      {/* Final CTA */}
      <section className="py-32 px-6 bg-[hsl(var(--forge-black))] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <p className="text-[hsl(var(--forge-ember))] tracking-[0.4em] text-xs mb-6">
            JOIN THE FORGE
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
            THE WORK REMAINS
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-10">
            Be first to know when new collections drop. No hype. Just gear for those who earn it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 bg-transparent border border-[hsl(var(--border))] px-6 py-4 text-sm tracking-[0.1em] placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--forge-ember))] focus:outline-none transition-colors"
            />
            <button className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] px-8 py-4 text-sm tracking-[0.2em] hover:bg-[hsl(var(--forge-ember))] transition-colors font-heading">
              JOIN
            </button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <ForgeAppIcon size={40} variant="dark" />
              <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                Strength is forged, not given.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm tracking-[0.2em] mb-4">SHOP</h4>
              <ul className="space-y-3">
                {["Women's", "Men's", "Gear", "New Arrivals"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm tracking-[0.2em] mb-4">SUPPORT</h4>
              <ul className="space-y-3">
                {["Shipping", "Returns", "Size Guide", "Contact"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm tracking-[0.2em] mb-4">FORGE</h4>
              <ul className="space-y-3">
                {["About", "Athletes", "Careers", "Press"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[hsl(var(--muted-foreground))] tracking-[0.2em]">
              © 2024 FORGE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              {['INSTAGRAM', 'TWITTER', 'YOUTUBE'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--forge-ember))] tracking-[0.15em] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Shop: FC = () => {
  return (
    <CartProvider>
      <ShopContent />
    </CartProvider>
  );
};

export default Shop;
