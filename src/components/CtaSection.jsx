import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] relative overflow-hidden w-full">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

      {/* Content Container (Centered) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        
        {/* Subtitle */}
        <p className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.<br className="hidden md:block" />
          Start your free trial today.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
          <button className="w-full sm:w-auto bg-white text-[#4F39F6] hover:bg-gray-50 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1">
            Explore Products
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-indigo-200 text-white hover:bg-white/10 hover:border-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
            View Pricing
          </button>
        </div>

        {/* Small Note Text */}
        <p className="text-indigo-200 text-sm font-medium flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required.</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
        </p>

      </div>
    </section>
  );
};

export default CtaSection;