import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { COLORS, PRODUCT, SIZES, SUGAR_LEVELS, ICE_LEVELS, ADDONS } from './constants';
import { IcedLatteSVG } from './images';

export function ProductDetails() {
  const [size, setSize] = useState('regular');
  const [sugar, setSugar] = useState('normal');
  const [ice, setIce] = useState('normal');
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  // Calculate price
  const calculatePrice = () => {
    let total = PRODUCT.basePrice;
    const sizePrice = SIZES.find(s => s.id === size)?.price || 0;
    total += sizePrice;
    addons.forEach(addonId => {
      const addonPrice = ADDONS.find(a => a.id === addonId)?.price || 0;
      total += addonPrice;
    });
    return total * quantity;
  };

  const toggleAddon = (addonId) => {
    setAddons(prev => prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]);
  };

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
      paddingBottom: '120px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        {/* Breadcrumb */}
        <p style={{ color: COLORS.gray400, fontSize: '0.875rem', marginBottom: '1rem', position: 'relative', top: '-20px' }}>
          {PRODUCT.breadcrumb}
        </p>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* LEFT - PRODUCT IMAGE */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            animation: 'fadeInUp 0.6s ease-out',
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              backgroundColor: COLORS.coffeeDark,
              backgroundImage: `linear-gradient(135deg, ${COLORS.coffeeLight}15 0%, ${COLORS.coffeeDark} 100%)`,
            }}>
              <div dangerouslySetInnerHTML={{ __html: IcedLatteSVG }} />
            </div>
          </div>

          {/* RIGHT - OPTIONS */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            {/* Product Name */}
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: COLORS.white,
              fontFamily: 'Georgia, serif',
              lineHeight: '1.2',
            }}>
              {PRODUCT.name}
            </h1>

            {/* Description */}
            <p style={{
              color: COLORS.gray400,
              fontSize: '1rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}>
              {PRODUCT.description}
            </p>

            {/* SIZE SECTION */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                Size
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SIZES.map(s => (
                  <label key={s.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: size === s.id ? `${COLORS.tanAccent}20` : 'transparent',
                    borderLeft: size === s.id ? `3px solid ${COLORS.tanAccent}` : '3px solid transparent',
                    transition: 'all 0.3s',
                  }}>
                    <input
                      type="radio"
                      name="size"
                      checked={size === s.id}
                      onChange={() => setSize(s.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white, flex: 1 }}>{s.label}</span>
                    {s.price > 0 && (
                      <span style={{ color: COLORS.tanAccent }}>
                        +{s.price.toLocaleString('id-ID')}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* SUGAR LEVEL */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                Sugar Level
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {SUGAR_LEVELS.map(s => (
                  <label key={s.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: sugar === s.id ? `${COLORS.tanAccent}20` : 'transparent',
                    borderLeft: sugar === s.id ? `3px solid ${COLORS.tanAccent}` : '3px solid transparent',
                    transition: 'all 0.3s',
                  }}>
                    <input
                      type="radio"
                      name="sugar"
                      checked={sugar === s.id}
                      onChange={() => setSugar(s.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white }}>{s.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ICE LEVEL */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                Ice Level
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {ICE_LEVELS.map(i => (
                  <label key={i.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: ice === i.id ? `${COLORS.tanAccent}20` : 'transparent',
                    borderLeft: ice === i.id ? `3px solid ${COLORS.tanAccent}` : '3px solid transparent',
                    transition: 'all 0.3s',
                  }}>
                    <input
                      type="radio"
                      name="ice"
                      checked={ice === i.id}
                      onChange={() => setIce(i.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white }}>{i.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ADD-ONS */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                Add-ons
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {ADDONS.map(a => (
                  <label key={a.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: addons.includes(a.id) ? `${COLORS.tanAccent}20` : 'transparent',
                    borderLeft: addons.includes(a.id) ? `3px solid ${COLORS.tanAccent}` : '3px solid transparent',
                    transition: 'all 0.3s',
                  }}>
                    <input
                      type="checkbox"
                      checked={addons.includes(a.id)}
                      onChange={() => toggleAddon(a.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white, flex: 1 }}>{a.label}</span>
                    <span style={{ color: COLORS.tanAccent }}>
                      +{a.price.toLocaleString('id-ID')}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* NOTES */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                display: 'block',
                color: COLORS.white,
                fontFamily: 'Georgia, serif',
              }}>
                Catatan <span style={{ color: COLORS.gray400 }}>Opsional</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tulis catatan..."
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: COLORS.darkSecondary,
                  border: `1px solid ${COLORS.tanAccent}40`,
                  color: COLORS.white,
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  resize: 'vertical',
                  minHeight: '80px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = COLORS.tanAccent}
                onBlur={(e) => e.target.style.borderColor = `${COLORS.tanAccent}40`}
              />
            </div>


          </div>
        </div>
      </div>

      {/* FIXED FOOTER - STICKY AT BOTTOM */}
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
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}>
          {/* LEFT - PRICE */}
          <div style={{
            flex: 1,
          }}>
            <p style={{
              fontSize: '2.25rem',
              fontWeight: 'bold',
              color: COLORS.tanAccent,
              fontFamily: 'Georgia, serif',
              margin: 0,
            }}>
              Rp {calculatePrice().toLocaleString('id-ID')}
            </p>
          </div>

          {/* CENTER - QUANTITY SELECTOR */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 1rem',
            borderRadius: '2rem',
            backgroundColor: COLORS.darkSecondary,
          }}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#666666',
                border: 'none',
                color: COLORS.white,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              <Minus size={20} />
            </button>
            <span style={{
              width: '2rem',
              textAlign: 'center',
              color: COLORS.white,
              fontWeight: '600',
              fontSize: '1rem',
            }}>
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: COLORS.tanAccent,
                border: 'none',
                color: COLORS.darkSecondary,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              <Plus size={20} />
            </button>
          </div>

          {/* RIGHT - ORDER BUTTON */}
          <button
            style={{
              flex: 1,
              padding: '1rem 2rem',
              borderRadius: '2rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkSecondary,
              fontSize: '1.125rem',
              fontWeight: '600',
              fontFamily: 'Georgia, serif',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.9'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Masukkan Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
