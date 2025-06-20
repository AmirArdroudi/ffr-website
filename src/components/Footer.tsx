import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary-50 to-primary-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/FFR-logo.jpeg" 
                alt="Fresh Face Roya" 
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-display font-medium text-primary-900">Fresh Face Roya</h3>
            </div>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Skincare rooted in purity. Powered by results.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/fresh.face.roya" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="mailto:Freshfaceroya@gmail.com" className="text-neutral-500 hover:text-primary-500 transition-colors transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium mb-4 text-neutral-700">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-neutral-600 hover:text-primary-500 transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="text-neutral-600 hover:text-primary-500 transition-colors">Serums</Link></li>
              <li><Link to="/shop" className="text-neutral-600 hover:text-primary-500 transition-colors">Moisturizers</Link></li>
              <li><Link to="/shop" className="text-neutral-600 hover:text-primary-500 transition-colors">Cleansers</Link></li>
              <li><Link to="/shop" className="text-neutral-600 hover:text-primary-500 transition-colors">Masks</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium mb-4 text-neutral-700">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-neutral-600 hover:text-primary-500 transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium mb-4 text-neutral-700">Contact Us</h4>
            <address className="not-italic text-neutral-600">
              <p className="mb-4">Ontario, Canada</p>
              <p className="mb-2">
                <a href="tel:+16479280641" className="hover:text-primary-500 transition-colors">+1 (647) 928-0641</a>
              </p>
              <p className="mb-4">
                <a href="mailto:Freshfaceroya@gmail.com" className="hover:text-primary-500 transition-colors">Freshfaceroya@gmail.com</a>
              </p>
              <div className="bg-primary-50 p-3 rounded-lg border-l-4 border-primary-500">
                <p className="text-sm text-primary-800 font-medium">
                  For clinic orders and partnerships, please contact us directly. Special pricing available for bulk orders.
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200">
          <p className="text-sm text-center text-neutral-500">
            © {new Date().getFullYear()} Fresh Face Roya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;