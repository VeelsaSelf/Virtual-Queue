import React, { useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { COLORS, CART_ITEMS } from './constants';
import { getProductImage } from './images';

export function Cart() {
  const [items, setItems] = useState(CART_ITEMS);

  // Animation styles
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    .item-card {
      animation: fadeInUp 0.6s ease-out both;
    }
    .item-card:nth-child(1) { animation-delay: 0.1s; }
    .item-card:nth-child(2) { animation-delay: 0.2s; }
    .item-card:nth-child(3) { animation-delay: 0.3s; }
  `;

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeItem(id);
    } else {
      setItems(items.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '120px',
      position: 'relative',
    }}>
      <style>{animationStyles}</style>
      {/* Coffee beans decorations - LEFT */}
      <div style={{
        position: 'fixed',
        left: '2rem',
        top: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8rem',
        opacity: 0.8,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <div style={{ fontSize: '4rem' }}>☕</div>
        <div style={{ fontSize: '3.5rem' }}>☕</div>
        <div style={{ fontSize: '4rem' }}>☕</div>
        <div style={{ fontSize: '3.5rem' }}>☕</div>
      </div>

      {/* Coffee beans decorations - RIGHT */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8rem',
        opacity: 0.8,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <div style={{ fontSize: '4rem' }}>☕</div>
        <div style={{ fontSize: '3.5rem' }}>☕</div>
        <div style={{ fontSize: '4rem' }}>☕</div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* CART ITEMS CONTAINER */}
        <div style={{
          backgroundColor: COLORS.darkSecondary,
          borderRadius: '1.5rem',
          padding: '2rem',
          marginBottom: '3rem',
          border: `1px solid ${COLORS.tanAccent}30`,
          animation: 'fadeInUp 0.6s ease-out',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.tanAccent}30`,
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: COLORS.white,
              fontFamily: 'Playfair Display',
              margin: 0,
            }}>
              Pesanan
            </h2>
            <span style={{
              color: COLORS.gray400,
              fontSize: '1rem',
            }}>
              • {items.length} Item
            </span>
          </div>

          {/* ITEMS LIST */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {items.map(item => (
              <div key={item.id} className="item-card" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }}>
                {/* PRODUCT IMAGE */}
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  backgroundColor: COLORS.darkBg,
                  flexShrink: 0,
                }}>
                  <div dangerouslySetInnerHTML={{ __html: getProductImage(item.image) }} />
                </div>

                {/* PRODUCT INFO */}
                <div style={{
                  flex: 1,
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: COLORS.white,
                    margin: '0 0 0.5rem 0',
                    fontFamily: 'Playfair Display',
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    color: COLORS.gray400,
                    fontSize: '0.875rem',
                    margin: 0,
                    lineHeight: '1.5',
                  }}>
                    {item.specs}
                  </p>
                </div>

                {/* QUANTITY SELECTOR */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: COLORS.darkBg,
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: '#666666',
                      border: 'none',
                      color: COLORS.white,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#777777';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#666666';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <Minus size={16} />
                  </button>
                  <span style={{
                    width: '1.5rem',
                    textAlign: 'center',
                    color: COLORS.white,
                    fontWeight: '600',
                  }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.tanAccent,
                      border: 'none',
                      color: COLORS.darkSecondary,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#c9a876';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = COLORS.tanAccent;
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* PRICE */}
                <div style={{
                  textAlign: 'right',
                  minWidth: '100px',
                }}>
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: COLORS.tanAccent,
                    margin: 0,
                  }}>
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: `1px solid ${COLORS.tanAccent}40`,
                    color: COLORS.tanAccent,
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = COLORS.tanAccent;
                    e.target.style.backgroundColor = `${COLORS.tanAccent}15`;
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = `${COLORS.tanAccent}40`;
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FIXED FOOTER */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.darkBg,
        borderTop: `1px solid ${COLORS.tanAccent}30`,
        padding: '1.5rem 2rem',
        zIndex: 40,
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* LEFT - TOTAL PRICE */}
          <div>
            <p style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: COLORS.tanAccent,
              fontFamily: 'Playfair Display',
              margin: 0,
            }}>
              Rp {calculateTotal().toLocaleString('id-ID')}
            </p>
          </div>

          {/* RIGHT - LANJUTKAN BUTTON */}
          <button
            style={{
              padding: '1rem 3rem',
              borderRadius: '2rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkSecondary,
              fontSize: '1.125rem',
              fontWeight: '600',
              fontFamily: 'Playfair Display',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
