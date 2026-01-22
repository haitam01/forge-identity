// FORGE Product Data - Elite Performance Collection

export interface Product {
  id: string;
  name: string;
  category: 'women' | 'men' | 'accessories';
  subcategory: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
}

// Import all product images
import forgeWomenLeggingsBra from '@/assets/forge-women-leggings-bra.jpg';
import forgeWomenHoodie from '@/assets/forge-women-hoodie.jpg';
import forgeWomenLongsleeve from '@/assets/forge-women-longsleeve.jpg';
import forgeWomenModest from '@/assets/forge-women-modest.jpg';
import forgeMenCompression from '@/assets/forge-men-compression.jpg';
import forgeMenHoodie from '@/assets/forge-men-hoodie.jpg';
import forgeMenTank from '@/assets/forge-men-tank.jpg';
import forgeDuffleBag from '@/assets/forge-duffle-bag.jpg';
import forgeAccessories from '@/assets/forge-accessories.jpg';
// New action & angle shots
import forgeWomenDeadlift from '@/assets/forge-women-deadlift.jpg';
import forgeWomenBoxing from '@/assets/forge-women-boxing.jpg';
import forgeWomenStretch from '@/assets/forge-women-stretch.jpg';
import forgeWomenHoodieBack from '@/assets/forge-women-hoodie-back.jpg';
import forgeMenActionRopes from '@/assets/forge-men-action-ropes.jpg';
import forgeMenPullup from '@/assets/forge-men-pullup.jpg';
import forgeMenHoodieFront from '@/assets/forge-men-hoodie-front.jpg';
import forgeBackpackDetail from '@/assets/forge-backpack-detail.jpg';

export const products: Product[] = [
  // Women's Collection
  {
    id: 'w-001',
    name: 'FORGE Performance Set',
    category: 'women',
    subcategory: 'Sets',
    price: 145,
    image: forgeWomenLeggingsBra,
    images: [forgeWomenLeggingsBra, forgeWomenDeadlift, forgeWomenStretch],
    description: 'High-waist compression leggings with matching sports bra. Engineered for maximum performance.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Matte Black', 'Steel Gray'],
    featured: true,
  },
  {
    id: 'w-002',
    name: 'FORGE Elite Hoodie',
    category: 'women',
    subcategory: 'Hoodies',
    price: 120,
    image: forgeWomenHoodie,
    images: [forgeWomenHoodie, forgeWomenHoodieBack],
    description: 'Premium heavyweight hoodie. Minimal branding. Maximum warmth.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Matte Black', 'Charcoal'],
  },
  {
    id: 'w-003',
    name: 'FORGE Training Long Sleeve',
    category: 'women',
    subcategory: 'Long Sleeves',
    price: 85,
    image: forgeWomenLongsleeve,
    images: [forgeWomenLongsleeve, forgeWomenStretch],
    description: 'Technical long sleeve with thumb holes. Built for endurance.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Matte Black', 'Off-White'],
  },
  {
    id: 'w-004',
    name: 'FORGE Modest Performance Set',
    category: 'women',
    subcategory: 'Modest Wear',
    price: 165,
    image: forgeWomenModest,
    description: 'Full coverage training set with integrated hijab. Performance without compromise.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Matte Black', 'Charcoal'],
    featured: true,
  },
  {
    id: 'w-005',
    name: 'FORGE Boxing Short Set',
    category: 'women',
    subcategory: 'Shorts',
    price: 95,
    image: forgeWomenBoxing,
    description: 'High-waist training shorts with sports bra. Built for combat sports.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Matte Black'],
  },
  // Men's Collection
  {
    id: 'm-001',
    name: 'FORGE Compression Tee',
    category: 'men',
    subcategory: 'Compression',
    price: 75,
    image: forgeMenCompression,
    description: 'Second-skin compression fit. Shows the work.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Matte Black', 'Steel Gray'],
    featured: true,
  },
  {
    id: 'm-002',
    name: 'FORGE Heavyweight Hoodie',
    category: 'men',
    subcategory: 'Hoodies',
    price: 130,
    image: forgeMenHoodie,
    images: [forgeMenHoodie, forgeMenHoodieFront],
    description: 'Industrial weight. Forged under pressure.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Matte Black', 'Charcoal'],
    featured: true,
  },
  {
    id: 'm-003',
    name: 'FORGE Training Tank',
    category: 'men',
    subcategory: 'Tanks',
    price: 55,
    image: forgeMenTank,
    images: [forgeMenTank, forgeMenActionRopes],
    description: 'Cut for movement. Built for intensity.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Matte Black', 'Off-White'],
  },
  {
    id: 'm-004',
    name: 'FORGE Compression Long Sleeve',
    category: 'men',
    subcategory: 'Long Sleeves',
    price: 85,
    image: forgeMenPullup,
    description: 'Full-length compression for maximum performance.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Matte Black', 'Steel Gray'],
  },
  // Accessories
  {
    id: 'a-001',
    name: 'FORGE Training Duffle',
    category: 'accessories',
    subcategory: 'Bags',
    price: 175,
    image: forgeDuffleBag,
    description: 'Military-grade construction. Lifetime warranty.',
    colors: ['Matte Black'],
    featured: true,
  },
  {
    id: 'a-002',
    name: 'FORGE Equipment Set',
    category: 'accessories',
    subcategory: 'Equipment',
    price: 95,
    image: forgeAccessories,
    description: 'Bottle, cap, and essentials. Function first.',
    colors: ['Matte Black', 'Steel Gray'],
  },
  {
    id: 'a-003',
    name: 'FORGE Tactical Backpack',
    category: 'accessories',
    subcategory: 'Bags',
    price: 195,
    image: forgeBackpackDetail,
    description: 'Military-spec materials. Built to endure.',
    colors: ['Matte Black'],
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'women', name: "Women's", count: products.filter(p => p.category === 'women').length },
  { id: 'men', name: "Men's", count: products.filter(p => p.category === 'men').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length },
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};
