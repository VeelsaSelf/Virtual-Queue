import React, { useState } from 'react';
import { Bell, ShoppingCart } from 'lucide-react';
import { COLORS } from '../config/constants';

const Header = ({ cartCount = 0 }) => {
  return (
    <header
      className="fixed top-0 w-full z-50 backdrop-blur-sm"
      style={{
        backgroundColor: COLORS.darkBg,
        borderBottom: `2px solid ${COLORS.darkMain}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">☕</span>
          <span
            className="text-2xl font-bold"
            style={{ color: COLORS.white, fontFamily: 'Playfair Display' }}
          >
            MAU KOPI
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Bell Icon */}
          <button
            className="p-2 rounded-lg hover:opacity-80 transition-opacity"
            style={{ backgroundColor: `${COLORS.tanAccent}20`, color: COLORS.tanAccent }}
          >
            <Bell size={24} />
          </button>

          {/* Cart Icon */}
          <button
            className="p-2 rounded-lg hover:opacity-80 transition-opacity relative"
            style={{ backgroundColor: `${COLORS.tanAccent}20`, color: COLORS.tanAccent }}
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span
                className="absolute top-0 right-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                style={{
                  backgroundColor: COLORS.tanAccent,
                  color: COLORS.darkSecondary,
                }}
              >
                {cartCount}
              </span>
            )}
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              backgroundColor: COLORS.tanAccent,
              color: COLORS.darkSecondary,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}>
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;