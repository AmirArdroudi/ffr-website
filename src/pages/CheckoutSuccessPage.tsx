import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CheckoutSuccessPage: React.FC = () => {
  useEffect(() => {
    // Clear any checkout-related state if needed
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h1 className="text-3xl font-display font-medium mb-4 text-primary-900">
            Thank You for Your Purchase!
          </h1>
          <p className="text-neutral-600">
            Your order has been successfully processed. You will receive a confirmation email shortly.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/shop" className="btn btn-primary block">
            Continue Shopping
          </Link>
          <Link to="/account" className="btn btn-outline block">
            View Order History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;