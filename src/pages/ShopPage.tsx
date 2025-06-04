import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const categories = [
  'All', 
  'Serums', 
  'Cleansers', 
  'Moisturizers', 
  'Masks', 
  'Sun Protection',
  'Toners'
];

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-display font-medium mb-2 text-primary-900">Shop Our Products</h1>
        <p className="text-neutral-600 mb-8 max-w-2xl">
          Each product is formulated with the highest quality ingredients to nourish and transform your skin.
        </p>
        
        {/* Category Filter */}
        <div className="mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 min-w-max pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;