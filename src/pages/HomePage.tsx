import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Leaf, Award } from 'lucide-react';
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
      {/* Enhanced Hero Section */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3762760/pexels-photo-3762760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Beautiful woman with glowing skin" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center mb-4 animate-slide-up animate-delay-100">
              <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
              <span className="text-primary-600 font-medium tracking-wide uppercase text-sm">Premium Skincare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-light mb-6 text-primary-900 leading-tight animate-slide-up animate-delay-200">
              Reveal Your
              <span className="block text-primary-600 font-medium">Freshest Face</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed animate-slide-up animate-delay-300">
              Skincare rooted in purity. Powered by results. Experience the transformation with our clean, effective formulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-400">
              <Link to="/shop" className="btn btn-primary text-lg px-8 py-4 group">
                Shop Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn btn-outline text-lg px-8 py-4">
                Our Story
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-32 h-32 bg-secondary-200/20 rounded-full blur-2xl animate-pulse animate-delay-200"></div>
      </section>
      
      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">Dermatologist Tested</h3>
              <p className="text-sm text-neutral-500">Clinically proven safe</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <Leaf className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">Clean Ingredients</h3>
              <p className="text-sm text-neutral-500">Pure & natural</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">Cruelty-Free</h3>
              <p className="text-sm text-neutral-500">Never tested on animals</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">Proven Results</h3>
              <p className="text-sm text-neutral-500">Visible transformation</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Featured Products */}
      <section 
        className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50 opacity-0" 
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-primary-500 mr-4"></div>
              <Sparkles className="w-6 h-6 text-primary-500" />
              <div className="w-12 h-0.5 bg-primary-500 ml-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-primary-900">Our Bestsellers</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most loved products that have transformed thousands of skincare routines with their powerful, clean formulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`animate-slide-up animate-delay-${(index + 1) * 100}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/shop" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg group">
              View All Products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Enhanced Brand Philosophy */}
      <section 
        className="py-24 opacity-0" 
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-2xl blur-xl opacity-30"></div>
              <img 
                src="https://xw50l2p6bl.ufs.sh/f/72IFtnTcXNiyV7GG58vFOoE84ZxjhTiH32UJk1CR6NW5fmYG" 
                alt="Natural skincare ingredients" 
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-primary-500 mr-4"></div>
                <span className="text-primary-600 font-medium tracking-wide uppercase text-sm">Our Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-primary-900 leading-tight">
                Clean Beauty That Actually Works
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At Fresh Face Roya, we believe skincare should be as pure as it is effective. Our formulations combine the best of science and nature to deliver results you can see and feel.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Every product is thoughtfully crafted with clean, potent ingredients that work in harmony with your skin. We're committed to creating skincare that's free from harmful additives and gentle enough for all skin types.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Cruelty-Free</h4>
                    <p className="text-sm text-neutral-600">Never tested on animals</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Dermatologist Tested</h4>
                    <p className="text-sm text-neutral-600">Clinically proven safe</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Clean Ingredients</h4>
                    <p className="text-sm text-neutral-600">Pure & natural formulations</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Eco-Friendly</h4>
                    <p className="text-sm text-neutral-600">Sustainable packaging</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn btn-outline">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Contact Section */}
      <section 
        className="py-24 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0" 
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-0.5 bg-primary-500 mr-4"></div>
                <span className="text-primary-600 font-medium tracking-wide uppercase text-sm">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-primary-900 leading-tight">
                Let's Start Your Skincare Journey
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Have questions about our products or need skincare advice? We're here to help! Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 text-primary-500 group-hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Email</h4>
                    <a href="mailto:Freshfaceroya@gmail.com" className="text-neutral-600 hover:text-primary-500 transition-colors">
                      Freshfaceroya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 text-primary-500 group-hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Phone</h4>
                    <a href="tel:+16479280641" className="text-neutral-600 hover:text-primary-500 transition-colors">
                      +1 (647) 928-0641
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="mt-1 mr-4 text-primary-500 group-hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800 mb-1">Location</h4>
                    <address className="not-italic text-neutral-600">
                      Ontario, Canada
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Professional Services Notice */}
              <div className="mt-8 p-6 bg-primary-100 rounded-xl border-l-4 border-primary-500">
                <h4 className="font-medium text-primary-800 mb-2">Professional Services</h4>
                <p className="text-primary-700 leading-relaxed">
                  For clinic orders and partnership opportunities, please contact us directly. We offer special pricing and customized solutions for bulk orders and professional establishments.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-neutral-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/fresh.face.roya" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;