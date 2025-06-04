import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    description: 'Our revolutionary serum combines vitamin C and hyaluronic acid to deliver intense hydration while brightening your complexion. The lightweight formula absorbs quickly, leaving your skin radiant and refreshed without any greasy residue.',
    shortDescription: 'Brightening & Hydrating',
    price: 48,
    image: 'https://images.pexels.com/photos/5217927/pexels-photo-5217927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Serums',
    benefits: ['Brightens complexion', 'Deeply hydrates', 'Reduces fine lines', 'Evens skin tone'],
    ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Niacinamide', 'Aloe Vera', 'Green Tea Extract'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Gentle Cleansing Foam',
    description: 'This gentle yet effective cleansing foam removes impurities and makeup without stripping your skin\'s natural moisture. Formulated with chamomile and aloe vera, it soothes and calms while providing a deep clean for all skin types.',
    shortDescription: 'Soothing & Purifying',
    price: 32,
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Cleansers',
    benefits: ['Removes impurities', 'Soothes skin', 'Balances pH levels', 'Non-drying formula'],
    ingredients: ['Chamomile Extract', 'Aloe Vera', 'Glycerin', 'Rice Water', 'Cucumber Extract'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Renewing Night Cream',
    description: 'Work while you sleep with our luxurious night cream. Packed with peptides and botanical extracts, this rich formula helps restore and regenerate your skin overnight. Wake up to a firmer, more radiant complexion every morning.',
    shortDescription: 'Restoring & Firming',
    price: 56,
    image: 'https://images.pexels.com/photos/3786169/pexels-photo-3786169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Moisturizers',
    benefits: ['Regenerates overnight', 'Improves elasticity', 'Reduces wrinkles', 'Deep nourishment'],
    ingredients: ['Peptide Complex', 'Shea Butter', 'Rosehip Oil', 'Ceramides', 'Jojoba Oil'],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Radiance Face Mask',
    description: 'This luxurious mask delivers an instant glow with a blend of fruit enzymes and clay that gently exfoliates and draws out impurities. Use weekly to reveal brighter, smoother skin and a more even complexion.',
    shortDescription: 'Exfoliating & Illuminating',
    price: 38,
    image: 'https://images.pexels.com/photos/3762885/pexels-photo-3762885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Masks',
    benefits: ['Removes dead skin cells', 'Brightens dull skin', 'Tightens pores', 'Improves texture'],
    ingredients: ['Kaolin Clay', 'Papaya Enzymes', 'Vitamin E', 'Honey', 'Rose Extract'],
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Daily Defense SPF 40',
    description: 'Protect your skin from harmful UV rays with our lightweight, non-greasy SPF. This daily essential provides broad-spectrum protection while hydrating and nourishing your skin with antioxidants to prevent premature aging.',
    shortDescription: 'Protecting & Nourishing',
    price: 42,
    image: 'https://images.pexels.com/photos/3737605/pexels-photo-3737605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    category: 'Sun Protection',
    benefits: ['Broad-spectrum protection', 'Prevents dark spots', 'Anti-aging formula', 'Non-greasy finish'],
    ingredients: ['Zinc Oxide', 'Vitamin E', 'Green Tea Extract', 'Hyaluronic Acid', 'Aloe Vera'],
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Hydrating Essence Toner',
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