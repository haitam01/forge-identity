import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ForgeAppIcon } from '@/components/ForgeAppIcon';

export const ShopHeader: FC = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-40 bg-[hsl(var(--background))]/90 backdrop-blur-md border-b border-[hsl(var(--border))]"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left - Menu */}
        <button className="p-2 hover:bg-[hsl(var(--accent))] transition-colors">
          <Menu className="w-5 h-5" />
        </button>

        {/* Center - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <ForgeAppIcon size={36} variant="dark" />
          <span className="font-heading text-xl tracking-[0.3em] hidden sm:block">
            FORGE
          </span>
        </Link>

        {/* Right - Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-[hsl(var(--accent))] transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(var(--forge-ember))] text-[hsl(var(--forge-black))] text-xs font-bold flex items-center justify-center"
            >
              {totalItems}
            </motion.span>
          )}
        </button>
      </div>
    </motion.header>
  );
};

export default ShopHeader;
