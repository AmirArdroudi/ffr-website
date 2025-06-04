import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, ArrowLeft, Check } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-xl overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-display font-medium mb-2 text-primary-900">{product.name}</h1>
            <p className="text-neutral-500 mb-4">{product.shortDescription}</p>
            <p className="text-2xl font-medium text-primary-800 mb-6">${product.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral-700 font-medium">Quantity</span>
                <div className="flex items-center border border-neutral-300 rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)} 
                    className="px-3 py-1 text-neutral-500 hover:text-neutral-800 transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-l border-r border-neutral-300 min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)} 
                    className="px-3 py-1 text-neutral-500 hover:text-neutral-800 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className={`btn btn-primary flex-grow flex items-center justify-center ${addedToCart ? 'bg-green-500 hover:bg-green-600' : ''}`}
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
              
              <button className="p-3 border border-neutral-300 rounded-lg text-neutral-600 hover:text-primary-500 hover:border-primary-500 transition-colors">
                <Heart size={20} />
              </button>
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
                  Benefits
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="text-neutral-600 leading-relaxed">
                {activeTab === 'description' && (
                  <p>{product.description}</p>
                )}
                
                {activeTab === 'ingredients' && (
                  <ul className="list-disc pl-5 space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                )}
                
                {activeTab === 'benefits' && (
                  <ul className="list-disc pl-5 space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
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