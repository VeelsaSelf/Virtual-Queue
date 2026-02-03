import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './assets/styles/global.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header cartCount={cartCount} />
      <main>
        <HeroSection />
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
