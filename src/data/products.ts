import { Product } from '../types/product';
import { stripeProducts } from '../stripe-config';

// Convert Stripe products to our Product interface
function createProductFromStripe(stripeKey: string, stripeProduct: any, productId: string): Product {
  const productImages: Record<string, string> = {
    'astaxanthin-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyntBJUCXw0MifhGQa7NprT3oCJUvlbHdBs854',
    '24k-gold-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyOEG9kD2Y7HoaTMWZ8L23unARhpkSigfF5mIs',
    'lavender-petals-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyYmA58aHqIi5V8p3gfhX2cZPSKv1y9WQOEmxo',
    'rose-petals-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyYmA58aHqIi5V8p3gfhX2cZPSKv1y9WQOEmxo',
    'chamomile-petals-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyYmA58aHqIi5V8p3gfhX2cZPSKv1y9WQOEmxo',
    'spirulina-crystal-mask': 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyYmA58aHqIi5V8p3gfhX2cZPSKv1y9WQOEmxo'
  };

  const productBenefits: Record<string, string[]> = {
    'astaxanthin-crystal-mask': ['Moisturizer & anti-wrinkle', 'Skin lightening', 'Nutrients & nourishment', 'Increased skin elasticity', 'Anti-aging properties', 'Stress reduction & relaxation', 'Deep cleaning'],
    '24k-gold-crystal-mask': ['Reduces fine lines & wrinkles', 'Powerful antioxidant protection', 'Boosts skin elasticity', 'Deep nourishment', 'Firmer, smoother skin', 'Enhanced radiance'],
    'lavender-petals-crystal-mask': ['Reduces pigmentation', 'Lightens discoloration', 'Fades age spots & blemishes', 'Relieves inflammation & swelling', 'Reduces skin stress', 'Calming & balancing'],
    'rose-petals-crystal-mask': ['Seals in moisture', 'Deep nutrient delivery', 'Luxurious hydration', 'Cushiony comfort', 'Skin nourishment', 'Enhanced softness'],
    'chamomile-petals-crystal-mask': ['Tightens skin', 'Reduces redness & irritation', 'Deep hydration', 'Soft, luminous finish', 'Anti-aging properties', 'Supports skin elasticity', 'Shields against premature aging'],
    'spirulina-crystal-mask': ['Reduces dark spots', 'Combats acne', 'Detoxifies skin', 'Clearer complexion', 'Healthier-looking skin', 'Youthful glow', 'Nutrient-rich formula']
  };

  const productIngredients: Record<string, string[]> = {
    'astaxanthin-crystal-mask': ['Astaxanthin', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Rose Extract', 'Hyaluronic Acid'],
    '24k-gold-crystal-mask': ['24K Gold Particles', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Hyaluronic Acid', 'Collagen Peptides'],
    'lavender-petals-crystal-mask': ['Lavender Petals Extract', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Aloe Vera', 'Calendula Extract'],
    'rose-petals-crystal-mask': ['Rose Petals Extract', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Rose Hip Oil', 'Hyaluronic Acid'],
    'chamomile-petals-crystal-mask': ['Chamomile Petals Extract', 'Vitamin A, C, D, E Complex', 'Fatty Acids', 'Aloe Vera', 'Calendula Extract'],
    'spirulina-crystal-mask': ['Spirulina Extract', 'Iron', 'Vitamins Complex', 'Protein', 'Chlorophyll', 'Hyaluronic Acid']
  };

  const shortDescriptions: Record<string, string> = {
    'astaxanthin-crystal-mask': 'Anti-aging & Deep Cleaning',
    '24k-gold-crystal-mask': 'Luxury Gold Treatment',
    'lavender-petals-crystal-mask': 'Calming & Brightening',
    'rose-petals-crystal-mask': 'Luxurious Hydration',
    'chamomile-petals-crystal-mask': 'Soothing & Anti-aging',
    'spirulina-crystal-mask': 'Purifying & Energizing'
  };

  return {
    id: productId,
    name: stripeProduct.name,
    description: stripeProduct.description,
    shortDescription: shortDescriptions[stripeKey] || 'Premium Hydro Jelly Mask',
    price: stripeProduct.price,
    image: productImages[stripeKey] || 'https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyYmA58aHqIi5V8p3gfhX2cZPSKv1y9WQOEmxo',
    category: 'Masks',
    benefits: productBenefits[stripeKey] || ['Deep hydration', 'Skin nourishment', 'Professional quality'],
    ingredients: productIngredients[stripeKey] || ['Natural extracts', 'Vitamin complex', 'Hyaluronic acid'],
    inStock: true,
    featured: true
  };
}

// Generate products from Stripe configuration
export const products: Product[] = Object.entries(stripeProducts).map(([stripeKey, stripeProduct], index) => {
  return createProductFromStripe(stripeKey, stripeProduct, (index + 1).toString());
});

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get Stripe product info by our product ID
export const getStripeInfoByProductId = (productId: string) => {
  const productIndex = parseInt(productId) - 1;
  const stripeKeys = Object.keys(stripeProducts);
  const stripeKey = stripeKeys[productIndex];
  return stripeKey ? { key: stripeKey, product: stripeProducts[stripeKey] } : null;
};