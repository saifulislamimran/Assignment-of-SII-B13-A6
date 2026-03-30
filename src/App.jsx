import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SocialProof from './components/SocialProof';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      <Navbar cartCount={cartItems.length} />
      
      <main>
        <Header />
        
        {/* Social Proof / Stats Section */}
        <SocialProof />
        
        {/* পরবর্তী ধাপ: Main Section (Products vs Cart Toggling) */}
      </main>
    </div>
  );
}

export default App;