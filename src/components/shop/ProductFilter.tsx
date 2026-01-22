import { FC } from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductFilter: FC<ProductFilterProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className="relative px-6 py-3 tracking-[0.15em] text-sm transition-colors"
        >
          <span
            className={
              activeCategory === category.id
                ? 'text-[hsl(var(--foreground))]'
                : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
            }
          >
            {category.name}
          </span>
          <span className="ml-2 text-xs text-[hsl(var(--muted-foreground))]">
            ({category.count})
          </span>
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(var(--forge-ember))]"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
