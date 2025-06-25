import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = [
  'All', 
  'Masks'
];

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4 text-primary-900">
            Premium Hydro Jelly Masks
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your skincare routine with our collection of crystal soft film powder masks. Each formula is carefully crafted to deliver deep hydration, nourishment, and visible results for all skin types.
          </p>
          
          {/* Special Notice */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-xl p-6 max-w-4xl mx-auto mb-8">
            <h3 className="text-lg font-medium text-primary-800 mb-2">Professional Quality • C$35.00 Each</h3>
            <p className="text-primary-700">
              All masks are 680g professional size - perfect for multiple treatments or clinic use. 
              <span className="font-medium"> Contact us for bulk pricing and partnership opportunities.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a 
                href="tel:+16479280641" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <Phone size={16} className="mr-2" />
                +1 (647) 928-0641
              </a>
              <a 
                href="mailto:Freshfaceroya@gmail.com" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                <Mail size={16} className="mr-2" />
                Freshfaceroya@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center space-x-2 min-w-max pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`animate-slide-up animate-delay-${(index % 3 + 1) * 100}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No products found in this category.</p>
          </div>
        )}
        
        {/* Product Information */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Professional Grade</h3>
              <p className="text-neutral-600">680g professional size perfect for multiple treatments and clinic use.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Clean Ingredients</h3>
              <p className="text-neutral-600">Formulated with pure, effective ingredients for all skin types.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary-800 mb-2">Instant Results</h3>
              <p className="text-neutral-600">See immediate hydration and glow after just one treatment.</p>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-neutral-200">
          <h3 className="text-2xl font-display font-medium mb-4 text-primary-900">
            Questions About Our Products?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Our skincare experts are here to help you choose the perfect mask for your skin type and concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+16479280641" className="btn btn-primary">
              Call Us: +1 (647) 928-0641
            </a>
            <a href="mailto:Freshfaceroya@gmail.com" className="btn btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;