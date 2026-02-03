import React, { useState } from 'react';
import { COLORS } from '../config/constants';
import MenuTabs from './MenuTabs';
import MenuGrid from './MenuGrid';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Coffee');

  return (
    <section
      className="px-8 py-20"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-6xl font-bold mb-4"
            style={{
              color: COLORS.white,
              fontFamily: 'Playfair Display',
            }}
          >
            What's on the Menu
          </h2>
          <p
            className="text-lg"
            style={{ color: COLORS.gray400 }}
          >
            Good things are worth lingering over.
          </p>
        </div>

        {/* Menu Tabs */}
        <MenuTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Coffee Grid */}
        <MenuGrid activeTab={activeTab} />
      </div>
    </section>
  );
};

export default MenuSection;
