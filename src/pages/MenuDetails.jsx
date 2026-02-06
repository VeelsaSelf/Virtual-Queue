import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { Header } from '../components/Header';
import { COLORS } from '../constants/colors';
import { MENU_DETAILS } from '../constants/products';

export function MenuDetails() {
  const navigate = useNavigate();
  const [size, setSize] = useState('medium');
  const [sugar, setSugar] = useState('normal');
  const [ice, setIce] = useState('normal');
  const [addons, setAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const basePrice = MENU_DETAILS.price;
  const sizePrice = MENU_DETAILS.sizes.find(s => s.id === size)?.price || 0;
  const addonsPrice = addons.reduce((sum, addonId) => {
    return sum + (MENU_DETAILS.addons.find(a => a.id === addonId)?.price || 0);
  }, 0);
  const totalPrice = (basePrice + sizePrice + addonsPrice) * quantity;

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
      <Header cartCount={3} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '3rem 2rem',
      }}>
        <p style={{ 
          color: COLORS.mediumGray, 
          fontSize: '0.85rem', 
          marginBottom: '1.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => e.target.style.color = COLORS.tanAccent}
        onMouseLeave={(e) => e.target.style.color = COLORS.mediumGray}>
          Menu / {MENU_DETAILS.category}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
        }}>
          {/* LEFT - IMAGE */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '2rem',
            animation: 'fadeInUp 0.6s ease-out',
          }}>
            <div style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              backgroundColor: COLORS.darkSecondary,
            }}>
              <img 
                src={MENU_DETAILS.image}
                alt={MENU_DETAILS.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* RIGHT - OPTIONS */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: COLORS.white,
              fontFamily: "'Playfair Display', serif",
            }}>
              {MENU_DETAILS.name}
            </h1>

            <p style={{
              color: COLORS.mediumGray,
              fontSize: '1rem',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}>
              {MENU_DETAILS.description}
            </p>

            {/* SIZE */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: "'Playfair Display', serif",
              }}>
                Size
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {MENU_DETAILS.sizes.map(s => (
                  <label key={s.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: size === s.id ? `${COLORS.tanAccent}20` : 'transparent',
                  }}>
                    <input
                      type="radio"
                      name="size"
                      checked={size === s.id}
                      onChange={() => setSize(s.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white, flex: 1 }}>{s.label}</span>
                    {s.price > 0 && <span style={{ color: COLORS.tanAccent }}>+{s.price.toLocaleString('id-ID')}</span>}
                  </label>
                ))}
              </div>
            </div>

            {/* SUGAR LEVEL */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: "'Playfair Display', serif",
              }}>
                Sugar Level
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {MENU_DETAILS.sugarLevels.map(s => (
                  <label key={s.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: sugar === s.id ? `${COLORS.tanAccent}20` : 'transparent',
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
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: "'Playfair Display', serif",
              }}>
                Ice Level
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {MENU_DETAILS.iceLevels.map(i => (
                  <label key={i.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: ice === i.id ? `${COLORS.tanAccent}20` : 'transparent',
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
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: COLORS.white,
                fontFamily: "'Playfair Display', serif",
              }}>
                Add-ons
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {MENU_DETAILS.addons.map(a => (
                  <label key={a.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'pointer',
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: addons.includes(a.id) ? `${COLORS.tanAccent}20` : 'transparent',
                  }}>
                    <input
                      type="checkbox"
                      checked={addons.includes(a.id)}
                      onChange={() => toggleAddon(a.id)}
                      style={{ accentColor: COLORS.tanAccent, cursor: 'pointer' }}
                    />
                    <span style={{ color: COLORS.white, flex: 1 }}>{a.label}</span>
                    <span style={{ color: COLORS.tanAccent }}>+{a.price.toLocaleString('id-ID')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* CATATAN */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
              }}>
                <label style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: COLORS.white,
                  fontFamily: "'Playfair Display', serif",
                }}>
                  Catatan
                </label>
                <span style={{ color: COLORS.mediumGray, fontSize: '0.85rem' }}>Opsional</span>
              </div>
              <input
                type="text"
                placeholder="Tulis catatan"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: COLORS.darkBg,
                  border: `1px solid ${COLORS.tanAccent}`,
                  color: COLORS.white,
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
              />
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
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: COLORS.tanAccent,
            fontFamily: "'Playfair Display', serif",
            margin: 0,
          }}>
            Rp {totalPrice.toLocaleString('id-ID')}
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.darkGray,
                  border: 'none',
                  color: COLORS.white,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
              >
                <Minus size={18} />
              </button>
              <span style={{
                width: '2rem',
                textAlign: 'center',
                color: COLORS.white,
                fontWeight: '600',
              }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: COLORS.tanAccent,
                  border: 'none',
                  color: COLORS.darkBg,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={() => navigate('/cart')}
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '1rem 2rem',
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
              Masukkan Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
