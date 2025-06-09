import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';
import { useStripeCheckout } from '../hooks/useStripeCheckout';
import { getStripeProductByProductId } from '../stripe-config';
import { useAuth } from '../context/AuthContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { createCheckoutSession, loading } = useStripeCheckout();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleBuyNow = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    const stripeProduct = getStripeProductByProductId(product.id);
    if (!stripeProduct) {
      alert('This product is not available for purchase at the moment.');
      return;
    }

    try {
      await createCheckoutSession(stripeProduct.priceId, stripeProduct.mode);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again.');
    }
  };

  return (
    <div className="group relative transition-all duration-300 hover:shadow-md rounded-xl overflow-hidden bg-white">
      <Link to={`/shop/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-neutral-800 mb-1">{product.name}</h3>
          <p className="text-sm text-neutral-500 mb-2">{product.shortDescription}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium text-primary-800">${product.price.toFixed(2)}</span>
            <div className="flex space-x-2">
              <button 
                onClick={handleAddToCart}
                className="text-neutral-600 hover:text-primary-500 p-1.5 rounded-full hover:bg-primary-50 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingBag size={18} />
              </button>
              <button 
                onClick={handleBuyNow}
                disabled={loading}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  loading 
                    ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' 
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {loading ? 'Processing...' : 'Buy Now'}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;