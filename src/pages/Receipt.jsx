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
            <svg width="158" height="121" viewBox="0 0 158 121" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
            margin: '0 0 3rem 0',
            position: 'relative',
            right: '-150px',
          }}>
<path d="M66.0846 1.43516C67.0276 3.72903 69.4794 7.45657 70.9881 9.17697C68.8193 14.6249 70.1394 19.3082 72.4026 21.1084C62.8785 17.3011 59.8609 4.49365 66.0846 1.43516Z" fill="#FCFCFB"/>
<path d="M75.5144 2.67773C70.9881 -0.38083 67.5934 -0.763134 66.839 1.24406C67.3105 2.86883 69.1965 5.73617 71.1767 8.31683C71.1767 8.31683 71.9583 6.69195 73.0627 5.25828C74.1671 3.82461 75.5144 2.67773 75.5144 2.67773Z" fill="#FCFCFB"/>
<path d="M73.295 20.6235C69.5723 17.9976 69.5313 11.5333 73.2034 6.18513C76.6394 1.18077 82.8698 -1.33665 85.4158 0.861645C85.4158 0.861645 83.5963 5.83169 79.4751 9.94155C73.6286 15.7718 73.295 20.6235 73.295 20.6235Z" fill="#FCFCFB"/>
<path d="M86.453 1.43519C90.1758 4.06108 90.3567 10.3461 86.6846 15.6943C82.8697 20.4552 76.9289 23.4181 74.1168 21.1084C74.1168 21.1084 73.9115 16.1541 80.7952 9.55923C84.4865 6.02285 86.2189 1.27829 86.2189 1.27829C86.2979 1.32853 86.376 1.38082 86.453 1.43519Z" fill="#FCFCFB"/>
<path d="M47.7908 33.947V11.5772L75.5144 27.6006L104.762 11.5772V17.815L75.5144 33.1074L51.9625 19.3442V33.947H47.7908Z" fill="#FCFCFB"/>
<path d="M54.9091 24.2194V29.8968L75.5144 42.0092L99.8283 28.3698V49.4153H104.762V20.3703L75.5144 36.7424L54.9091 24.2194Z" fill="#FCFCFB"/>
<path d="M106.503 22.6535V26.8819C106.503 26.8819 117.144 25.5109 117.144 35.9388C117.144 45.385 106.503 44.9209 106.503 44.9209V49.033C106.503 49.033 121.909 51.5073 121.909 35.9388C121.909 20.3703 106.503 22.6535 106.503 22.6535Z" fill="#FCFCFB"/>
<path d="M51.2217 58.5755H56.5733C56.5733 58.5755 62.9132 67.5935 75.5144 67.5935C93.9305 67.5935 99.7544 53.3654 99.7544 53.3654H104.762C104.762 53.3654 99.7544 72 75.5144 72C57.2872 72 51.2217 58.5755 51.2217 58.5755Z" fill="#FCFCFB"/>
<path d="M35.9092 35.4609C37.7951 41.5779 39.8632 44.1493 44.7732 44.732L55.2403 49.6064C51.3014 51.263 49.4709 52.7726 46.7535 56.3925C54.5365 57.53 57.3112 56.437 58.918 50.849L68.5364 53.7163C62.9728 55.7234 61.389 57.2384 59.578 59.2598C66.235 61.2837 69.5717 61.4989 72.4969 54.8632C79.5183 56.3255 83.3199 56.528 89.6592 54.8632V53.5251C81.1879 55.0001 76.3085 54.5995 67.4048 52.0915C68.856 45.6413 66.4618 42.1514 60.3324 40.0486C60.417 45.298 61.2666 47.88 65.1416 51.4224L54.8631 47.9816C56.4518 41.4905 55.0931 38.6213 47.7908 35.1742C47.9063 39.9288 48.9258 42.4196 51.9399 46.6435L46.282 44.0629C45.0999 38.1006 41.5671 35.7476 35.9092 35.4609Z" fill="#FCFCFB"/>
<path d="M1.8953 90.2948H6.76601L13.2263 111.49L19.6255 90.2948H24.0479L15.2439 119.967H11.168L1.8953 90.2948ZM0 90.2948H4.5854L5.29868 109.533V119.967H0V90.2948ZM21.8061 90.2948H26.4119V119.967H21.1132V109.533L21.8061 90.2948Z" fill="#FCFCFB"/>
<path d="M41.2393 94.9821L34.4529 119.967H28.7058L38.06 90.2948H41.6468L41.2393 94.9821ZM46.5991 119.967L39.8127 94.9821L39.344 90.2948H42.9715L52.3665 119.967H46.5991ZM46.7825 108.922V113.466H33.1689V108.922H46.7825Z" fill="#FCFCFB"/>
<path d="M67.3365 90.2948H72.7982V110.797C72.7982 113.066 72.377 114.907 71.5347 116.319C70.6923 117.732 69.5443 118.765 68.0905 119.417C66.6368 120.056 64.9996 120.375 63.1791 120.375C61.3177 120.375 59.6602 120.056 58.2065 119.417C56.7527 118.765 55.6115 117.732 54.7827 116.319C53.9675 114.907 53.5599 113.066 53.5599 110.797V90.2948H59.0013V110.797C59.0013 112.142 59.1643 113.181 59.4904 113.915C59.83 114.648 60.3055 115.151 60.9169 115.423C61.5283 115.695 62.2824 115.83 63.1791 115.83C64.0758 115.83 64.8298 115.695 65.4412 115.423C66.0526 115.151 66.5213 114.648 66.8474 113.915C67.1735 113.181 67.3365 112.142 67.3365 110.797V90.2948Z" fill="#FCFCFB"/>
<path d="M90.2048 90.2948V119.967H84.7431V90.2948H90.2048ZM104.98 90.2948L95.2182 104.825L89.3081 112.142L88.2891 106.558L92.2224 100.342L98.3566 90.2948H104.98ZM98.805 119.967L91.8148 106.15L95.7073 102.441L105.265 119.967H98.805Z" fill="#FCFCFB"/>
<path d="M126.349 102.767V107.76C126.349 109.852 126.105 111.687 125.616 113.263C125.126 114.839 124.42 116.156 123.496 117.216C122.572 118.262 121.465 119.05 120.174 119.58C118.883 120.11 117.457 120.375 115.894 120.375C114.318 120.375 112.885 120.11 111.594 119.58C110.304 119.05 109.19 118.262 108.252 117.216C107.328 116.156 106.608 114.839 106.092 113.263C105.589 111.687 105.338 109.852 105.338 107.76V102.767C105.338 100.634 105.589 98.7659 106.092 97.1627C106.595 95.5595 107.308 94.2213 108.232 93.1479C109.169 92.0746 110.283 91.2662 111.574 90.7228C112.865 90.1657 114.291 89.8872 115.854 89.8872C117.43 89.8872 118.856 90.1657 120.133 90.7228C121.424 91.2662 122.531 92.0746 123.455 93.1479C124.393 94.2213 125.106 95.5595 125.595 97.1627C126.098 98.7659 126.349 100.634 126.349 102.767ZM120.928 107.76V102.726C120.928 101.273 120.82 100.023 120.602 98.9765C120.385 97.9303 120.059 97.0812 119.624 96.429C119.189 95.7633 118.652 95.2742 118.014 94.9617C117.389 94.6492 116.669 94.493 115.854 94.493C115.025 94.493 114.291 94.6492 113.653 94.9617C113.028 95.2742 112.498 95.7633 112.063 96.429C111.642 97.0812 111.323 97.9303 111.105 98.9765C110.888 100.023 110.779 101.273 110.779 102.726V107.76C110.779 109.187 110.888 110.409 111.105 111.428C111.323 112.447 111.649 113.276 112.083 113.915C112.532 114.553 113.068 115.029 113.693 115.341C114.332 115.64 115.066 115.79 115.894 115.79C116.71 115.79 117.43 115.64 118.055 115.341C118.693 115.029 119.223 114.553 119.644 113.915C120.079 113.276 120.398 112.447 120.602 111.428C120.82 110.409 120.928 109.187 120.928 107.76Z" fill="#FCFCFB"/>
<path d="M139.77 109.248H133.595V104.683H139.77C140.708 104.683 141.462 104.486 142.032 104.092C142.617 103.684 143.038 103.12 143.296 102.4C143.568 101.68 143.704 100.865 143.704 99.9547C143.704 99.0716 143.568 98.2428 143.296 97.4684C143.038 96.6804 142.617 96.0486 142.032 95.5731C141.462 95.0976 140.708 94.8598 139.77 94.8598H135.266V119.967H129.805V90.2948H139.77C141.74 90.2948 143.425 90.7092 144.824 91.538C146.237 92.3667 147.324 93.508 148.085 94.9617C148.846 96.4019 149.226 98.0526 149.226 99.9139C149.226 101.843 148.846 103.501 148.085 104.887C147.324 106.272 146.237 107.346 144.824 108.107C143.425 108.867 141.74 109.248 139.77 109.248Z" fill="#FCFCFB"/>
<path d="M157.818 90.2948V119.967H152.397V90.2948H157.818Z" fill="#FCFCFB"/>
</svg>
          </div>

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
                  fontFamily: "'Inter', serif",
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
                fontFamily: "'Inter', serif",
              }}>
                Total
              </h3>
              <span style={{
                color: COLORS.tanAccent,
                fontSize: '1.1rem',
                fontWeight: '700',
                fontFamily: "'Inter', serif",
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
              fontFamily: "'Inter', serif",
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
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
