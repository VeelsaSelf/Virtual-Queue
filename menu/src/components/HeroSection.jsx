import React from 'react';
import { COLORS } from '../config/constants';

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 pt-24"
      style={{ backgroundColor: COLORS.darkBg }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
        {/* Left Side - Text */}
        <div className="animate-fade-in-up">
          <h1
            className="text-6xl font-bold leading-tight mb-8"
            style={{
              color: COLORS.white,
              fontFamily: 'Playfair Display',
              fontSize: '72px',
              lineHeight: '1.2',
            }}
          >
            A Calmer<br />
            <span style={{ color: COLORS.tanAccent }}>Space</span> to Order<br />
            And <span style={{ color: COLORS.tanAccent }}>Linger</span>
          </h1>

          <p
            className="text-lg mb-10 leading-relaxed max-w-md"
            style={{ color: COLORS.gray400 }}
          >
            Everything stays gentle and unhurried, leaving more room for comfort,
            conversation, and coffee.
          </p>

          <button
            className="px-8 py-3 rounded-lg font-bold text-lg transition-all hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: COLORS.tanAccent,
              color: COLORS.darkSecondary,
              fontWeight: '600',
            }}
          >
            Order Now
          </button>
        </div>

        {/* Right Side - Coffee Illustration */}
        <div className="flex items-center justify-center animate-fade-in">
          <div className="relative w-full max-w-sm">
            {/* Coffee Cup SVG */}
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 400 450"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-2xl"
            >
              <defs>
                <linearGradient id="beanGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8b6f47', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#5a4a35', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="coffeeInside" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c9a876', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6d5d4f', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Floating coffee beans - top left */}
              <g opacity="0.7">
                <ellipse
                  cx="60"
                  cy="50"
                  rx="12"
                  ry="18"
                  fill="#8b6f47"
                  transform="rotate(-35 60 50)"
                />
                <ellipse
                  cx="100"
                  cy="30"
                  rx="10"
                  ry="15"
                  fill="#7a5f3f"
                  transform="rotate(45 100 30)"
                />
                <ellipse
                  cx="140"
                  cy="50"
                  rx="11"
                  ry="16"
                  fill="#8b6f47"
                  transform="rotate(-15 140 50)"
                />
              </g>

              {/* Floating coffee beans - top right */}
              <g opacity="0.7">
                <ellipse
                  cx="340"
                  cy="60"
                  rx="12"
                  ry="18"
                  fill="#9b7f57"
                  transform="rotate(25 340 60)"
                />
                <ellipse
                  cx="360"
                  cy="30"
                  rx="10"
                  ry="15"
                  fill="#7a5f3f"
                  transform="rotate(-60 360 30)"
                />
              </g>

              {/* Main Cup Body */}
              <path
                d="M 100 120 L 90 340 Q 90 370 120 390 L 280 390 Q 310 370 310 340 L 300 120 Z"
                fill="#ffffff"
                stroke="#e0e0e0"
                strokeWidth="1.5"
                filter="url(#shadow)"
              />

              {/* Coffee inside cup */}
              <path
                d="M 105 160 L 100 340 Q 100 365 120 380 L 280 380 Q 300 365 300 340 L 295 160 Z"
                fill="url(#coffeeInside)"
              />

              {/* Latte Art - Leaf design */}
              <ellipse cx="200" cy="155" rx="70" ry="12" fill="#8b6f47" opacity="0.8" />

              {/* Latte art leaf 1 */}
              <path
                d="M 160 155 Q 155 145 150 155 Q 155 165 160 155"
                fill="#ffffff"
                opacity="0.6"
              />

              {/* Latte art leaf 2 */}
              <path
                d="M 200 155 Q 195 140 190 155 Q 195 170 200 155"
                fill="#ffffff"
                opacity="0.6"
              />

              {/* Latte art leaf 3 */}
              <path
                d="M 240 155 Q 235 145 230 155 Q 235 165 240 155"
                fill="#ffffff"
                opacity="0.6"
              />

              {/* Foam cap */}
              <ellipse
                cx="200"
                cy="130"
                rx="78"
                ry="28"
                fill="#f5e6d3"
                opacity="0.95"
              />

              {/* Foam bubbles */}
              <circle cx="140" cy="110" r="13" fill="#ffffff" opacity="0.7" />
              <circle cx="200" cy="95" r="16" fill="#ffffff" opacity="0.8" />
              <circle cx="260" cy="115" r="14" fill="#ffffff" opacity="0.75" />

              {/* Cup shine/highlight */}
              <ellipse
                cx="130"
                cy="180"
                rx="18"
                ry="90"
                fill="#ffffff"
                opacity="0.1"
              />

              {/* Handle */}
              <path
                d="M 300 150 Q 350 200 340 340"
                fill="none"
                stroke="#ffffff"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Saucer/Base */}
              <ellipse
                cx="200"
                cy="395"
                rx="120"
                ry="30"
                fill="#e8d7c3"
                opacity="0.8"
              />

              {/* Price Badge */}
              <g>
                <circle
                  cx="320"
                  cy="80"
                  r="48"
                  fill="#ffffff"
                  stroke={COLORS.tanAccent}
                  strokeWidth="2"
                />
                <text
                  x="320"
                  y="95"
                  textAnchor="middle"
                  fontSize="32"
                  fontWeight="bold"
                  fill={COLORS.darkSecondary}
                  fontFamily="Arial, sans-serif"
                >
                  28K
                </text>
              </g>

              {/* Cappuccino Label */}
              <g>
                <rect
                  x="300"
                  y="140"
                  width="140"
                  height="40"
                  rx="20"
                  fill="#ffffff"
                  stroke={COLORS.tanAccent}
                  strokeWidth="1.5"
                />
                <text
                  x="370"
                  y="165"
                  textAnchor="middle"
                  fontSize="18"
                  fontWeight="600"
                  fill={COLORS.darkSecondary}
                  fontFamily="Arial, sans-serif"
                >
                  Cappuccino
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
