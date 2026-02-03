import React from 'react';
import { COLORS, RECEIPT_ITEMS, RECEIPT_DATA } from './constants';

export function Receipt() {
  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '3rem',
      position: 'relative',
    }}>
      <style>{`
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .receipt-card {
          animation: scaleIn 0.6s ease-out;
        }
        .order-number {
          animation: pulse 2s ease-in-out infinite;
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
        <div style={{ fontSize: '3.5rem' }}>☕</div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '3rem 2rem',
        position: 'relative',
        zIndex: 10,
      }}>
        <div className="receipt-card" style={{
          backgroundColor: COLORS.darkSecondary,
          borderRadius: '1.5rem',
          padding: '2.5rem',
          border: `1px solid ${COLORS.tanAccent}30`,
        }}>
          {/* LOGO */}
          <div style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontSize: '4rem',
          }}>
            ☕
          </div>

          {/* TITLE */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: COLORS.white,
            fontFamily: 'playfair display',
            margin: '24px',
            textAlign: 'center',
            letterSpacing: '0.1em',
          }}>
            MAU KOPI
          </h1>

          {/* DATE/TIME & ADDRESS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8rem',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: `1px solid ${COLORS.tanAccent}40`,
          }}>
            <div>
              <p style={{
                color: COLORS.white,
                fontSize: '0.95rem',
              }}>
                {RECEIPT_DATA.dateTime.date}
              </p>
              <p style={{
                color: COLORS.white,
                fontSize: '0.95rem',
                margin: 0,
              }}>
                {RECEIPT_DATA.dateTime.time}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                color: COLORS.white,
                fontSize: '0.95rem',
                margin: 0,
                
              }}>
                {RECEIPT_DATA.address}
              </p>
            </div>
          </div>

          {/* ITEMS */}
          <div style={{
            marginBottom: '20px',
            
            borderBottom: `1px solid ${COLORS.tanAccent}40`,
          }}>
            {RECEIPT_ITEMS.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '12px',
                  marginBottom: '12px',
                  borderBottom: index < RECEIPT_ITEMS.length - 1 ? `1px solid ${COLORS.tanAccent}30` : 'none',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                }}>
                  <span style={{
                    color: COLORS.white,
                    fontSize: '1rem',
                    minWidth: '1rem',
                  }}>
                    {item.qty}
                  </span>
                  <span style={{
                    color: COLORS.white,
                    fontSize: '1rem',
                  }}>
                    {item.name}
                  </span>
                </div>
                <span style={{
                  color: COLORS.white ,
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginLeft: '1rem',
                }}>
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>
            ))}
          </div>

          {/* PAYMENT METHOD */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '24px',
            borderBottom: `1px solid ${COLORS.tanAccent}40`,
          }}>
            <span style={{
              color: COLORS.white,
              fontSize: '1rem',
            }}>
              Metode Pembayaran
            </span>
            <span style={{
              color: COLORS.white,
              fontSize: '1rem',
              fontWeight: '600',
            }}>
              {RECEIPT_DATA.paymentMethod}
            </span>
          </div>

          {/* PRICING BREAKDOWN */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: `1px solid ${COLORS.tanAccent}40`,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ color: COLORS.white, fontSize: '1rem', fontWeight: '700'}}>Subtotal</span>
              <span style={{ color: COLORS.tanAccent, fontSize: '1rem', fontWeight: '600' }}>
                Rp {RECEIPT_DATA.subtotal.toLocaleString('id-ID')}
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ color: COLORS.white, fontSize: '1rem', fontWeight: '700' }}>
                PPN ({RECEIPT_DATA.ppnPercent}%)
              </span>
              <span style={{ color: COLORS.tanAccent, fontSize: '1rem', fontWeight: '600' }}>
                Rp {RECEIPT_DATA.ppnAmount.toLocaleString('id-ID')}
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}>
              <h3 style={{
                color: COLORS.white,
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: 0,
                fontFamily: 'playfair display',
              }}>
                Total
              </h3>
              <span style={{
                color: COLORS.tanAccent,
                fontSize: '1.25rem',
                fontWeight: '700',
                fontFamily: 'playfair display',
              }}>
                Rp {RECEIPT_DATA.total.toLocaleString('id-ID')}
              </span>
            </div>
          </div>

          {/* THANK YOU & ORDER NUMBER */}
          <div style={{
            textAlign: 'center',
          }}>
            <p style={{
              color: COLORS.white,
              fontSize: '1rem',
              margin: '0 0 1.5rem 0',
            }}>
              Thank you for your order!
            </p>

            <p style={{
              color: COLORS.white,
              fontSize: '0.95rem',
              margin: '0 0 1rem 0',
            }}>
              Your Order Number:
            </p>

            <div className="order-number" style={{
              fontSize: '5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              fontFamily: 'playfair display',
              letterSpacing: '0.15em',
              margin: 0,
            }}>
              {RECEIPT_DATA.orderNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
