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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
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
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-end justify-center pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--forge-ember))] px-6"
            >
              <Plus className="w-4 h-4 mr-2" />
              ADD
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Featured badge */}
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[hsl(var(--forge-ember))] text-[hsl(var(--forge-black))] text-[10px] tracking-[0.2em] font-bold px-3 py-1">
              FEATURED
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-[hsl(var(--muted-foreground))] uppercase">
              {product.subcategory}
            </p>
            <h3 className="font-heading text-lg tracking-wide mt-1">
              {product.name}
            </h3>
          </div>
          <p className="font-heading text-xl">${product.price}</p>
        </div>

        {/* Size & Color Selectors */}
        <div className="flex gap-2">
          {product.sizes && (
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full bg-transparent border-[hsl(var(--border))] text-xs">
                <SelectValue placeholder="Size" />
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
              <SelectTrigger className="w-full bg-transparent border-[hsl(var(--border))] text-xs">
                <SelectValue placeholder="Color" />
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
