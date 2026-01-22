import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Eye } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product.colors?.[0]
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[hsl(var(--forge-black))]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Actions */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--forge-ember))] px-8 py-6 text-xs tracking-[0.15em]"
            >
              <Plus className="w-4 h-4 mr-2" />
              ADD TO CART
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] px-4 py-6"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[hsl(var(--forge-ember))] text-[hsl(var(--forge-black))] text-[10px] tracking-[0.25em] font-bold px-4 py-2 inline-block"
            >
              FEATURED
            </motion.span>
          </div>
        )}

        {/* Ember border on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-[hsl(var(--forge-ember))] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Product Info */}
      <div className="pt-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[hsl(var(--forge-ember))] uppercase mb-1">
              {product.subcategory}
            </p>
            <h3 className="font-heading text-lg tracking-wide">
              {product.name}
            </h3>
          </div>
          <p className="font-display text-2xl">${product.price}</p>
        </div>

        {/* Size & Color Selectors */}
        <div className="flex gap-3">
          {product.sizes && (
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full bg-transparent border-[hsl(var(--border))] text-xs tracking-[0.1em] h-12">
                <SelectValue placeholder="SIZE" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map(size => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
          {product.colors && (
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full bg-transparent border-[hsl(var(--border))] text-xs tracking-[0.1em] h-12">
                <SelectValue placeholder="COLOR" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map(color => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
