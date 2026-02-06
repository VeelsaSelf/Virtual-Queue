import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { COLORS } from '../constants/colors';
import { COFFEE_PRODUCTS } from '../constants/products';

export function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('coffee');

  const categories = ['Coffee', 'Non-Coffee', 'Food', 'Desserts', 'Snacks'];

  const filteredProducts = selectedCategory === 'coffee' 
    ? COFFEE_PRODUCTS 
    : COFFEE_PRODUCTS;

  return (
    <div style={{
      backgroundColor: COLORS.darkBg,
      minHeight: '100vh',
      paddingTop: '80px',
    }}>
      <Header cartCount={3} />

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        minHeight: '70vh',
      }}>
        {/* Left - Text */}
        <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <h1 style={{
            fontSize: '4rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            color: COLORS.white,
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            A <span style={{ color: COLORS.tanAccent }}>Calmer</span><br/>Space to Order<br/>and <span style={{ color: COLORS.tanAccent }}>Linger</span>
          </h1>

          <p style={{
            fontSize: '1rem',
            color: COLORS.white,
            marginBottom: '2.5rem',
            lineHeight: '1.8',
            maxWidth: '450px',
          }}>
            Everything stays gentle and unhurried, leaving more room for comfort, conversation, and coffee.
          </p>

          <button
            onClick={() => navigate('/menu-list')}
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              backgroundColor: COLORS.tanAccent,
              border: 'none',
              color: COLORS.darkBg,
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: "'Inter', serif",
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
            Order Now
          </button>
        </div>

        {/* Right - Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img 
            src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cappuccino"
            style={{
             width: '100%',
             maxWidth: '400px',
             height: '400px',         // ⚠️ SAME AS WIDTH!
             borderRadius: '50%',     // ✅ CIRCULAR!
             objectFit: 'cover',
            }}
          />
          {/* Floating Labels */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '100px',
            backgroundColor: COLORS.lightGray,
            color: COLORS.darkBg,
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: "'Playfair Display', serif",
          }}>
            Cappuccino
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '150px',
            backgroundColor: COLORS.lightGray,
            color: COLORS.darkBg,
            padding: '0.5rem 1.5rem',
            borderRadius: '2rem',
            fontSize: '0.9rem',
            fontWeight: '600',
          }}>
            28K
          </div>
        </div>
      </section>

      {/* What's on the Menu Section */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '3rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            color: COLORS.white,
            marginBottom: '0.5rem',
          }}>
            What's on the Menu
          </h2>
          <p style={{
            fontSize: '0.95rem',
            color: COLORS.mediumGray,
          }}>
            Good things are worth lingering over.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat.toLowerCase())}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                backgroundColor: selectedCategory === cat.toLowerCase() 
                  ? COLORS.lightGray 
                  : 'transparent',
                border: `1px solid ${selectedCategory === cat.toLowerCase() 
                  ? COLORS.lightGray 
                  : COLORS.darkTertiary}`,
                color: selectedCategory === cat.toLowerCase() 
                  ? COLORS.darkBg 
                  : COLORS.white,
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/menu/${product.id}`)}
              style={{
                backgroundColor: COLORS.darkSecondary,
                borderRadius: '1.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: `1px solid ${COLORS.darkTertiary}`,
                animation: `fadeInUp 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(212, 175, 154, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                backgroundColor: COLORS.darkBg,
              }}>
                <img 
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div style={{
                padding: '1.5rem',
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: COLORS.white,
                  marginBottom: '0.5rem',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {product.name}
                </h3>

                <p style={{
                  color: COLORS.mediumGray,
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  height: '3rem',
                  overflow: 'hidden',
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: COLORS.tanAccent,
                    fontFamily: "'Inter', serif",
                  }}>
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
