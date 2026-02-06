import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { CART_ITEMS } from '../constants/products';

export function Receipt() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const paymentMethod = searchParams.get('payment') || 'cash';
  const paymentLabel = paymentMethod === 'cash' ? 'Cash' : 'Cashless';

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '3rem',
      position: 'relative',
    }}>
      <Header cartCount={CART_ITEMS.length} />

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          backgroundColor: COLORS.darkSecondary,
          borderRadius: '1.5rem',
          padding: '2.5rem',
          border: `1px solid ${COLORS.darkTertiary}`,
          animation: 'fadeInUp 0.6s ease-out',
        }}>
          {/* LOGO */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '2rem',
          }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" style={{margin: '0 auto'}}>
              {/* Cup */}
              <path d="M 20 30 L 25 75 Q 25 85 35 85 L 65 85 Q 75 85 75 75 L 80 30 Z" 
                    stroke={COLORS.tanAccent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Handle */}
              <path d="M 80 40 Q 95 45 95 60 Q 95 75 80 80" 
                    stroke={COLORS.tanAccent} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Steam */}
              <path d="M 35 20 Q 30 10 35 0" 
                    stroke={COLORS.tanAccent} strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 50 20 Q 45 10 50 0" 
                    stroke={COLORS.tanAccent} strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M 65 20 Q 60 10 65 0" 
                    stroke={COLORS.tanAccent} strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          {/* TITLE */}
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: COLORS.white,
            fontFamily: "'Playfair Display', serif",
            margin: '0 0 2rem 0',
            textAlign: 'center',
            letterSpacing: '0.05em',
          }}>
            MAU KOPI
          </h1>

          {/* DATE/TIME & ADDRESS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.darkTertiary}`,
          }}>
            <div>
              <p style={{
                color: COLORS.white,
                fontSize: '0.9rem',
                margin: '0 0 0.25rem 0',
                fontWeight: '500',
              }}>
                15-12-2025
              </p>
              <p style={{
                color: COLORS.white,
                fontSize: '0.9rem',
                margin: 0,
              }}>
                10:22 AM
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                color: COLORS.white,
                fontSize: '0.9rem',
                margin: 0,
                lineHeight: '1.5',
              }}>
                Jl. Tanimbar 22, Malang,<br/>Jawa Timur, Indonesia
              </p>
            </div>
          </div>

          {/* ITEMS */}
          <div style={{
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.darkTertiary}`,
          }}>
            {CART_ITEMS.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1rem',
                  marginBottom: '1rem',
                  borderBottom: index < CART_ITEMS.length - 1 ? `1px solid ${COLORS.darkTertiary}40` : 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  flex: 1,
                }}>
                  <span style={{
                    color: COLORS.mediumGray,
                    fontSize: '0.9rem',
                    minWidth: '1.5rem',
                  }}>
                    {item.quantity}
                  </span>
                  <span style={{
                    color: COLORS.white,
                    fontSize: '0.9rem',
                  }}>
                    {item.name}
                  </span>
                </div>
                <span style={{
                  color: COLORS.tanAccent,
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginLeft: '1rem',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                </span>
              </div>
            ))}
          </div>

          {/* PAYMENT METHOD - DYNAMIC BASED ON SELECTION */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.darkTertiary}`,
          }}>
            <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>
              Metode Pembayaran
            </span>
            <span style={{ color: COLORS.tanAccent, fontSize: '0.9rem', fontWeight: '600' }}>
              {paymentLabel}
            </span>
          </div>

          {/* PRICING */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.darkTertiary}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>Subtotal</span>
              <span style={{ color: COLORS.tanAccent, fontWeight: '600', fontSize: '0.9rem' }}>
                Rp 102.000
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>PPN (10%)</span>
              <span style={{ color: COLORS.tanAccent, fontWeight: '600', fontSize: '0.9rem' }}>
                Rp 10.200
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
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
                Rp 112.200
              </span>
            </div>
          </div>

          {/* THANK YOU */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              color: COLORS.white,
              fontSize: '0.95rem',
              margin: '0 0 1.5rem 0',
            }}>
              Thank you for your order!
            </p>

            <p style={{
              color: COLORS.mediumGray,
              fontSize: '0.9rem',
              margin: '0 0 1rem 0',
            }}>
              Your Order Number:
            </p>

            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: COLORS.white,
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.1em',
              margin: '0 0 1.5rem 0',
              animation: 'pulse 2s ease-in-out infinite',
            }}>
              73
            </div>

            <button
              onClick={() => navigate('/')}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '2rem',
                backgroundColor: COLORS.tanAccent,
                border: 'none',
                color: COLORS.darkBg,
                fontSize: '0.9rem',
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
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
