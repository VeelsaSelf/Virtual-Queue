import React from 'react';
import { MENU_CATEGORIES, COLORS } from '../config/constants';

const MenuTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center gap-3 mb-16 flex-wrap">
      {MENU_CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: activeTab === category ? COLORS.white : 'transparent',
            color: activeTab === category ? COLORS.darkSecondary : COLORS.white,
            border: `1.5px solid ${activeTab === category ? COLORS.white : COLORS.tanAccent}`,
            cursor: 'pointer',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
