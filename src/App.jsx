import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header'; // ব্যানার কম্পোনেন্ট ইম্পোর্ট করা হলো

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900">
      
      {/* Top Navigation */}
      <Navbar cartCount={cartItems.length} />
      
      <main>
        {/* Header / Banner Section */}
        <Header />
        
        {/* পরবর্তী সেকশনগুলো আমরা এখানে বসাবো */}
      </main>

    </div>
  );
}

export default App;