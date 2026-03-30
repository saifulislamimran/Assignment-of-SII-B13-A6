import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '$0',
      period: '/Month',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month'
      ],
      buttonText: 'Get Started Free',
      isPopular: false
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '$29',
      period: '/Month',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync'
      ],
      buttonText: 'Start Pro Trial',
      isPopular: true
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '$99',
      period: '/Month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Advanced analytics',
        'Custom branding'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">Pricing</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-[32px] p-10 relative transition-all duration-300 flex flex-col h-full ${
                plan.isPopular 
                  ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl md:-translate-y-4 z-10 scale-105' 
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-md text-gray-900'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f0ba26] text-[#bb6548] px-5 py-1.5 rounded-full text-sm font-bold shadow-md uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-extrabold mb-2 ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <p className={`text-base mb-8 ${plan.isPopular ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.description}</p>
              
              <div className="flex items-end gap-1 mb-10">
                <span className={`text-5xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`font-medium pb-1 ${plan.isPopular ? 'text-indigo-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start font-medium text-sm md:text-base">
                    <svg className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.isPopular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Updated Buttons */}
              <button 
                className={`w-full mt-auto py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg ${
                  plan.isPopular 
                    ? 'bg-white text-[#4F39F6] hover:bg-gray-50' 
                    : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 shadow-indigo-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;