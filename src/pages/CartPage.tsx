import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useStripeCheckout } from '../hooks/useStripeCheckout';
import { useAuth } from '../context/AuthContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const { createCheckoutSession, loading } = useStripeCheckout();
  
  const handleCheckout = async () => {
    if (!user) {
      window.location.href = '/login';
      return;
    }

    // For now, we'll create a simple checkout for the total amount
    // In a real implementation, you'd want to create a custom price or use line items
    try {
      // This is a simplified approach - you'd typically create a custom checkout session
      // that includes all cart items. For now, we'll redirect to a generic checkout.
      alert('Checkout functionality needs to be configured with your specific Stripe setup. Please use the "Buy Now" buttons on individual products for now.');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your request. Please try again.');
    }
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center py-12">
            <h1 className="text-3xl font-display font-medium mb-4 text-primary-900">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-32 pb-20">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-display font-medium text-primary-900">Your Cart</h1>
          <Link 
            to="/shop" 
            className="inline-flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        {/* Cart Items */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-neutral-100">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-neutral-500 mb-2">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>
          </div>
          
          {cartItems.map((item) => (
            <div key={item.product.id} className="p-6 border-b border-neutral-100">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-primary-800">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-neutral-500">{item.product.shortDescription}</p>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-400 hover:text-red-500 text-sm flex items-center mt-1 transition-colors"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2 text-center text-neutral-700">
                  ${item.product.price.toFixed(2)}
                </div>
                
                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center border border-neutral-200 rounded">
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-700"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-neutral-700">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-neutral-500 hover:text-neutral-700"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                
                <div className="col-span-2 text-right font-medium text-primary-800">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 text-right">
            <button 
              onClick={clearCart}
              className="text-neutral-500 hover:text-red-500 text-sm transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-neutral-100">
            <h2 className="text-xl font-medium text-primary-800">Order Summary</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-800">${getCartTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium text-neutral-800">$0.00</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span className="font-medium text-neutral-800">$0.00</span>
              </div>
              
              <div className="border-t border-neutral-100 pt-4 flex justify-between">
                <span className="font-medium text-lg text-neutral-800">Total</span>
                <span className="font-medium text-xl text-primary-800">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={loading}
              className={`btn btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            
            <p className="text-sm text-neutral-500 mt-4 text-center">
              For now, please use the "Buy Now" button on individual product pages for Stripe checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;