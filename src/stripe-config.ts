export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: Record<string, StripeProduct> = {
  'turmeric-brightening-serum': {
    id: 'prod_turmeric_serum',
    priceId: 'price_1RWNi9PRm6MXXi3NQhbOK8lB', // Replace with your actual Stripe price ID
    name: 'Turmeric Brightening Serum',
    description: 'Our powerful turmeric serum harnesses the anti-inflammatory and brightening properties of curcuma longa.',
    price: 48.00,
    mode: 'payment'
  },
  '24k-gold-crystal-mask': {
    id: 'prod_24k_gold_mask',
    priceId: 'price_1RWNfTPRm6MXXi3Ni16KN0LO', // Replace with your actual Stripe price ID
    name: '24K Gold Crystal Soft Film Powder',
    description: 'Indulge in luxury with our 24K gold-infused crystal soft film powder mask.',
    price: 78.00,
    mode: 'payment'
  },
  'astaxanthin-crystal-mask': {
    id: 'prod_astaxanthin_mask',
    priceId: 'price_1RWNdGPRm6MXXi3N4y7IWW4a', // Replace with your actual Stripe price ID
    name: 'Astaxanthin Crystal Soft Film Powder',
    description: 'Experience the power of astaxanthin, one of nature\'s most potent antioxidants.',
    price: 68.00,
    mode: 'payment'
  },
  'chamomile-petals-mask': {
    id: 'prod_chamomile_mask',
    priceId: 'price_1234567893', // Replace with your actual Stripe price ID
    name: 'Chamomile Petals Moisturize & Repair Jelly Mask',
    description: 'Soothe and repair your skin with our gentle chamomile petals jelly mask.',
    price: 58.00,
    mode: 'payment'
  },
  'retinol-repair-oil': {
    id: 'prod_retinol_oil',
    priceId: 'price_1234567894', // Replace with your actual Stripe price ID
    name: 'Rapid Wrinkle Repair Retinol Oil',
    description: 'Transform your skin overnight with our advanced retinol oil formula.',
    price: 65.00,
    mode: 'payment'
  },
  'hydrating-rose-toner': {
    id: 'prod_rose_toner',
    priceId: 'price_1234567895', // Replace with your actual Stripe price ID
    name: 'Hydrating Rose Essence Toner',
    description: 'This alcohol-free toner hydrates and balances your skin after cleansing.',
    price: 34.00,
    mode: 'payment'
  }
};

// Helper function to get Stripe product by regular product ID
export function getStripeProductByProductId(productId: string): StripeProduct | undefined {
  // Map product IDs to Stripe product keys
  const productMapping: Record<string, string> = {
    '1': 'turmeric-brightening-serum',
    '2': '24k-gold-crystal-mask',
    '3': 'astaxanthin-crystal-mask',
    '4': 'chamomile-petals-mask',
    '5': 'retinol-repair-oil',
    '6': 'hydrating-rose-toner'
  };
  
  const stripeKey = productMapping[productId];
  return stripeKey ? stripeProducts[stripeKey] : undefined;
}