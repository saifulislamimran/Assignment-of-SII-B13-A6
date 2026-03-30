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
                {/* সংখ্যাগুলো এখন সম্পূর্ণ সাদা */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </h2>
                
                {/* রেটিং এর জন্য স্টার আইকন
                {stat.hasStar && (
                  <svg className="w-8 h-8 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )} */}
              </div>
              {/* লেবেলগুলো হালকা সাদা (indigo-100) যাতে দেখতে ভালো লাগে */}
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