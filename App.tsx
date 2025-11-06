// App.tsx - Is code mein koi ghalti nahi hai.
// Ghalti neeche di gayi import lines aur aapki files ke naam mein hai.

import React, { useState } from 'react';

// === YAHAN CHECK KAREIN ===
// Kya aapke folder mein file ka naam 'Navbar.tsx' hai ya 'navbar.tsx'?
import Navbar from './components/Navbar'; 
// Kya file ka naam 'Hero.tsx' hai ya 'hero.tsx'?
import Hero from './components/Hero'; 
// Isi tarah baqi sab files ke naam check karein...
import WhyChooseUs from './components/WhyChooseUs';
import MenuPreview from './components/MenuPreview';
import Deals from './components/Deals';
import ChefsPicks from './components/ChefsPicks';
import FullMenu from './components/FullMenu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Catering from './components/Catering';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import OrderModal from './components/OrderModal';

// Baqi code bilkul theek hai
const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleOrderNow = (itemName: string) => {
    setSelectedItem(itemName);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero onOrderNow={handleOrderNow} />
        <WhyChooseUs />
        <MenuPreview onOrderNow={handleOrderNow} />
        <Deals onOrderNow={handleOrderNow} />
        <ChefsPicks onOrderNow={handleOrderNow} />
        <FullMenu onOrderNow={handleOrderNow} />
        <Gallery />
        <Testimonials />
        <Catering />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <FloatingCallButton />
      {selectedItem && (
        <OrderModal itemName={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;