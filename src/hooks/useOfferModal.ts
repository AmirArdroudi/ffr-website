import { useState, useEffect } from 'react';

export const useOfferModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or dismissed the offer
    const hasClaimedOffer = localStorage.getItem('ffr_offer_claimed');
    const hasDismissedOffer = localStorage.getItem('ffr_offer_dismissed');
    
    // Show modal if user hasn't claimed or dismissed it
    if (!hasClaimedOffer && !hasDismissedOffer) {
      // Add a small delay for better UX
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    closeModal
  };
};