import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { CART_ITEMS, PAYMENT_METHODS } from '../constants/products';

export function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('pilih');
  const [customerName, setCustomerName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const subtotal = CART_ITEMS.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const ppnAmount = Math.round(subtotal * 0.1);
  const total = subtotal + ppnAmount;

  const handleCheckout = () => {
    // If EITHER nama is empty OR payment method not selected
    // Go DIRECTLY to FAILED page (no error message shown)
    if (!customerName.trim() || paymentMethod === 'pilih') {
      navigate('/payment-process?payment=failed');
      return;
    }

    // Navigate to payment process with params
    navigate(`/payment-process?payment=${paymentMethod}&name=${encodeURIComponent(customerName)}`);
  };

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '120px',
      position: 'relative',
    }}>
      <Header cartCount={CART_ITEMS.length} />

      <div style={{
        maxWidth: '900px',
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
          animation: 'fadeInUp 0.6s ease-out',
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: `1px solid ${COLORS.darkTertiary}`,
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: COLORS.white,
                fontFamily: "'Playfair Display', serif",
                margin: 0,
              }}>
                Ringkasan Pesanan
              </h2>
              <span style={{ color: COLORS.mediumGray, fontSize: '0.9rem' }}>• {CART_ITEMS.length} Item</span>
            </div>

            {/* ITEMS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {CART_ITEMS.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '0.5rem',
                    backgroundColor: COLORS.darkBg,
                    overflow: 'hidden',
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
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: COLORS.white,
                      margin: '0 0 0.25rem 0',
                      fontFamily: "'Playfair Display', serif",
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      color: COLORS.mediumGray,
                      fontSize: '0.75rem',
                      margin: 0,
                    }}>
                      {item.specs}
                    </p>
                  </div>

                  <p style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: COLORS.tanAccent,
                    margin: 0,
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    Rp {item.price.toLocaleString('id-ID')}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ height: '1px', backgroundColor: COLORS.darkTertiary, margin: '1.5rem 0' }} />

            {/* METODE PEMBAYARAN */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: COLORS.white,
                  margin: 0,
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Metode Pembayaran
                </h3>

                <div style={{ position: 'relative', width: '120px' }}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'transparent',
                      border: `1px solid ${COLORS.darkTertiary}`,
                      color: COLORS.white,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <span>
                      {PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label}
                    </span>
                    <ChevronDown size={14} />
                  </button>

                  {showDropdown && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      width: '100%',
                      marginTop: '0.25rem',
                      backgroundColor: COLORS.darkSecondary,
                      border: `1px solid ${COLORS.darkTertiary}`,
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                      zIndex: 100,
                    }}>
                      {PAYMENT_METHODS.map(method => (
                        <button
                          key={method.id}
                          onClick={() => {
                            setPaymentMethod(method.id);
                            setShowDropdown(false);
                          }}
                          style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            backgroundColor: paymentMethod === method.id ? `${COLORS.tanAccent}20` : 'transparent',
                            border: 'none',
                            color: paymentMethod === method.id ? COLORS.tanAccent : COLORS.white,
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {method.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* NAMA INPUT */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}>
                <label style={{
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: COLORS.white,
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Nama
                </label>
                <span style={{ color: COLORS.mediumGray, fontSize: '0.75rem' }}>Wajib</span>
              </div>
              <input
                type="text"
                placeholder="Tulis nama"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: COLORS.darkBg,
                  border: `1px solid ${COLORS.darkTertiary}`,
                  color: COLORS.white,
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>

            <div style={{ height: '1px', backgroundColor: COLORS.darkTertiary, margin: '1.5rem 0' }} />

            {/* PRICING */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>Subtotal</span>
                <span style={{ color: COLORS.tanAccent, fontWeight: '600', fontSize: '0.9rem' }}>
                  Rp {subtotal.toLocaleString('id-ID')}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>PPN (10%)</span>
                <span style={{ color: COLORS.tanAccent, fontWeight: '600', fontSize: '0.9rem' }}>
                  Rp {ppnAmount.toLocaleString('id-ID')}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
              }}>
                <h3 style={{
                  color: COLORS.white,
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  margin: 0,
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Total
                </h3>
                <span style={{
                  color: COLORS.tanAccent,
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
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
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: COLORS.tanAccent,
            fontFamily: "'Playfair Display', serif",
            margin: 0,
          }}>
            Rp {total.toLocaleString('id-ID')}
          </p>

          <button
            onClick={handleCheckout}
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkBg,
              fontSize: '0.95rem',
              fontWeight: '600',
              fontFamily: "'Playfair Display', serif",
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
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
