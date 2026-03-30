import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  // গ্লোবাল স্টেট হিসেবে cartCount রাখছি, পরে এখানে Cart Array রাখবো
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      
      {/* Navbar Section */}
      <Navbar cartCount={cartItems.length} />
      
      {/* Main Content Area */}
      <main>
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold text-gray-500">
            Empty
          </h1>
        </div>
      </main>

    </div>
  );
}

export default App;