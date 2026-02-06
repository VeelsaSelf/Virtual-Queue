import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Clock, X, Check } from 'lucide-react';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { CART_ITEMS } from '../constants/products';

export function PaymentStatus() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [timeLeft, setTimeLeft] = useState(120); // 2 MINUTES = 120 seconds
  const [currentStatus, setCurrentStatus] = useState('waiting'); // waiting, processing, failed, success
  
  const paymentMethod = searchParams.get('payment') || 'cash';
  const customerName = searchParams.get('name') || '';

  // Determine payment label
  const getPaymentLabel = () => {
    if (paymentMethod === 'cash') return 'Cash';
    if (paymentMethod === 'cashless') return 'Cashless';
    if (paymentMethod === 'failed') return 'Not Selected'; // When validation failed
    return 'Cash'; // Default fallback
  };

  const paymentLabel = getPaymentLabel();

  // Check if validation failed or nama is empty - go to failed immediately
  useEffect(() => {
    // If payment param is 'failed' → show FAILED page directly
    if (paymentMethod === 'failed') {
      setCurrentStatus('failed');
      return;
    }

    // If nama is empty → also show FAILED page
    if (!customerName || customerName.trim() === '') {
      setCurrentStatus('failed');
      return;
    }

    // Otherwise start with waiting status
    setCurrentStatus('waiting');
  }, [customerName, paymentMethod]);

  // Timer logic
  useEffect(() => {
    if (currentStatus !== 'waiting') return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Timer finished - auto redirect to processing then success
          setCurrentStatus('processing');
          clearInterval(timer);
          
          // After 2 seconds of processing, go to success
          setTimeout(() => {
            setCurrentStatus('success');
          }, 2000);
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStatus]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `00:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const subtotal = 102000;
  const ppn = 10200;
  const total = 112200;

  const commonItems = (
    <>
      {/* ITEMS */}
      <div style={{
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: `1px solid ${COLORS.darkTertiary}`,
      }}>
        {CART_ITEMS.map(item => (
          <div 
            key={item.id} 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.9rem',
              marginBottom: '0.75rem',
            }}
          >
            <span style={{ color: COLORS.white }}>{item.quantity} {item.name}</span>
            <span style={{ color: COLORS.white }}>Rp {item.price.toLocaleString('id-ID')}</span>
          </div>
        ))}
      </div>

      {/* PAYMENT METHOD */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: `1px solid ${COLORS.darkTertiary}`,
      }}>
        <span style={{ color: COLORS.white, fontSize: '0.9rem' }}>Metode Pembayaran</span>
        <span style={{ color: COLORS.white, fontWeight: '600', fontSize: '0.9rem' }}>
          {paymentMethod === 'cash' ? 'Cash' : 'Cashless'}
        </span>
      </div>

      {/* PRICING */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        marginBottom: '1.5rem',
        paddingBottom: '1.5rem',
        borderBottom: `1px solid ${COLORS.darkTertiary}`,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
          <span style={{ color: COLORS.white }}>Subtotal</span>
          <span style={{ color: COLORS.tanAccent, fontWeight: '600' }}>Rp {subtotal.toLocaleString('id-ID')}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
          <span style={{ color: COLORS.white }}>PPN (10%)</span>
          <span style={{ color: COLORS.tanAccent, fontWeight: '600' }}>Rp {ppn.toLocaleString('id-ID')}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: 'bold' }}>
          <span style={{ color: COLORS.white }}>Total</span>
          <span style={{ color: COLORS.tanAccent, fontFamily: "'Playfair Display', serif" }}>Rp {total.toLocaleString('id-ID')}</span>
        </div>
      </div>
    </>
  );

  const renderStatus = () => {
    switch(currentStatus) {
      case 'waiting':
        return (
          <>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: COLORS.yellow,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <Clock size={44} color={COLORS.darkBg} strokeWidth={1.5} />
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              textAlign: 'center',
              marginBottom: '0.75rem',
              fontFamily: "'Playfair Display', serif",
            }}>
              Complete Your Payment
            </h2>

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.9rem',
              marginBottom: '1.5rem',
              lineHeight: '1.5',
            }}>
              Please complete your payment {paymentMethod === 'cash' ? 'at the cashier' : 'via your app'} within the time below.
            </p>

            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.05em',
            }}>
              {formatTime(timeLeft)}
            </div>

            {commonItems}

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}>
              If the time runs out, your order will be<br/>cancelled automatically.
            </p>

            <button
              disabled
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '2rem',
                backgroundColor: COLORS.darkGray,
                border: 'none',
                color: COLORS.mediumGray,
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'not-allowed',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Waiting for Payment...
            </button>
          </>
        );

      case 'processing':
        return (
          <>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: COLORS.yellow,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}>
              <Clock size={44} color={COLORS.darkBg} strokeWidth={1.5} />
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              textAlign: 'center',
              marginBottom: '0.75rem',
              fontFamily: "'Playfair Display', serif",
            }}>
              Processing Your Payment
            </h2>

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.9rem',
              marginBottom: '2rem',
              lineHeight: '1.5',
            }}>
              We're confirming your payment. This<br/>usually takes just a moment.
            </p>

            {commonItems}

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}>
              You'll be taken to your receipt once<br/>everything is confirmed.
            </p>

            <button
              disabled
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '2rem',
                backgroundColor: COLORS.darkGray,
                border: 'none',
                color: COLORS.mediumGray,
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'not-allowed',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Processing...
            </button>
          </>
        );

      case 'failed':
        return (
          <>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: COLORS.red,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              animation: 'shake 0.5s ease-in-out',
            }}>
              <X size={44} color={COLORS.white} strokeWidth={3} />
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              textAlign: 'center',
              marginBottom: '0.75rem',
              fontFamily: "'Playfair Display', serif",
            }}>
              Payment Failed
            </h2>

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.9rem',
              marginBottom: '2rem',
              lineHeight: '1.5',
            }}>
              Your payment didn't go through.<br/>No charges were made.
            </p>

            {commonItems}

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}>
              You can try again or choose a<br/>different payment method.
            </p>

            <button
              onClick={() => navigate('/checkout')}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '2rem',
                backgroundColor: COLORS.tanAccent,
                border: 'none',
                color: COLORS.darkBg,
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Playfair Display', serif",
                cursor: 'pointer',
                transition: 'all 0.3s',
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
              Back to Checkout
            </button>
          </>
        );

      case 'success':
        return (
          <>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: COLORS.green,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <Check size={44} color={COLORS.white} strokeWidth={3} />
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: COLORS.white,
              textAlign: 'center',
              marginBottom: '0.75rem',
              fontFamily: "'Playfair Display', serif",
            }}>
              Payment Completed
            </h2>

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.9rem',
              marginBottom: '2rem',
              lineHeight: '1.5',
            }}>
              Thank you. Your order has been sent to the<br/>kitchen and is now being prepared.
            </p>

            {commonItems}

            <p style={{
              color: COLORS.mediumGray,
              textAlign: 'center',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
            }}>
              Here's your receipt and you'll be notified<br/>when your order is ready.
            </p>

            <button
              onClick={() => navigate(`/receipt?payment=${paymentMethod}`)}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '2rem',
                backgroundColor: COLORS.tanAccent,
                border: 'none',
                color: COLORS.darkBg,
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Playfair Display', serif",
                cursor: 'pointer',
                transition: 'all 0.3s',
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
              Receipt
            </button>
          </>
        );

      default:
        return null;
    }
  };

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
          {renderStatus()}
        </div>
      </div>
    </div>
  );
}
