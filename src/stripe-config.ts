export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: Record<string, StripeProduct> = {
  'luminous-glow-serum': {
    id: 'prod_luminous_glow',
    priceId: 'price_1RWNi9PRm6MXXi3NQhbOK8lB', // Replace with your actual Stripe price ID
    name: 'Luminous Glow Serum',
    description: 'Our revolutionary serum combines vitamin C and hyaluronic acid to deliver intense hydration while brightening your complexion.',
    price: 48.00,
    mode: 'payment'
  },
  'gentle-cleansing-foam': {
    id: 'prod_gentle_cleansing',
    priceId: 'price_1RWNfTPRm6MXXi3Ni16KN0LO', // Replace with your actual Stripe price ID
    name: 'Gentle Cleansing Foam',
    description: 'This gentle yet effective cleansing foam removes impurities and makeup without stripping your skin\'s natural moisture.',
    price: 32.00,
    mode: 'payment'
  },
  'renewing-night-cream': {
    id: 'prod_renewing_night',
    priceId: 'price_1RWNdGPRm6MXXi3N4y7IWW4a', // Replace with your actual Stripe price ID
    name: 'Renewing Night Cream',
    description: 'Work while you sleep with our luxurious night cream. Packed with peptides and botanical extracts.',
    price: 56.00,
    mode: 'payment'
  },
  'radiance-face-mask': {
    id: 'prod_radiance_mask',
    priceId: 'price_1234567893', // Replace with your actual Stripe price ID
    name: 'Radiance Face Mask',
    description: 'This luxurious mask delivers an instant glow with a blend of fruit enzymes and clay.',
    price: 38.00,
    mode: 'payment'
  },
  'daily-defense-spf': {
    id: 'prod_daily_spf',
    priceId: 'price_1234567894', // Replace with your actual Stripe price ID
    name: 'Daily Defense SPF 40',
    description: 'Protect your skin from harmful UV rays with our lightweight, non-greasy SPF.',
    price: 42.00,
    mode: 'payment'
  },
  'hydrating-essence-toner': {
    id: 'prod_hydrating_toner',
    priceId: 'price_1234567895', // Replace with your actual Stripe price ID
    name: 'Hydrating Essence Toner',
    description: 'This alcohol-free toner hydrates and balances your skin after cleansing.',
    price: 34.00,
    mode: 'payment'
  }
};

// Helper function to get Stripe product by regular product ID
export function getStripeProductByProductId(productId: string): StripeProduct | undefined {
  // Map product IDs to Stripe product keys
  const productMapping: Record<string, string> = {
    '1': 'luminous-glow-serum',
    '2': 'gentle-cleansing-foam',
    '3': 'renewing-night-cream',
    '4': 'radiance-face-mask',
    '5': 'daily-defense-spf',
    '6': 'hydrating-essence-toner'
  };
  
  const stripeKey = productMapping[productId];
  return stripeKey ? stripeProducts[stripeKey] : undefined;
}