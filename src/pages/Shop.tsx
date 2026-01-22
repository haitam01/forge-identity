import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { CartProvider } from '@/context/CartContext';
import { ShopHeader } from '@/components/shop/ShopHeader';
import { ProductFilter } from '@/components/shop/ProductFilter';
import { ProductCard } from '@/components/shop/ProductCard';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { getProductsByCategory, getFeaturedProducts } from '@/data/products';
import forgeCampaignBanner from '@/assets/forge-campaign-banner.jpg';

const ShopContent: FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const products = getProductsByCategory(activeCategory);
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <ShopHeader />
      <CartDrawer />

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] mt-20 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={forgeCampaignBanner}
            alt="FORGE Campaign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-[hsl(var(--forge-ember))] tracking-[0.4em] text-sm mb-4">
              NEW COLLECTION
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight">
              FORGED UNDER
              <br />
              <span className="forge-text-ember">PRESSURE</span>
            </h1>
            <p className="mt-6 text-[hsl(var(--muted-foreground))] tracking-[0.2em] text-sm">
              STRENGTH IS EARNED
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[hsl(var(--forge-ember))] tracking-[0.3em] text-xs mb-3">
              THE WORK SHOWS
            </p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-wide">
              FEATURED GEAR
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />
      </div>

      {/* Full Collection */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[hsl(var(--muted-foreground))] tracking-[0.3em] text-xs mb-3">
              NO COMFORT. ONLY PROGRESS.
            </p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-wide mb-8">
              FULL COLLECTION
            </h2>
            <ProductFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="py-20 px-6 bg-[hsl(var(--forge-black))]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[hsl(var(--forge-ember))] tracking-[0.4em] text-xs mb-6">
              BUILT BY FIRE
            </p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6">
              STEEL DOESN'T LIE
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] max-w-xl mx-auto leading-relaxed">
              Every piece in the FORGE collection is engineered for those who
              understand that strength is forged, not given. The work remains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[hsl(var(--border))]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[hsl(var(--muted-foreground))] tracking-[0.2em]">
            © 2024 FORGE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {['SHIPPING', 'RETURNS', 'CONTACT'].map(link => (
              <a
                key={link}
                href="#"
                className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] tracking-[0.2em] transition-colors"
              >
                {link}
              </a>
            ))}
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
