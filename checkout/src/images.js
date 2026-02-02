export function getProductImage(productId) {
  if (productId === 'iced-latte') {
    return `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glass1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
          </linearGradient>
          <linearGradient id="coffee1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8b6f47;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5d3d1a;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#6b5636"/>
        <rect x="100" y="60" width="120" height="180" rx="10" fill="#c8e6f0" opacity="0.15"/>
        <rect x="110" y="70" width="30" height="160" fill="url(#glass1)" opacity="0.6"/>
        <rect x="100" y="150" width="120" height="90" fill="url(#coffee1)"/>
        <rect x="100" y="80" width="120" height="70" fill="#e8d5c4" opacity="0.9"/>
        <ellipse cx="160" cy="80" rx="65" ry="25" fill="#faf0e6" opacity="0.95"/>
        <circle cx="130" cy="70" r="6" fill="#ffffff" opacity="0.5"/>
        <circle cx="160" cy="65" r="5" fill="#ffffff" opacity="0.4"/>
        <circle cx="190" cy="70" r="6" fill="#ffffff" opacity="0.45"/>
        <rect x="120" y="110" width="25" height="25" fill="#b0dce8" opacity="0.7"/>
        <rect x="155" y="125" width="28" height="28" fill="#a8d9eb" opacity="0.7"/>
        <line x1="175" y1="65" x2="170" y2="220" stroke="#ff7355" stroke-width="5" opacity="0.9"/>
      </svg>
    `;
  }
  
  if (productId === 'teriyaki-bowl') {
    return `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bowl1" cx="50%" cy="30%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.2" />
            <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="#8b7355"/>
        <ellipse cx="200" cy="150" rx="100" ry="90" fill="#e8d5c4" opacity="0.9"/>
        <ellipse cx="200" cy="150" rx="100" ry="90" fill="url(#bowl1)"/>
        <ellipse cx="200" cy="160" rx="90" ry="75" fill="#f4d9a6"/>
        <ellipse cx="200" cy="130" rx="60" ry="50" fill="#a67c52"/>
        <path d="M 160 120 Q 180 110 200 115 Q 220 110 240 120" fill="#8b6f47" opacity="0.8"/>
        <path d="M 170 140 Q 185 145 200 140 Q 215 145 230 140" stroke="#6b4423" stroke-width="2" fill="none"/>
        <circle cx="180" cy="110" r="3" fill="#90ee90" opacity="0.7"/>
        <circle cx="220" cy="105" r="3" fill="#90ee90" opacity="0.7"/>
        <ellipse cx="200" cy="240" rx="110" ry="25" fill="#d4c4b0" opacity="0.8"/>
      </svg>
    `;
  }
  
  if (productId === 'chocolate-brownie') {
    return `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brownie1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#5a3d1a;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#2a1a0a;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill="#7a6a5a"/>
        <ellipse cx="200" cy="180" rx="120" ry="80" fill="#e8dcc9" opacity="0.9"/>
        <rect x="120" y="80" width="160" height="140" rx="15" fill="url(#brownie1)"/>
        <ellipse cx="150" cy="100" rx="40" ry="30" fill="#3a2d1a" opacity="0.5"/>
        <ellipse cx="200" cy="75" rx="45" ry="35" fill="#f5e6d3" opacity="0.95"/>
        <ellipse cx="200" cy="70" rx="45" ry="25" fill="#faf0e6"/>
        <circle cx="180" cy="65" r="4" fill="#ffffff" opacity="0.4"/>
        <circle cx="220" cy="68" r="3" fill="#ffffff" opacity="0.3"/>
        <path d="M 130 120 Q 150 125 170 120" stroke="#5a3d1a" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M 230 130 Q 250 125 270 130" stroke="#5a3d1a" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M 140 50 Q 145 40 140 30" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.3"/>
        <path d="M 200 45 Q 205 35 200 25" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.3"/>
      </svg>
    `;
  }
  
  return '';
}
