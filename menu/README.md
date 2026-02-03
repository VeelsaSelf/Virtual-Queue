# MAU KOPI - Premium Coffee Shop Website

Modern, responsive coffee shop menu website built with React, Tailwind CSS, and custom SVG assets.

## 📁 Project Structure

```
mau-kopi-perfect/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with cart
│   │   ├── HeroSection.jsx     # Hero section with detailed SVG
│   │   ├── MenuSection.jsx     # Menu wrapper component
│   │   ├── MenuTabs.jsx        # Category tabs
│   │   ├── MenuGrid.jsx        # Coffee items grid
│   │   ├── CoffeeCard.jsx      # Individual coffee card
│   │   └── Footer.jsx          # Footer with social links
│   ├── config/
│   │   ├── constants.js        # Colors, shop info, menu categories
│   │   └── menuData.js         # Coffee items data
│   ├── assets/
│   │   ├── styles/
│   │   │   └── global.css      # Global styles & animations
│   │   ├── svgs/
│   │   │   └── coffeeImages.js # SVG coffee illustrations
│   │   ├── images/             # (for future image assets)
│   │   └── icons/              # (for future icon assets)
│   ├── utils/                  # Utility functions
│   ├── hooks/                  # Custom React hooks
│   ├── App.jsx                 # Main app component
│   └── index.jsx               # React entry point
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md                   # Documentation
```

## 🎨 Design Details

### Color Palette
- **Dark Background**: `#1a1a1a`
- **Secondary Dark**: `#2b2b2b`
- **Tan Accent**: `#d4af9a`
- **Tan Light**: `#f5e6d3`
- **Coffee Dark**: `#3d2d1d`
- **Coffee Medium**: `#8b6f47`
- **Coffee Light**: `#c9a876`

### Typography
- **Headings**: Georgia (serif) - Elegant, premium feel
- **Body**: System sans-serif - Clean, readable
- **Font Weight**: 700 for headings, 400-600 for body

### Components

#### Header
- Fixed position with backdrop blur
- Logo with coffee emoji
- Bell notification icon
- Shopping cart with counter badge

#### Hero Section
- Full-screen immersive design
- Split layout: text (left) + SVG illustration (right)
- Detailed cappuccino SVG with:
  - Latte art (leaf design)
  - Floating coffee beans
  - Foam bubbles
  - Price badge (28K)
  - Product label
  - Shadow effects

#### Menu Section
- "What's on the Menu" heading
- 5 category tabs (Coffee, Non-Coffee, Food, Desserts, Snacks)
- 4-column grid layout (responsive)
- 8 coffee products with unique SVG illustrations

#### Coffee Card
- Rounded corners (rounded-3xl)
- Responsive hover effects (scale + shadow)
- SVG coffee illustration (generated per type)
- Product name, description, price

#### Footer
- Wavy SVG divider
- Tan accent background
- 3-column layout:
  - Brand & social links
  - Address information
  - Business hours
- Bottom: Copyright & legal links
- Social icons: Instagram, WhatsApp, Twitter, TikTok

## 🚀 Installation & Setup

### Prerequisites
- Node.js v16+ 
- npm v8+

### Installation

```bash
# Clone or extract the project
cd mau-kopi-perfect

# Install dependencies
npm install

# Start development server
npm start

# Browser opens automatically at http://localhost:3000
```

### Build for Production

```bash
npm run build
# Creates optimized build in /build folder
```

## 🎯 Features

✅ **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

✅ **Custom SVG Assets**
- 8 unique coffee illustrations
- Animated elements
- Scalable without quality loss
- No external image dependencies

✅ **Smooth Animations**
- Fade-in effects
- Scale transitions on hover
- Smooth scroll behavior
- Staggered animations

✅ **Modern UI/UX**
- Consistent color scheme
- Proper spacing & typography
- Clear visual hierarchy
- Intuitive navigation

✅ **Modular Architecture**
- Component-based structure
- Centralized configuration
- Easy to extend & maintain
- Clean code organization

## 📊 Menu Items (8 Coffee Products)

1. **Espresso** - Rp 20.000
   - Pure, bold, and concentrated

2. **Cappuccino** - Rp 28.000
   - Equal parts espresso, milk, and foam

3. **Iced Latte** - Rp 30.000
   - Cold milk with smooth espresso

4. **Caramel Latte** - Rp 32.000
   - Espresso with caramel sweetness

5. **Americano** - Rp 22.000
   - Espresso with hot water

6. **Spanish Latte** - Rp 30.000
   - Sweetened milk with espresso

7. **Mocha** - Rp 32.000
   - Espresso with chocolate and milk

8. **Flat White** - Rp 30.000
   - Velvety milk with espresso base

## 🏪 Shop Information

**Address**: 22 Jalan Tanimbar, Malang, East Java, Indonesia  
**Hours**: Monday - Saturday, 09.00 - 17.00  
**Phone**: +62 XXX XXXX XXXX  
**Email**: info@maukopi.id

## 🔗 Social Media

- Instagram: @maukopi
- WhatsApp: Contact link
- Twitter/X: @maukopi
- TikTok: @maukopi

## 📦 Dependencies

- **react@^18.2.0** - UI library
- **react-dom@^18.2.0** - React DOM rendering
- **tailwindcss@^2.2.19** - CSS framework
- **lucide-react@^0.263.1** - Icon library
- **react-scripts@5.0.1** - CRA build scripts
- **autoprefixer@^10.4.0** - CSS vendor prefixer
- **postcss@^8.4.5** - CSS processor

## 🛠️ Development Tips

### Adding New Coffee Product
1. Add item to `src/config/menuData.js`
2. Create SVG in `src/assets/svgs/coffeeImages.js`
3. Component will auto-render in grid

### Customizing Colors
- Edit `src/config/constants.js` COLORS object
- Update `tailwind.config.js` theme
- All components use centralized constants

### Modifying Layout
- Edit component JSX files
- Tailwind classes for responsive breakpoints
- CSS in `src/assets/styles/global.css` for custom styles

### Adding New Pages
1. Create component in `src/pages/`
2. Import in `src/App.jsx`
3. Set up routing (if needed)

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [SVG Drawing Guide](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [JavaScript ES6+](https://javascript.info)

## 📝 Notes

- All SVG assets are custom-generated using SVG primitives
- No external image files required
- Easily scalable to any screen size
- Colors follow premium coffee shop branding

## 📄 License

This project is proprietary to MAU KOPI.

## 👨‍💻 Development

**Tech Stack**: React 18 + Tailwind CSS + Custom SVG  
**Build Tool**: Create React App  
**Styling**: Tailwind CSS + CSS-in-JS  
**Icons**: Lucide React + Custom SVGs

---

**Made with ☕ for MAU KOPI Coffee Shop**
