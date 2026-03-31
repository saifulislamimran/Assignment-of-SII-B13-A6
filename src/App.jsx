import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import ShopSection from './components/ShopSection';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      <Navbar cartCount={cartItems.length} />
      
      <main>
        <Header />

        <div id="testimonials">
          <SocialProof />
        </div>
        
        <div id="products">
          <ShopSection cartItems={cartItems} setCartItems={setCartItems} />
        </div>
        
        <div id="features">
          <HowItWorks />
        </div>
        
        <div id="pricing">
          <Pricing />
        </div>
        
        <div id="faq">
          <CtaSection />
        </div>
      </main>
      
      <Footer />
      
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;