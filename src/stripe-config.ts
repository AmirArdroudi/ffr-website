export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: Record<string, StripeProduct> = {
  'astaxanthin-crystal-mask': {
    id: 'prod_SRGEyJYA8M1b86',
    priceId: 'price_1RWNi9PRm6MXXi3NQhbOK8lB',
    name: 'Astaxanthin Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Moisturizer, anti-wrinkle, Skin Lightening, Nutrients & Nourishment, Increased Skin Elasticity, Anti-Aging Properties, Stress Reduction and Relaxation, Deep Cleaning.',
    price: 35.00,
    mode: 'payment'
  },
  '24k-gold-crystal-mask': {
    id: 'prod_SRGB1ro3FtBIeJ',
    priceId: 'price_1RWNfTPRm6MXXi3Ni16KN0LO',
    name: '24K Gold Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Elevate your skincare routine with the luxury of gold. This rejuvenating hydro jelly mask helps reduce fine lines and wrinkles, while delivering powerful antioxidant protection. Enriched to boost skin elasticity and deeply nourish the complexion, it leaves your skin visibly firmer, smoother, and more radiant.',
    price: 35.00,
    mode: 'payment'
  },
  'lavender-petals-crystal-mask': {
    id: 'prod_SRG9Mmx0MmqPJb',
    priceId: 'price_1RWNdGPRm6MXXi3N4y7IWW4a',
    name: 'Lavender Petals Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Soothe and restore your skin with the calming power of lavender. This hydro jelly mask helps reduce pigmentation, lighten discoloration, and fade age spots and blemishes for a brighter, more even complexion. It provides instant relief for inflammation, swelling, and skin stress, leaving your skin balanced, calm, and radiant. Size 680 gm',
    price: 35.00,
    mode: 'payment'
  },
  'rose-petals-crystal-mask': {
    id: 'prod_SRG6RPNVvpDsb1',
    priceId: 'price_1RWNa8PRm6MXXi3NdRQs1LWG',
    name: 'Rose Petals Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Indulge your skin in the luxurious care of Rose Petals Crystal Soft Film Powder—a premium hydro jelly mask that transforms from a silky gel into a cushiony, rubber-like layer, sealing in moisture and driving essential nutrients deep into the skin.',
    price: 35.00,
    mode: 'payment'
  },
  'chamomile-petals-crystal-mask': {
    id: 'prod_SRFfIITtbkIYpN',
    priceId: 'price_1RWN9sPRm6MXXi3NDrwaEB4p',
    name: 'Chamomile Petals Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Calm, lift, and glow with this soothing hydro jelly mask. Infused with chamomile petals, it helps tighten the skin, reduce redness and irritation, and deliver deep hydration for a soft, luminous finish. Known for its powerful anti-aging properties, chamomile supports skin elasticity and shields against premature aging—making it the ideal treatment for stressed or tired skin.',
    price: 35.00,
    mode: 'payment'
  },
  'spirulina-crystal-mask': {
    id: 'prod_SRFdUzhg45oijc',
    priceId: 'price_1RWN7vPRm6MXXi3NYtMTwxPU',
    name: 'Spirulina Crystal Soft Film Powder - Jelly Face Mask',
    description: 'Purify and energize your skin with this nutrient-rich hydro jelly mask. Packed with iron, vitamins, protein, and chlorophyll, Spirulina helps reduce dark spots, combat acne, and detoxify the skin. The result? A clearer, healthier, and more youthful-looking complexion that glows from within.',
    price: 35.00,
    mode: 'payment'
  }
};

// Helper function to get Stripe product by regular product ID
export function getStripeProductByProductId(productId: string): StripeProduct | undefined {
  // Map product IDs to Stripe product keys
  const productMapping: Record<string, string> = {
    '1': 'astaxanthin-crystal-mask',
    '2': '24k-gold-crystal-mask',
    '3': 'lavender-petals-crystal-mask',
    '4': 'rose-petals-crystal-mask',
    '5': 'chamomile-petals-crystal-mask',
    '6': 'spirulina-crystal-mask'
  };
  
  const stripeKey = productMapping[productId];
  return stripeKey ? stripeProducts[stripeKey] : undefined;
}