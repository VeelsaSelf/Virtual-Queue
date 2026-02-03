import React from 'react';
import { Bell, ShoppingCart } from 'lucide-react';
import { COLORS } from './constants';

export function Header({ cartCount = 3 }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      backgroundColor: COLORS.darkBg,
      borderBottom: `1px solid ${COLORS.tanAccent}40`,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '2rem' }}>☕</span>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: COLORS.white,
            fontFamily: 'Playfair Display',
          }}>
            MAU KOPI
          </span>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: `${COLORS.tanAccent}20`,
            border: 'none',
            color: COLORS.tanAccent,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}>
            <Bell size={24} />
          </button>
          <button style={{
            padding: '0.5rem',
            borderRadius: '0.5rem',
            backgroundColor: `${COLORS.tanAccent}20`,
            border: 'none',
            color: COLORS.tanAccent,
            cursor: 'pointer',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}>
            <ShoppingCart size={24} />
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
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
