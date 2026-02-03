import React from 'react';
import { COLORS } from '../config/constants';
import { getCoffeeImageSVG } from '../assets/svgs/coffeeImages';

const CoffeeCard = ({ item }) => {
  return (
    <div
      className="rounded-3xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group"
      style={{
        backgroundColor: COLORS.coffeeDark,
        border: `0px solid ${COLORS.coffeeLight}30`,
      }}
    >
      {/* Image Container */}
      <div
        className="h-64 overflow-hidden relative bg-gradient-to-br"
        style={{
          backgroundColor: COLORS.coffeeDark,
          backgroundImage: `linear-gradient(135deg, ${COLORS.coffeeLight}15 0%, ${COLORS.coffeeDark} 100%)`,
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: getCoffeeImageSVG(item.image),
          }}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="p-6"
        style={{ backgroundColor: COLORS.darkPg, width: '100%' }}>
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: COLORS.white, fontFamily: 'Playfair Display' }}
        >
          {item.name}
        </h3>

        <p
          className="text-sm mb-4"
          style={{ color: COLORS.white, lineHeight: '1.5' }}
        >
          {item.description}
        </p>

        <p
          className="text-xl font-bold"
          style={{ color: COLORS.tanAccent }}
        >
          {item.price}
        </p>
      </div>
    </div>
  );
};

export default CoffeeCard;