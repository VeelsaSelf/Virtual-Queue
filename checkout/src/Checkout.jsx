import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS, CHECKOUT_ITEMS, PAYMENT_METHODS, SUBTOTAL, PPN_PERCENT, PPN_AMOUNT, TOTAL } from './constants';
import { getProductImage } from './images';

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('pilih');
  const [customerName, setCustomerName] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '120px',
      position: 'relative',
    }}>
      <style>{`
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
        .checkout-container {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>

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
        maxWidth: '900px',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div className="checkout-container" style={{
          backgroundColor: COLORS.darkSecondary,
          borderRadius: '1.5rem',
          padding: '2rem',
          border: `1px solid ${COLORS.tanAccent}30`,
        }}>
          {/* RINGKASAN PESANAN */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingBottom: '1.5rem',
              borderBottom: `1px solid ${COLORS.tanAccent}30`,
              marginBottom: '1.5rem',
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: COLORS.white,
                fontFamily: 'Playfair Display',
                margin: 0,
              }}>
                Ringkasan Pesanan
              </h2>
              <span style={{
                color: COLORS.gray400,
                fontSize: '1rem',
              }}>
                • 3 Item
              </span>
            </div>

            {/* ITEMS LIST */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {CHECKOUT_ITEMS.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}>
                  {/* PRODUCT IMAGE */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '0.5rem',
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
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: COLORS.white,
                      margin: '0 0 0.25rem 0',
                      fontFamily: 'Playfair Display',
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      color: COLORS.gray400,
                      fontSize: '0.8rem',
                      margin: 0,
                      lineHeight: '1.4',
                    }}>
                      {item.specs}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div style={{
                    textAlign: 'right',
                    minWidth: '100px',
                  }}>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: COLORS.tanAccent,
                      margin: 0,
                    }}>
                      Rp {item.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* DIVIDER */}
            <div style={{
              height: '1px',
              backgroundColor: `${COLORS.tanAccent}30`,
              margin: '1.5rem 0',
            }} />

            {/* METODE PEMBAYARAN */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: COLORS.white,
                  margin: 0,
                  fontFamily: 'Playfair Display',
                }}>
                  Metode Pembayaran
                </h3>
                
                {/* DROPDOWN */}
                <div style={{ position: 'relative', width: '120px' }}>
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      border: `1px solid ${COLORS.tanAccent}40`,
                      color: COLORS.tanAccent,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = COLORS.tanAccent;
                      e.target.style.backgroundColor = `${COLORS.tanAccent}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = `${COLORS.tanAccent}40`;
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <span>
                      {PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label}
                    </span>
                    <ChevronDown size={16} />
                  </button>

                  {/* DROPDOWN MENU */}
                  {showDropdown && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      width: '100%',
                      marginTop: '0.25rem',
                      backgroundColor: COLORS.darkSecondary,
                      border: `1px solid ${COLORS.tanAccent}40`,
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
                            color: paymentMethod === method.id ? COLORS.tanAccent : COLORS.tanAccent,
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '0.9rem',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = `${COLORS.tanAccent}20`;
                            e.target.style.color = COLORS.tanAccent;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = paymentMethod === method.id ? `${COLORS.tanAccent}20` : 'transparent';
                            e.target.style.color = paymentMethod === method.id ? COLORS.tanAccent : COLORS.tanAccent;
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
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: COLORS.white,
                  fontFamily: 'Playfair Display',
                }}>
                  Nama
                </label>
                <span style={{
                  color: COLORS.white,
                  fontSize: '0.8rem',
                }}>
                  Wajib
                </span>
              </div>
              <input
                type="text"
                placeholder="Tulis nama"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '2rem',
                  backgroundColor: COLORS.darkSecondary,
                  border: `1px solid ${COLORS.tanAccent}40`,
                  color: COLORS.white,
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = COLORS.tanAccent;
                  e.target.style.backgroundColor = `${COLORS.tanAccent}05`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = `${COLORS.tanAccent}40`;
                  e.target.style.backgroundColor = COLORS.darkSecondary;
                }}
              />
            </div>

            {/* DIVIDER */}
            <div style={{
              height: '1px',
              backgroundColor: `${COLORS.tanAccent}30`,
              margin: '1.5rem 0',
            }} />

            {/* PRICING */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ color: COLORS.white, fontSize: '0.95rem' }}>Subtotal</span>
                <span style={{ color: COLORS.tanAccent, fontSize: '0.95rem', fontWeight: '600' }}>
                  Rp {SUBTOTAL.toLocaleString('id-ID')}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ color: COLORS.white, fontSize: '0.95rem' }}>PPN ({PPN_PERCENT}%)</span>
                <span style={{ color: COLORS.tanAccent, fontSize: '0.95rem', fontWeight: '600' }}>
                  Rp {PPN_AMOUNT.toLocaleString('id-ID')}
                </span>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: `${COLORS.tanAccent}30`,
                margin: '0.5rem 0',
              }} />

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <h3 style={{
                  color: COLORS.white,
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  margin: 0,
                  fontFamily: 'Playfair Display',
                }}>
                  Total
                </h3>
                <span style={{
                  color: COLORS.tanAccent,
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  fontFamily: 'Playfair Display',
                }}>
                  Rp {TOTAL.toLocaleString('id-ID')}
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
        borderTop: `1px solid ${COLORS.tanAccent}30`,
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
          {/* LEFT - TOTAL PRICE */}
          <div>
            <p style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: COLORS.tanAccent,
              fontFamily: 'Playfair Display',
              margin: 0,
            }}>
              Rp {TOTAL.toLocaleString('id-ID')}
            </p>
          </div>

          {/* RIGHT - CHECKOUT BUTTON */}
          <button
            style={{
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkSecondary,
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: 'Playfair Display',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
