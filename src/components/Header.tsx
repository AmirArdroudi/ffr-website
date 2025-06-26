import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCartSidebar = () => {
    setCartSidebarOpen(!cartSidebarOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/FFR-logo.jpeg" 
              alt="Fresh Face Roya" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-2xl font-display font-medium tracking-wide text-primary-900">
              Fresh Face Roya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({isActive}) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Home
            </NavLink>
            <NavLink to="/shop" className={({isActive}) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Shop
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Contact
            </NavLink>
            <NavLink to="/blog" className={({isActive}) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }>
              Blog
            </NavLink>
          </nav>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleCartSidebar}
              className="relative p-2 hover:bg-primary-50 rounded-lg transition-colors group"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5 text-neutral-700 group-hover:text-primary-600 transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-primary-500 rounded-full font-medium animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            <button 
              className="p-2 text-neutral-700 md:hidden hover:bg-primary-50 rounded-lg transition-colors" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-40 md:hidden" style={{animation: 'fadeIn 0.3s ease-out'}}>
            <nav className="flex flex-col p-6 space-y-6">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `text-xl ${isActive ? 'text-primary-500 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/shop" 
                className={({isActive}) => 
                  `text-xl ${isActive ? 'text-primary-500 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </NavLink>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `text-xl ${isActive ? 'text-primary-500 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `text-xl ${isActive ? 'text-primary-500 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/blog"
                className={({isActive}) =>
                  `text-xl ${isActive ? 'text-primary-500 font-medium' : 'text-neutral-800'}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={cartSidebarOpen} 
        onClose={() => setCartSidebarOpen(false)} 
      />
    </>
  );
};

export default Header;