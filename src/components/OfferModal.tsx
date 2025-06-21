import React, { useState, useEffect } from 'react';
import { X, Sparkles, Gift } from 'lucide-react';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OfferModal: React.FC<OfferModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'offer' | 'email'>('offer');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClaimOffer = () => {
    setStep('email');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call to save email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Store the offer claim in localStorage
      localStorage.setItem('ffr_offer_claimed', 'true');
      localStorage.setItem('ffr_offer_email', email);
      
      // Close modal after success message
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  const handleNotInterested = () => {
    localStorage.setItem('ffr_offer_dismissed', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-3xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-neutral-600 hover:text-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <X size={20} />
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary-200/30 rounded-full blur-2xl translate-x-20 translate-y-20" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-300/20 rounded-full blur-xl" />

        {/* Content */}
        <div className="relative p-8 md:p-12 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/FFR-logo.jpeg" 
                alt="Fresh Face Roya" 
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <span className="text-2xl font-display font-medium text-primary-900">Fresh Face Roya</span>
            </div>
          </div>

          {step === 'offer' && !isSubmitted && (
            <>
              {/* Offer Content */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Gift className="w-8 h-8 text-primary-600 mr-2" />
                  <span className="text-primary-600 font-medium tracking-wide uppercase text-sm">Special Offer</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary-900 leading-tight">
                  YOU'VE GOT
                  <span className="block text-primary-600">20% OFF</span>
                </h1>
                
                <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
                  Welcome to Fresh Face Roya! Enjoy 20% off your first order of our premium hydro jelly masks.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleClaimOffer}
                  className="w-full max-w-sm mx-auto block bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Claim 20% Off
                  </span>
                </button>
                
                <button
                  onClick={handleNotInterested}
                  className="w-full max-w-sm mx-auto block bg-neutral-100 hover:bg-neutral-200 text-neutral-600 font-medium py-3 px-8 rounded-full transition-all duration-300"
                >
                  I'm Not Interested
                </button>
              </div>
            </>
          )}

          {step === 'email' && !isSubmitted && (
            <>
              {/* Email Collection */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary-900">
                  YOU'VE GOT
                  <span className="block text-primary-600">20% OFF</span>
                </h2>
                
                <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
                  Sign up with your email to claim 20% off sitewide!
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-6 py-4 rounded-full border-2 border-neutral-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-200 outline-none transition-all duration-300 text-center text-lg"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className={`w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    (isSubmitting || !email) ? 'opacity-70 cursor-not-allowed transform-none' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </span>
                  ) : (
                    'Continue'
                  )}
                </button>
              </form>
            </>
          )}

          {isSubmitted && (
            <>
              {/* Success Message */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="text-3xl font-display font-bold mb-4 text-primary-900">
                  Welcome to the Family!
                </h2>
                
                <p className="text-lg text-neutral-600 mb-6">
                  Your 20% discount is ready! Check your email for the exclusive code.
                </p>
                
                <div className="bg-primary-100 border-2 border-primary-300 rounded-2xl p-6 max-w-sm mx-auto">
                  <p className="text-primary-800 font-medium text-lg">
                    Use code: <span className="font-bold text-primary-900">WELCOME20</span>
                  </p>
                  <p className="text-primary-600 text-sm mt-2">
                    Valid for 30 days on your first order
                  </p>
                </div>
              </div>
            </>
          )}

          {/* Fine Print */}
          <div className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 leading-relaxed">
              By providing your email, you agree to receive marketing communications from Fresh Face Roya. 
              You can unsubscribe at any time. Offer valid for new customers only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;