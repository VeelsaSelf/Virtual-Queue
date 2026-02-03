import React from 'react';
import { COLORS } from '../config/constants';
import { COFFEE_ITEMS } from '../config/menuData';
import CoffeeCard from './CoffeeCard';

const MenuGrid = ({ activeTab }) => {
  const filteredItems = activeTab === 'Coffee'
    ? COFFEE_ITEMS
    : COFFEE_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="grid grid-cols-4 gap-6">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <CoffeeCard key={item.id} item={item} />
        ))
      ) : (
        <div
          className="col-span-4 text-center py-12"
          style={{ color: COLORS.gray400 }}
        >
          <p className="text-lg">No items in this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default MenuGrid;
