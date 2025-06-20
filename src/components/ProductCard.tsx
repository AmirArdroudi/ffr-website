import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Sparkles } from 'lucide-react';
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
    <div className="group relative transition-all duration-500 hover:shadow-xl rounded-2xl overflow-hidden bg-white border border-neutral-100 hover:border-primary-200">
      <Link to={`/shop/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Premium Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles size={12} className="mr-1" />
              Premium
            </div>
          </div>
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm text-primary-800 px-3 py-1 rounded-full text-sm font-bold">
              C${product.price}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-display font-medium text-primary-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-600 mb-4 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          
          {/* Key Benefits */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span 
                  key={index}
                  className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full"
                >
                  {benefit}
                </span>
              ))}
              {product.benefits.length > 2 && (
                <span className="text-xs text-neutral-500 px-2 py-1">
                  +{product.benefits.length - 2} more
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-800">C${product.price}</span>
              <span className="text-xs text-neutral-500">680g Professional Size</span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handleAddToCart}
                className="text-neutral-600 hover:text-primary-500 p-2 rounded-full hover:bg-primary-50 transition-all duration-300 transform hover:scale-110"
                aria-label="Add to cart"
              >
                <ShoppingBag size={18} />
              </button>
              <button 
                onClick={handleBuyNow}
                disabled={loading}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                  loading 
                    ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' 
                    : 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
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