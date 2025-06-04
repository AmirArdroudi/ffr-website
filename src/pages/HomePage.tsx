import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3762760/pexels-photo-3762760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Beautiful woman with glowing skin" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-light mb-4 text-primary-900 leading-tight">
              Reveal Your Freshest Face
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8">
              Skincare rooted in purity. Powered by results.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section 
        className="py-20 bg-secondary-50 opacity-0" 
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4">Our Bestsellers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Discover our most loved products that have transformed thousands of skincare routines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
              View All Products
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brand Philosophy */}
      <section 
        className="py-20 opacity-0" 
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Natural skincare ingredients" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-display font-medium mb-6">Our Philosophy</h2>
              <p className="text-neutral-600 mb-6">
                At Fresh Face Roya, we believe skincare should be as pure as it is effective. Our formulations combine the best of science and nature to deliver results you can see and feel.
              </p>
              <p className="text-neutral-600 mb-6">
                Every product is thoughtfully crafted with clean, potent ingredients that work in harmony with your skin. We're committed to creating skincare that's free from harmful additives and gentle enough for all skin types.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Cruelty-Free</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Dermatologist Tested</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Clean Ingredients</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">Eco-Friendly Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section 
        className="py-20 bg-secondary-50 opacity-0" 
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-medium mb-6">Get In Touch</h2>
              <p className="text-neutral-600 mb-8">
                Have questions about our products or need skincare advice? We're here to help! Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Email</h4>
                    <a href="mailto:hello@freshfaceroya.com" className="text-neutral-600 hover:text-primary-500 transition-colors">
                      hello@freshfaceroya.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Phone</h4>
                    <a href="tel:+18001234567" className="text-neutral-600 hover:text-primary-500 transition-colors">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Office</h4>
                    <address className="not-italic text-neutral-600">
                      1234 Beauty Boulevard<br />
                      Los Angeles, CA 90001
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-neutral-800 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;