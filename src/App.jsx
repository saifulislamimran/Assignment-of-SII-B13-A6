import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import ShopSection from './components/ShopSection';
import HowItWorks from './components/HowItWorks'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      <Navbar cartCount={cartItems.length} />
      
      <main>
        <Header />
        <SocialProof />
        <ShopSection cartItems={cartItems} setCartItems={setCartItems} />
        
        <HowItWorks />
      </main>
      
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;