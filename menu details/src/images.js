export const IcedLatteSVG = `
<svg viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; po">
  <defs>
    <!-- Gradients -->
    <linearGradient id="woodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b6f4a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#6b5636;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4a3626;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.4" />
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.2" />
    </linearGradient>

    <linearGradient id="coffeeLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#9d7d5a;stop-opacity:0.9" />
      <stop offset="50%" style="stop-color:#7d5d3a;stop-opacity:0.9" />
      <stop offset="100%" style="stop-color:#5d3d1a;stop-opacity:0.95" />
    </linearGradient>

    <linearGradient id="milkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f0e6d8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#d4c4b0;stop-opacity:1" />
    </linearGradient>

    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="8" dy="12" stdDeviation="10" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Wood Surface Background -->
  <rect width="600" height="700" fill="url(#woodGrad)"/>

  <!-- Wood texture lines -->
  <line x1="0" y1="250" x2="600" y2="250" stroke="#5a3d26" stroke-width="1" opacity="0.3"/>
  <line x1="0" y1="350" x2="600" y2="350" stroke="#5a3d26" stroke-width="1" opacity="0.2"/>

  <!-- Coffee Beans - LEFT SIDE (5 beans scattered) -->
  <g opacity="0.8">
    <!-- Bean 1 -->
    <ellipse cx="70" cy="150" rx="20" ry="28" fill="#6b5a4a" transform="rotate(-35 70 150)"/>
    <ellipse cx="65" cy="150" rx="8" ry="12" fill="#5a4a3a" transform="rotate(-35 65 150)"/>
    
    <!-- Bean 2 -->
    <ellipse cx="45" cy="320" rx="18" ry="26" fill="#7a6a5a" transform="rotate(25 45 320)"/>
    <ellipse cx="50" cy="320" rx="7" ry="11" fill="#6a5a4a" transform="rotate(25 50 320)"/>
    
    <!-- Bean 3 -->
    <ellipse cx="75" cy="520" rx="16" ry="24" fill="#6b5a4a" transform="rotate(-50 75 520)"/>
    <ellipse cx="70" cy="520" rx="6" ry="10" fill="#5a4a3a" transform="rotate(-50 70 520)"/>
    
    <!-- Bean 4 -->
    <ellipse cx="50" cy="620" rx="17" ry="25" fill="#7a6a5a" transform="rotate(40 50 620)"/>
    
    <!-- Bean 5 -->
    <ellipse cx="85" cy="400" rx="19" ry="27" fill="#6a5a4a" transform="rotate(-20 85 400)"/>
  </g>

  <!-- Coffee Beans - RIGHT SIDE -->
  <g opacity="0.8">
    <!-- Bean 1 -->
    <ellipse cx="530" cy="180" rx="18" ry="26" fill="#7a6a5a" transform="rotate(45 530 180)"/>
    <ellipse cx="535" cy="180" rx="7" ry="11" fill="#6a5a4a" transform="rotate(45 535 180)"/>
    
    <!-- Bean 2 -->
    <ellipse cx="555" cy="380" rx="16" ry="24" fill="#6b5a4a" transform="rotate(-30 555 380)"/>
    <ellipse cx="550" cy="380" rx="6" ry="10" fill="#5a4a3a" transform="rotate(-30 550 380)"/>
    
    <!-- Bean 3 -->
    <ellipse cx="530" cy="550" rx="17" ry="25" fill="#7a6a5a" transform="rotate(35 530 550)"/>
    
    <!-- Bean 4 -->
    <ellipse cx="560" cy="650" rx="15" ry="23" fill="#6a5a4a" transform="rotate(-40 560 650)"/>
  </g>

  <!-- GLASS CONTAINER -->
  <g filter="url(#shadow)">
    <!-- Main glass shape -->
    <path d="M 200 180 L 210 550 Q 210 580 240 585 L 360 585 Q 390 580 390 550 L 400 180 Q 400 150 370 150 L 230 150 Q 200 150 200 180 Z" 
          fill="#d0e8f0" opacity="0.15" stroke="none"/>

    <!-- Glass shine/highlight -->
    <path d="M 215 160 L 220 560 Q 220 575 235 578 L 245 578 L 240 160 Q 240 155 230 155 Z" 
          fill="url(#glassShine)" opacity="0.6"/>
  </g>

  <!-- COFFEE LIQUID -->
  <ellipse cx="300" cy="350" rx="85" ry="15" fill="url(#coffeeLiquid)" opacity="0.95"/>
  
  <!-- Dark coffee layer -->
  <path d="M 220 350 L 230 480 Q 230 500 250 510 L 350 510 Q 370 500 370 480 L 380 350 Z" 
        fill="#4a2a0a" opacity="0.5"/>

  <!-- MILK/CREAM LAYER (upper part of drink) -->
  <path d="M 210 220 L 230 350 L 370 350 L 390 220 Q 390 190 360 180 L 240 180 Q 210 190 210 220 Z" 
        fill="url(#milkGrad)" opacity="0.9"/>

  <!-- Foam/Cream top -->
  <ellipse cx="300" cy="175" rx="82" ry="30" fill="#faf0e6" opacity="0.95"/>
  
  <!-- Foam bubbles -->
  <circle cx="240" cy="165" r="9" fill="#ffffff" opacity="0.5"/>
  <circle cx="280" cy="150" r="7" fill="#ffffff" opacity="0.4"/>
  <circle cx="320" cy="155" r="8" fill="#ffffff" opacity="0.45"/>
  <circle cx="360" cy="165" r="6" fill="#ffffff" opacity="0.35"/>
  <circle cx="300" cy="140" r="5" fill="#ffffff" opacity="0.3"/>

  <!-- ICE CUBES -->
  <g opacity="0.75">
    <!-- Ice cube 1 - large -->
    <rect x="220" y="240" width="50" height="50" fill="#c0e4f0" rx="3" opacity="0.8"/>
    <rect x="220" y="240" width="50" height="4" fill="#ffffff" opacity="0.4"/>
    <path d="M 270 240 L 270 290 L 265 295" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.3"/>
    
    <!-- Ice cube 2 -->
    <rect x="290" y="300" width="45" height="45" fill="#b0dce8" rx="3" opacity="0.8"/>
    <rect x="290" y="300" width="45" height="3" fill="#ffffff" opacity="0.4"/>
    
    <!-- Ice cube 3 - large -->
    <rect x="320" y="270" width="52" height="52" fill="#c0e4f0" rx="3" opacity="0.8"/>
    <rect x="320" y="270" width="52" height="4" fill="#ffffff" opacity="0.4"/>
  </g>

  <!-- STRAW -->
  <g>
    <!-- Straw shadow -->
    <line x1="330" y1="160" x2="325" y2="500" stroke="#000000" stroke-width="10" opacity="0.1" stroke-linecap="round"/>
    <!-- Straw main -->
    <line x1="330" y1="160" x2="325" y2="500" stroke="#ff7355" stroke-width="7" opacity="0.95" stroke-linecap="round"/>
    <!-- Straw shine -->
    <line x1="330" y1="160" x2="325" y2="500" stroke="#ffffff" stroke-width="2" opacity="0.35" stroke-linecap="round"/>
  </g>

  <!-- SAUCER/COASTER BASE -->
  <ellipse cx="300" cy="600" rx="110" ry="25" fill="#e8dcc9" opacity="0.85" filter="url(#shadow)"/>
  <ellipse cx="300" cy="598" rx="110" ry="22" fill="#f5ede0" opacity="0.95"/>
  
  <!-- Saucer shine -->
  <ellipse cx="300" cy="595" rx="105" ry="18" fill="#ffffff" opacity="0.15"/>

  <!-- WHITE JAR/PITCHER (optional milk pitcher on side) -->
  <g opacity="0.7">
    <!-- Pitcher body -->
    <path d="M 480 350 Q 480 320 500 310 L 500 420 Q 500 440 480 440 L 430 440 Q 420 440 420 430 L 420 350 Q 420 340 430 340 L 480 340 Z" 
          fill="#ffffff" opacity="0.3"/>
    <!-- Pitcher shine -->
    <ellipse cx="445" cy="360" rx="15" ry="25" fill="#ffffff" opacity="0.2"/>
  </g>

  <!-- Notebook/Paper (subtle) -->
  <rect x="120" y="480" width="120" height="80" fill="#fffef5" opacity="0.4" rx="4"/>
  <line x1="125" y1="495" x2="230" y2="495" stroke="#d4d4c8" stroke-width="1" opacity="0.5"/>
  <line x1="125" y1="510" x2="230" y2="510" stroke="#d4d4c8" stroke-width="1" opacity="0.4"/>

</svg>
`;
