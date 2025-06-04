import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-50 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-display font-medium mb-4 text-primary-900">Fresh Face Roya</h3>
            <p className="text-neutral-600 mb-6">
              Skincare rooted in purity. Powered by results.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@freshfaceroya.com" className="text-neutral-500 hover:text-primary-500 transition-colors">
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
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/" className="text-neutral-600 hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-medium mb-4 text-neutral-700">Contact Us</h4>
            <address className="not-italic text-neutral-600">
              <p className="mb-2">1234 Beauty Boulevard</p>
              <p className="mb-2">Los Angeles, CA 90001</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">
                <a href="tel:+18001234567" className="hover:text-primary-500 transition-colors">+1 (800) 123-4567</a>
              </p>
              <p>
                <a href="mailto:hello@freshfaceroya.com" className="hover:text-primary-500 transition-colors">hello@freshfaceroya.com</a>
              </p>
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