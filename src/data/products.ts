import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Turmeric Brightening Serum',
    description: 'Our powerful turmeric serum harnesses the anti-inflammatory and brightening properties of curcuma longa to reveal radiant, even-toned skin. This potent formula helps reduce dark spots, calm irritation, and restore your natural glow with consistent use.',
    shortDescription: 'Brightening & Anti-inflammatory',
    price: 48,
    image: '/images/products/serum01.png',
    category: 'Serums',
    benefits: ['Brightens complexion', 'Reduces dark spots', 'Anti-inflammatory', 'Evens skin tone'],
    ingredients: ['Turmeric Extract (Curcuma Longa)', 'Hyaluronic Acid', 'Niacinamide', 'Vitamin E', 'Jojoba Oil'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: '24K Gold Crystal Soft Film Powder',
    description: 'Indulge in luxury with our 24K gold-infused crystal soft film powder mask. Rich in vitamins A, C, D, E, and fatty acids, this premium treatment provides deep hydration, moisture lock, and restores radiance while firming and revitalizing dull skin.',
    shortDescription: 'Luxury Gold Treatment',
    price: 78,
    image: '/images/products/7.png',
    category: 'Masks',
    benefits: ['Deep hydration & moisture lock', 'Restores radiance & softness', 'Firms, lifts & revitalizes', 'Rich in vitamins & fatty acids'],
    ingredients: ['24K Gold Particles', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Hyaluronic Acid', 'Collagen Peptides'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Astaxanthin Crystal Soft Film Powder',
    description: 'Experience the power of astaxanthin, one of nature\'s most potent antioxidants. This crystal soft film powder mask provides deep hydration, moisture lock, and helps restore radiance while firming and revitalizing dull, tired skin.',
    shortDescription: 'Antioxidant Powerhouse',
    price: 68,
    image: '/images/products/5.png',
    category: 'Masks',
    benefits: ['Powerful antioxidant protection', 'Deep hydration & moisture lock', 'Restores radiance & softness', 'Firms & revitalizes skin'],
    ingredients: ['Astaxanthin', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Rose Extract', 'Hyaluronic Acid'],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Chamomile Petals Moisturize & Repair Jelly Mask',
    description: 'Soothe and repair your skin with our gentle chamomile petals jelly mask. Rich in vitamins and fatty acids, this calming treatment provides deep hydration, moisture lock, and helps restore radiance while firming and revitalizing sensitive skin.',
    shortDescription: 'Soothing & Repairing',
    price: 58,
    image: '/images/products/6.png',
    category: 'Masks',
    benefits: ['Soothes sensitive skin', 'Deep hydration & repair', 'Restores radiance & softness', 'Anti-inflammatory properties'],
    ingredients: ['Chamomile Petals Extract', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Aloe Vera', 'Calendula Extract'],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Rapid Wrinkle Repair Retinol Oil',
    description: 'Transform your skin overnight with our advanced retinol oil formula. This powerful anti-aging treatment helps reduce fine lines, wrinkles, and improves skin texture while you sleep. Gentle yet effective for all skin types.',
    shortDescription: 'Anti-aging & Repair',
    price: 65,
    image: '/images/products/ChatGPT Image Jun 13, 2025, 10_01_12 PM.png',
    category: 'Serums',
    benefits: ['Reduces fine lines & wrinkles', 'Improves skin texture', 'Overnight repair', 'Boosts collagen production'],
    ingredients: ['Retinol', 'Vitamin E', 'Jojoba Oil', 'Squalane', 'Rosehip Oil'],
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Hydrating Rose Essence Toner',
    description: 'This alcohol-free toner hydrates and balances your skin after cleansing. Formulated with rose water and hyaluronic acid, it prepares your skin to better absorb serums and moisturizers that follow in your routine.',
    shortDescription: 'Balancing & Prepping',
    price: 34,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Toners',
    benefits: ['Restores pH balance', 'Adds hydration', 'Refines pores', 'Preps for skincare'],
    ingredients: ['Rose Water', 'Hyaluronic Acid', 'Witch Hazel', 'Glycerin', 'Cucumber Extract'],
    inStock: true,
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};