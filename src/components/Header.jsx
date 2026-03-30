import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#F9FAFB] pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="text-center lg:text-left mb-12 lg:mb-0">
            
            {/* New Badge Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-8 transition-transform hover:scale-105 cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-[#4F39F6] animate-pulse"></span>
              <span className="text-[#4F39F6] text-sm font-semibold">New: AI-Powered Tools Available</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
              Supercharge Your <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                Digital Workflow
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-200 transition-all active:scale-95">
                Explore Products
              </button>
              
              {/* Watch Demo with Play.png icon */}
              <button className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-gray-200 text-gray-700 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-95">
                <img 
                  src="/assets/Play.png"
                  alt="Play" 
                  className="w-5 h-5 object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/0/375.png" }} 
                />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side: Banner Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Decorative Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-200 rounded-full blur-[100px] opacity-30"></div>
            
            <img
              src="/assets/banner.png"
              alt="Digital Workflow"
              className="relative w-full max-w-xl lg:max-w-none h-auto object-contain animate-fade-in"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x500/eef2ff/4f46e5?text=Banner+Image" }}
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;