import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo with Horizontal Linear Gradient Text */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-extrabold text-[26px] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              DigiTools
            </span>
          </div>

          {/* Middle: Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 font-medium hover:text-[#4F39F6] transition-colors">Products</a>
            <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">Testimonials</a>
            <a href="#" className="text-gray-500 font-medium hover:text-gray-900 transition-colors">FAQ</a>
          </div>

          {/* Right: Actions, Cart & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Cart Icon with Dynamic Badge */}
            <div className="relative cursor-pointer flex items-center justify-center p-2 hover:bg-gray-50 rounded-full transition-colors group">
              <img 
                src="/assets/products/shopping-cart.png"
                alt="Cart" 
                className="w-[15px] h-[15px] opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/1170/1170678.png" }}
              />
              {/* Show badge ONLY if cartCount is greater than 0 */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center gap-5">
              <a href="#" className="text-gray-600 font-medium hover:text-[#4F39F6] transition-colors">Login</a>
              <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white px-7 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-indigo-200">
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-500 hover:text-[#4F39F6] focus:outline-none p-2 rounded-md transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 shadow-xl absolute w-full left-0 z-50">
          <div className="flex flex-col space-y-1">
            <a href="#" className="block px-3 py-3 rounded-md text-base font-semibold text-[#4F39F6] bg-indigo-50">Products</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Features</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Pricing</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">Testimonials</a>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50">FAQ</a>
          </div>
          
          <div className="pt-5 mt-3 border-t border-gray-100 flex flex-col gap-3 sm:hidden">
            <button className="w-full bg-white border border-gray-200 text-gray-900 px-5 py-3 rounded-full font-bold">
              Login
            </button>
            <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 rounded-full font-bold shadow-lg shadow-indigo-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;