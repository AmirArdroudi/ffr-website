export interface StripeProduct {
  id: string;
  priceId: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: Record<string, StripeProduct> = {
  'chamomile-mask': {
    id: 'prod_SRFfIITtbkIYpN',
    priceId: 'price_1RWN9sPRm6MXXi3NDrwaEB4p',
    description: 'Calm, lift, and glow with this soothing hydro jelly mask. Infused with chamomile petals, it helps tighten the skin, reduce redness and irritation, and deliver deep hydration for a soft, luminous finish. Known for its powerful anti-aging properties, chamomile supports skin elasticity and shields against premature aging—making it the ideal treatment for stressed or tired skin.',
    mode: 'payment'
  },
  'spirulina-mask': {
    id: 'prod_SRFdUzhg45oijc',
    priceId: 'price_1RWN7vPRm6MXXi3NYtMTwxPU',
    description: 'Purify and energize your skin with this nutrient-rich hydro jelly mask. Packed with iron, vitamins, protein, and chlorophyll, Spirulina helps reduce dark spots, combat acne, and detoxify the skin. The result? A clearer, healthier, and more youthful-looking complexion that glows from within.',
    mode: 'payment'
  }
};