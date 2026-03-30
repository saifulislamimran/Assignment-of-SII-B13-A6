import React from 'react';

const SocialProof = () => {
  const stats = [
    { id: 1, value: '50K+', label: 'Active Users' },
    { id: 2, value: '200+', label: 'Premium Tools' },
    { id: 3, value: '4.9', label: 'Rating', hasStar: true },
  ];

  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center text-center ${
                index !== stats.length - 1 ? 'md:border-r md:border-white/20' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </h2>

              </div>
                    <p className="mt-2 text-indigo-100 font-medium text-lg uppercase tracking-wide">
                    {stat.label}
                    </p>
                </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SocialProof;