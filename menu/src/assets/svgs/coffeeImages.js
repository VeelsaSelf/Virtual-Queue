// SVG Assets for coffee products

export const getCoffeeImageSVG = (coffeeType) => {
  const svgs = {
    espresso: `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#8b6f47;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5a4a2f;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f5f5f5;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Coffee beans scattered -->
        <ellipse cx="80" cy="100" rx="8" ry="12" fill="#4a3728" transform="rotate(-30 80 100)"/>
        <ellipse cx="320" cy="120" rx="7" ry="11" fill="#5a4a35" transform="rotate(45 320 120)"/>
        <ellipse cx="100" cy="420" rx="6" ry="10" fill="#4a3728" transform="rotate(60 100 420)"/>
        <!-- Cup -->
        <path d="M 120 150 L 110 350 Q 110 380 140 400 L 260 400 Q 290 380 290 350 L 280 150 Z" fill="url(#cupGrad)" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Coffee inside -->
        <path d="M 125 200 L 120 350 Q 120 375 140 390 L 260 390 Q 280 375 280 350 L 275 200 Z" fill="url(#coffeeGrad)"/>
        <!-- Coffee surface -->
        <ellipse cx="200" cy="200" rx="75" ry="15" fill="#6d5d4f" opacity="0.9"/>
        <!-- Shine on cup -->
        <ellipse cx="150" cy="200" rx="15" ry="80" fill="white" opacity="0.15"/>
        <!-- Handle -->
        <path d="M 280 200 Q 330 250 320 350" fill="none" stroke="url(#cupGrad)" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="410" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    cappuccino: `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cappuccinoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6d3;stop-opacity:1" />
            <stop offset="60%" style="stop-color:#c9a876;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#6d5d4f;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Coffee beans -->
        <ellipse cx="70" cy="150" rx="8" ry="12" fill="#4a3728" transform="rotate(-45 70 150)"/>
        <ellipse cx="330" cy="100" rx="7" ry="11" fill="#5a4a35" transform="rotate(30 330 100)"/>
        <!-- Cup -->
        <path d="M 110 180 L 100 360 Q 100 385 130 405 L 270 405 Q 300 385 300 360 L 290 180 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Coffee inside -->
        <path d="M 115 230 L 110 360 Q 110 380 130 395 L 270 395 Q 290 380 290 360 L 285 230 Z" fill="url(#cappuccinoGrad)"/>
        <!-- Latte art circle -->
        <circle cx="200" cy="220" r="35" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.6"/>
        <!-- Foam heart design -->
        <path d="M 200 210 Q 185 195 175 205 Q 170 215 200 235 Q 230 215 225 205 Q 215 195 200 210" fill="#ffffff" opacity="0.7"/>
        <!-- Foam cap -->
        <ellipse cx="200" cy="180" rx="80" ry="25" fill="#f5e6d3" opacity="0.95"/>
        <!-- Foam bubbles -->
        <circle cx="150" cy="165" r="10" fill="#f5f5f5" opacity="0.8"/>
        <circle cx="240" cy="170" r="12" fill="#f5f5f5" opacity="0.75"/>
        <circle cx="200" cy="150" r="11" fill="#f5f5f5" opacity="0.8"/>
        <!-- Handle -->
        <path d="M 290 220 Q 340 280 320 360" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="415" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    'iced-latte': `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="icedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#87ceeb;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="85" cy="130" rx="8" ry="12" fill="#4a3728" transform="rotate(-20 85 130)"/>
        <!-- Glass cup -->
        <path d="M 100 120 L 90 380 L 310 380 L 300 120 Z" fill="#e0f2f7" stroke="#90caf9" stroke-width="2" opacity="0.7"/>
        <!-- Ice cubes -->
        <rect x="110" y="140" width="25" height="25" fill="#a8daff" opacity="0.6" transform="rotate(-15 122 152)"/>
        <rect x="200" y="160" width="22" height="22" fill="#a8daff" opacity="0.6" transform="rotate(25 211 171)"/>
        <rect x="150" y="200" width="28" height="28" fill="#a8daff" opacity="0.5" transform="rotate(-40 164 214)"/>
        <!-- Coffee liquid -->
        <path d="M 100 240 L 95 380 L 305 380 L 300 240 Z" fill="#8b6f47" opacity="0.9"/>
        <!-- Milk layer -->
        <ellipse cx="200" cy="240" rx="100" ry="12" fill="#c9a876" opacity="0.7"/>
        <!-- Straw -->
        <rect x="195" y="80" width="10" height="310" fill="#ff6b6b" opacity="0.8"/>
        <circle cx="200" cy="75" r="6" fill="#ff6b6b" opacity="0.8"/>
        <!-- Whipped cream top -->
        <ellipse cx="200" cy="110" rx="95" ry="20" fill="#ffffff" opacity="0.8"/>
      </svg>
    `,
    'caramel-latte': `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="caramelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6d3;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#daa520;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="95" cy="110" rx="8" ry="12" fill="#4a3728" transform="rotate(35 95 110)"/>
        <!-- Cup -->
        <path d="M 120 170 L 110 360 Q 110 385 140 405 L 260 405 Q 290 385 290 360 L 280 170 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Coffee inside -->
        <path d="M 125 220 L 120 360 Q 120 380 140 395 L 260 395 Q 280 380 280 360 L 275 220 Z" fill="url(#caramelGrad)"/>
        <!-- Caramel drip -->
        <path d="M 140 170 Q 135 200 138 230 Q 140 250 145 280" fill="none" stroke="#d4a574" stroke-width="3" opacity="0.8"/>
        <path d="M 260 170 Q 265 200 262 230 Q 260 250 255 280" fill="none" stroke="#d4a574" stroke-width="3" opacity="0.8"/>
        <!-- Foam -->
        <ellipse cx="200" cy="160" rx="80" ry="22" fill="#f5e6d3" opacity="0.9"/>
        <!-- Handle -->
        <path d="M 280 220 Q 330 280 320 360" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="415" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    americano: `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="americanoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#c9a876;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5a4a35;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="75" cy="140" rx="8" ry="12" fill="#4a3728" transform="rotate(50 75 140)"/>
        <ellipse cx="320" cy="130" rx="7" ry="11" fill="#5a4a35" transform="rotate(-30 320 130)"/>
        <!-- Cup -->
        <path d="M 110 140 L 100 350 Q 100 380 130 400 L 270 400 Q 300 380 300 350 L 290 140 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Coffee -->
        <path d="M 115 180 L 110 350 Q 110 375 130 390 L 270 390 Q 290 375 290 350 L 285 180 Z" fill="url(#americanoGrad)"/>
        <!-- Thin crema on top -->
        <ellipse cx="200" cy="175" rx="75" ry="12" fill="#8b6f47" opacity="0.6"/>
        <!-- Cup shine -->
        <ellipse cx="140" cy="200" rx="12" ry="70" fill="white" opacity="0.1"/>
        <!-- Handle -->
        <path d="M 290 180 Q 340 250 320 350" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="410" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    'spanish-latte': `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="spanishGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6d3;stop-opacity:1" />
            <stop offset="70%" style="stop-color:#c9a876;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="80" cy="120" rx="8" ry="12" fill="#4a3728" transform="rotate(-15 80 120)"/>
        <!-- Cup -->
        <path d="M 100 150 L 90 350 Q 90 380 120 400 L 280 400 Q 310 380 310 350 L 300 150 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Milk layer -->
        <path d="M 105 180 L 100 350 Q 100 375 120 390 L 280 390 Q 300 375 300 350 L 295 180 Z" fill="url(#spanishGrad)"/>
        <!-- Darker sugar layer -->
        <ellipse cx="200" cy="250" rx="90" ry="30" fill="#d4a574" opacity="0.5"/>
        <!-- Foam top -->
        <ellipse cx="200" cy="140" rx="85" ry="25" fill="#f5e6d3" opacity="0.9"/>
        <!-- Handle -->
        <path d="M 300 180 Q 350 260 330 350" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="410" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    mocha: `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mochaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6d3;stop-opacity:1" />
            <stop offset="40%" style="stop-color:#d4a574;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#5a4a35;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="70" cy="100" rx="8" ry="12" fill="#4a3728" transform="rotate(25 70 100)"/>
        <ellipse cx="330" cy="140" rx="7" ry="11" fill="#5a4a35" transform="rotate(-50 330 140)"/>
        <!-- Cup -->
        <path d="M 110 160 L 100 360 Q 100 385 130 405 L 270 405 Q 300 385 300 360 L 290 160 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Mocha inside -->
        <path d="M 115 210 L 110 360 Q 110 380 130 395 L 270 395 Q 290 380 290 360 L 285 210 Z" fill="url(#mochaGrad)"/>
        <!-- Chocolate drizzle -->
        <path d="M 130 155 Q 140 200 135 280" fill="none" stroke="#3d2d1d" stroke-width="2" opacity="0.6"/>
        <path d="M 270 155 Q 260 200 265 280" fill="none" stroke="#3d2d1d" stroke-width="2" opacity="0.6"/>
        <!-- Whipped cream with chocolate -->
        <ellipse cx="200" cy="130" rx="80" ry="25" fill="#ffffff" opacity="0.9"/>
        <path d="M 120 130 Q 200 100 280 130" fill="none" stroke="#8b4513" stroke-width="2" opacity="0.7"/>
        <!-- Handle -->
        <path d="M 290 210 Q 340 280 320 360" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="415" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
    'flat-white': `
      <svg width="100%" height="100%" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flatwhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#f5e6d3;stop-opacity:1" />
            <stop offset="80%" style="stop-color:#c9a876;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#8b6f47;stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Background -->
        <rect width="400" height="500" fill="#3d2d1d"/>
        <!-- Beans -->
        <ellipse cx="90" cy="110" rx="8" ry="12" fill="#4a3728" transform="rotate(-35 90 110)"/>
        <ellipse cx="310" cy="115" rx="7" ry="11" fill="#5a4a35" transform="rotate(40 310 115)"/>
        <!-- Cup -->
        <path d="M 110 150 L 100 360 Q 100 385 130 405 L 270 405 Q 300 385 300 360 L 290 150 Z" fill="#f5f5f5" stroke="#d0d0d0" stroke-width="2"/>
        <!-- Milk inside -->
        <path d="M 115 190 L 110 360 Q 110 380 130 395 L 270 395 Q 290 380 290 360 L 285 190 Z" fill="url(#flatwhiteGrad)"/>
        <!-- Latte art leaves -->
        <path d="M 180 175 Q 175 185 180 195" fill="none" stroke="rgba(139, 111, 71, 0.5)" stroke-width="2"/>
        <path d="M 220 175 Q 225 185 220 195" fill="none" stroke="rgba(139, 111, 71, 0.5)" stroke-width="2"/>
        <!-- Microfoam top -->
        <ellipse cx="200" cy="140" rx="80" ry="20" fill="#f5e6d3" opacity="0.95"/>
        <!-- Cup shine -->
        <ellipse cx="135" cy="210" rx="10" ry="70" fill="white" opacity="0.12"/>
        <!-- Handle -->
        <path d="M 290 190 Q 340 270 320 360" fill="none" stroke="#f5f5f5" stroke-width="12"/>
        <!-- Saucer -->
        <ellipse cx="200" cy="415" rx="110" ry="25" fill="#e8d7c3" opacity="0.8"/>
      </svg>
    `,
  };

  return svgs[coffeeType] || svgs.espresso;
};
