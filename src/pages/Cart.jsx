import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { CART_ITEMS } from '../constants/products';

export function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState(CART_ITEMS);

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
      <Header cartCount={items.length} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          backgroundColor: COLORS.darkSecondary,
          borderRadius: '1.5rem',
          padding: '2rem',
          border: `1px solid ${COLORS.darkTertiary}`,
          marginBottom: '3rem',
          animation: 'fadeInUp 0.6s ease-out',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.darkTertiary}`,
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: COLORS.white,
              fontFamily: "'Inter', serif",
              margin: 0,
            }}>
              Pesanan
            </h2>
            <span style={{ color: COLORS.mediumGray }}>• {items.length} Item</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {items.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
              }} className="item-card">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  backgroundColor: COLORS.darkBg,
                  flexShrink: 0,
                }}>
                  <img 
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: COLORS.white,
                    margin: '0 0 0.5rem 0',
                    fontFamily: "'Inter', serif",
                  }}>
                    {item.name}
                  </h3>
                  <p style={{
                    color: COLORS.mediumGray,
                    fontSize: '0.8rem',
                    margin: '0 0 0.5rem 0',
                    lineHeight: '1.5',
                  }}>
                    {item.specs}
                  </p>
                  {item.notes && (
                    <p style={{
                      color: COLORS.mediumGray,
                      fontSize: '0.75rem',
                      margin: 0,
                    
                    }}>
                      {item.notes}
                    </p>
                  )}
                </div>

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
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.darkGray,
                      border: 'none',
                      color: COLORS.white,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Minus size={14} />
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
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.tanAccent,
                      border: 'none',
                      color: COLORS.darkBg,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div style={{ textAlign: 'right', minWidth: '100px' }}>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: COLORS.tanAccent,
                    margin: 0,
                    fontFamily: "'Inter', serif",
                  }}>
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'transparent',
                    border: `1px solid ${COLORS.darkTertiary}`,
                    color: COLORS.mediumGray,
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = COLORS.tanAccent;
                    e.target.style.borderColor = COLORS.tanAccent;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = COLORS.mediumGray;
                    e.target.style.borderColor = COLORS.darkTertiary;
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
        borderTop: `1px solid ${COLORS.darkTertiary}`,
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
          <p style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: COLORS.tanAccent,
            fontFamily: "'Inter', serif",
            margin: 0,
          }}>
            Rp {calculateTotal().toLocaleString('id-ID')}
          </p>

          <button
            onClick={() => navigate('/checkout')}
            style={{
              padding: '1rem 3rem',
              borderRadius: '2rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkBg,
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: "'Inter', serif",
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '0.9';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
