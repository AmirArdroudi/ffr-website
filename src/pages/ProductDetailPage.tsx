import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, ArrowLeft, Check, Sparkles, Award } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useStripeCheckout } from '../hooks/useStripeCheckout';
import { getStripeProductByProductId } from '../stripe-config';
import { useAuth } from '../context/AuthContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { createCheckoutSession, loading } = useStripeCheckout();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container">
          <h2 className="text-2xl font-medium mb-4">Product not found</h2>
          <p className="text-neutral-600 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="btn btn-primary"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = async () => {
    if (!user) {
      navigate('/login');
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
    <div className="pt-24 pb-20">
      <div className="container">
        <button 
          onClick={() => navigate('/shop')} 
          className="inline-flex items-center text-neutral-600 hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Products
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl overflow-hidden p-8">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center p-4 bg-white rounded-lg border border-neutral-200">
                <Award className="w-8 h-8 text-primary-500 mr-3" />
                <div>
                  <p className="font-medium text-sm text-neutral-800">Professional Grade</p>
                  <p className="text-xs text-neutral-500">680g Size</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg border border-neutral-200">
                <Sparkles className="w-8 h-8 text-primary-500 mr-3" />
                <div>
                  <p className="font-medium text-sm text-neutral-800">Premium Quality</p>
                  <p className="text-xs text-neutral-500">Clean Ingredients</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full mb-4">
                Professional Hydro Jelly Mask
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-display font-medium mb-4 text-primary-900 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              {product.shortDescription}
            </p>
            
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-primary-800">C${product.price}</span>
              <span className="text-lg text-neutral-500 ml-2">CAD</span>
            </div>
            
            {/* Key Benefits Preview */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-neutral-800 mb-3">Key Benefits</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-neutral-600">
                    <Check size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-neutral-700 font-medium">Quantity</span>
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)} 
                    className="px-4 py-2 text-neutral-500 hover:text-neutral-800 transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-l border-r border-neutral-300 min-w-[60px] text-center font-medium">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)} 
                    className="px-4 py-2 text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className={`btn btn-outline flex-grow flex items-center justify-center ${addedToCart ? 'bg-green-50 border-green-500 text-green-700' : ''}`}
              >
                {addedToCart ? (
                  <>
                    <Check size={18} className="mr-2" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} className="mr-2" />
                    Add to Cart
                  </>
                )}
              </button>
              
              <button 
                onClick={handleBuyNow}
                disabled={loading}
                className={`btn btn-primary flex-grow ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : 'Buy Now'}
              </button>
              
              <button className="p-3 border border-neutral-300 rounded-lg text-neutral-600 hover:text-primary-500 hover:border-primary-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            {/* Professional Notice */}
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
              <h4 className="font-medium text-primary-800 mb-2">Professional Size • 680g</h4>
              <p className="text-primary-700 text-sm leading-relaxed">
                This professional-grade mask provides multiple treatments and is perfect for clinic use. 
                Contact us for bulk pricing and partnership opportunities.
              </p>
            </div>
            
            <div className="border-t border-neutral-200 pt-8">
              {/* Tabs */}
              <div className="flex space-x-6 border-b border-neutral-200 mb-6">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 relative ${
                    activeTab === 'description' 
                      ? 'text-primary-800 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500' 
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('ingredients')}
                  className={`pb-3 relative ${
                    activeTab === 'ingredients' 
                      ? 'text-primary-800 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500' 
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  Ingredients
                </button>
                <button 
                  onClick={() => setActiveTab('benefits')}
                  className={`pb-3 relative ${
                    activeTab === 'benefits' 
                      ? 'text-primary-800 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500' 
                      : 'text-neutral-500 hover:text-neutral-800'
                  }`}
                >
                  All Benefits
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="text-neutral-600 leading-relaxed">
                {activeTab === 'description' && (
                  <div>
                    <p className="mb-4">{product.description}</p>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-700">
                        <strong>Professional Application:</strong> Mix with water to create a luxurious hydro jelly mask. 
                        Apply evenly, leave for 15-20 minutes, then peel off for instantly refreshed skin.
                      </p>
                    </div>
                  </div>
                )}
                
                {activeTab === 'ingredients' && (
                  <div>
                    <p className="mb-4 text-neutral-700">
                      Our carefully selected ingredients work synergistically to deliver exceptional results:
                    </p>
                    <ul className="space-y-2">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'benefits' && (
                  <div>
                    <p className="mb-4 text-neutral-700">
                      Experience comprehensive skin transformation with these proven benefits:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <Check size={16} className="text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;