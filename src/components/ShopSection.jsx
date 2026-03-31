import React, { useState } from 'react';
import { toast } from 'react-toastify'; 

const ShopSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState('products');

  const products = [
    { id: 1, name: 'AI Writing Pro', price: 29, period: '/Mo', description: 'Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.', features: ['Unlimited AI generations', '50+ writing templates', 'Grammar checker'], badge: 'Best Seller', badgeColor: 'bg-purple-100 text-purple-700', image: '/assets/products/resume-writing.png' },
    { id: 2, name: 'Design Templates Pack', price: 49, period: '/One-Time', description: '2000+ premium templates for social media, presentations, and marketing materials.', features: ['2000+ templates', 'Monthly updates', 'Commercial license'], badge: 'Popular', badgeColor: 'bg-blue-100 text-blue-700', image: '/assets/products/design-tool.png' },
    { id: 3, name: 'Premium Stock Assets', price: 19, period: '/Mo', description: 'Access millions of royalty-free photos, videos, and graphics for your projects.', features: ['10M+ assets', 'Commercial use', 'No attribution'], badge: 'New', badgeColor: 'bg-green-100 text-green-700', image: 'fontawesome' },
    { id: 4, name: 'Automation Toolkit', price: 79, period: '/Mo', description: 'Automate repetitive tasks and streamline your workflow with powerful tools.', features: ['50+ automations', 'API access', 'Custom workflows'], badge: 'New', badgeColor: 'bg-green-100 text-green-700', image: '/assets/products/operation.png' },
    { id: 5, name: 'Resume Builder Pro', price: 15, period: '/One-Time', description: 'Create professional resumes and cover letters that land interviews.', features: ['100+ templates', 'ATS optimization', 'Export to PDF'], badge: 'Best Seller', badgeColor: 'bg-purple-100 text-purple-700', image: '/assets/products/portfolio.png' },
    { id: 6, name: 'Social Media Content Kit', price: 39, period: '/Mo', description: 'Complete toolkit for creating engaging social media content across all platforms.', features: ['5000+ assets', 'Scheduler included', 'Analytics dashboard'], badge: 'Popular', badgeColor: 'bg-blue-100 text-blue-700', image: '/assets/products/social-media.png' }
  ];

  // Add to Cart ফাংশন (Toast সহ)
  const handleAddToCart = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id);
    if (isExist) {
      toast.warning("This product is already in your cart! 🛒");
    } else {
      setCartItems([...cartItems, product]);
      toast.success(`${product.name} added to cart! 🎉`);
    }
  };

  const handleRemove = (id) => {
    const remainingCart = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingCart);
    toast.error("Item removed from cart! 🗑️");
  };

  const handleCheckout = () => {
    if(cartItems.length > 0) {
      toast.success("Order Placed Successfully! 🚀");
      setCartItems([]);
    } else {
      toast.error("Your cart is empty!");
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex shadow-sm">
            <button onClick={() => setActiveTab('products')} className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'products' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>
              Products
            </button>
            <button onClick={() => setActiveTab('cart')} className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === 'cart' ? 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}>
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const isAdded = cartItems.some(item => item.id === product.id);

              return (
                <div key={product.id} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative flex flex-col h-full group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {product.image === 'fontawesome' ? (
                        <svg className="w-7 h-7 text-[#4F39F6]" fill="currentColor" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                      ) : (
                        <img src={product.image} alt={product.name} className="w-7 h-7 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/0/375.png" }} />
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.badgeColor}`}>{product.badge}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">{product.description}</p>
                  
                  <div className="mb-6 flex items-end gap-1">
                    <span className="text-3xl font-extrabold text-[#4F39F6]">${product.price}</span>
                    <span className="text-gray-500 font-medium mb-1">{product.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 font-medium">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdded}
                    className={`w-full mt-auto py-3.5 rounded-xl font-bold transition-all duration-300 shadow-md ${
                      isAdded 
                        ? 'bg-green-500 text-white cursor-default shadow-green-200' 
                        : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#3B28C6] hover:to-[#7A0EC4] text-white shadow-indigo-200 hover:shadow-lg hover:opacity-95'
                    }`}
                  >
                    {isAdded ? '✅ Added to Cart!' : 'Buy Now'}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 pb-6 border-b border-gray-100">Your Cart</h2>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">Your cart is currently empty.</p>
                <button onClick={() => setActiveTab('products')} className="mt-6 text-[#4F39F6] font-bold hover:underline">
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row justify-between items-center sm:items-start p-4 bg-gray-50 rounded-2xl border border-gray-100 gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center p-3 flex-shrink-0">
                        {item.image === 'fontawesome' ? (
                          <svg className="w-8 h-8 text-[#4F39F6]" fill="currentColor" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>
                        ) : (
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" onError={(e) => { e.target.onerror = null; e.target.src = "https://cdn-icons-png.flaticon.com/512/0/375.png" }}/>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                        <p className="text-gray-500 text-sm mt-1">{item.description.substring(0, 60)}...</p>
                      </div>
                    </div>
                    
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4">
                      <span className="text-2xl font-extrabold text-gray-900">${item.price}</span>
                      <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700 font-bold text-sm bg-red-50 px-4 py-2 rounded-lg transition-colors">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}

                <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div>
                    <span className="text-gray-500 font-medium text-lg">Total Amount</span>
                    <h3 className="text-4xl font-extrabold text-[#4F39F6]">${totalPrice}</h3>
                  </div>
                  <button onClick={handleCheckout} className="w-full sm:w-auto bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default ShopSection;