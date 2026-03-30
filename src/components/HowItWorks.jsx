import React from 'react';

const HowItWorks = () => {

  const steps = [
    {
      id: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: '/assets/user.png',
      bgColor: 'bg-indigo-50',
    },
    {
      id: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: '/assets/package.png',
      bgColor: 'bg-purple-50',
    },
    {
      id: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: '/assets/rocket.png',
      bgColor: 'bg-green-50',
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Get Started In <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">3 Steps</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative">
            
          <div className="hidden md:block absolute top-[6.25rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 -z-10"></div>

          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-3xl p-10 pt-16 shadow-sm border border-gray-100 relative flex flex-col items-center text-center group hover:shadow-lg hover:border-indigo-100 transition-all duration-300 h-full"
            >

              <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-extrabold flex items-center justify-center text-sm shadow-md z-20 transition-transform group-hover:scale-110">
                {step.id}
              </div>

              {/* Icon Container with Hover Animation */}
              <div className={`w-28 h-28 ${step.bgColor} rounded-full flex items-center justify-center mb-8 mt-2 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white`}>
                <img 
                  src={step.icon} 
                  alt={step.title} 
                  className="w-14 h-14 object-contain drop-shadow-sm" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/0/375.png" }}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-[#4F39F6] transition-colors duration-300 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;