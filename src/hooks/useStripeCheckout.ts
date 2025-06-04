import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface UseStripeCheckoutOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useStripeCheckout({ onSuccess, onError }: UseStripeCheckoutOptions = {}) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const createCheckoutSession = async (priceId: string, mode: 'payment' | 'subscription') => {
    if (!user) {
      throw new Error('User must be authenticated to checkout');
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.id}`,
        },
        body: JSON.stringify({
          price_id: priceId,
          success_url: `${window.location.origin}/checkout/success`,
          cancel_url: `${window.location.origin}/checkout/cancel`,
          mode,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create checkout session');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
        onSuccess?.();
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      onError?.(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    createCheckoutSession,
    loading,
  };
}