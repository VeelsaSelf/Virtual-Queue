# 🚀 MAU KOPI Perfect - Quick Start Guide

## 📥 Installation

### Step 1: Extract the Project
```bash
# Windows: Right-click the ZIP → Extract All
# Mac/Linux: unzip mau-kopi-perfect.zip

cd mau-kopi-perfect
```

### Step 2: Install Dependencies
```bash
npm install
```
⏳ **Wait 2-5 minutes** for all packages to download

### Step 3: Start Development Server
```bash
npm start
```

✅ Browser will automatically open at `http://localhost:3000`

---

## 📂 Folder Structure Explained

```
mau-kopi-perfect/
│
├── public/
│   └── index.html              ← Main HTML file (one-time setup)
│
├── src/
│   ├── components/             ← All UI components
│   │   ├── Header.jsx         ← Top navigation bar
│   │   ├── HeroSection.jsx    ← Hero cappuccino illustration
│   │   ├── MenuSection.jsx    ← Menu wrapper
│   │   ├── MenuTabs.jsx       ← Category buttons (Coffee, Non-Coffee, etc)
│   │   ├── MenuGrid.jsx       ← Grid of coffee products
│   │   ├── CoffeeCard.jsx     ← Individual coffee card
│   │   └── Footer.jsx         ← Footer with info & social
│   │
│   ├── config/                 ← Configuration & data
│   │   ├── constants.js       ← Colors, shop info, categories
│   │   └── menuData.js        ← All 8 coffee items
│   │
│   ├── assets/
│   │   ├── svgs/
│   │   │   └── coffeeImages.js ← 8 custom SVG coffee illustrations
│   │   ├── styles/
│   │   │   └── global.css     ← Global styles & animations
│   │   ├── images/            ← (Empty - for future images)
│   │   └── icons/             ← (Empty - for future icons)
│   │
│   ├── App.jsx                 ← Main app component
│   └── index.jsx               ← React entry point
│
├── package.json                ← All dependencies listed here
├── tailwind.config.js          ← Tailwind CSS configuration
├── postcss.config.js           ← PostCSS setup
└── README.md                   ← Full documentation
```

---

## 🎯 What's Included

### 7 React Components
- **Header** - Navigation with cart icon
- **HeroSection** - Beautiful cappuccino SVG illustration
- **MenuSection** - Menu wrapper
- **MenuTabs** - 5 category buttons
- **MenuGrid** - Grid layout for products
- **CoffeeCard** - Individual product card
- **Footer** - Contact info & social links

### 8 Coffee Products
Each with unique SVG illustration:
1. Espresso (Rp 20K)
2. Cappuccino (Rp 28K)
3. Iced Latte (Rp 30K)
4. Caramel Latte (Rp 32K)
5. Americano (Rp 22K)
6. Spanish Latte (Rp 30K)
7. Mocha (Rp 32K)
8. Flat White (Rp 30K)

### Design Features
✅ Custom SVG assets (no external images)
✅ Smooth animations & transitions
✅ Responsive layout (mobile-friendly)
✅ Dark theme with tan accents
✅ Georgia serif fonts for headings
✅ Hover effects on cards
✅ Wavy divider in footer

---

## 🔧 Common Tasks

### Change Colors
File: `src/config/constants.js`
```javascript
export const COLORS = {
  darkBg: '#1a1a1a',
  tanAccent: '#d4af9a',
  // ... edit these
};
```

### Add New Coffee Product
1. Open `src/config/menuData.js`
2. Add new item to COFFEE_ITEMS array:
```javascript
{
  id: 9,
  name: 'Your Coffee',
  category: 'Coffee',
  price: 'Rp 25.000',
  description: 'Short description',
  image: 'your-coffee-type',
}
```
3. Add SVG in `src/assets/svgs/coffeeImages.js`

### Modify Shop Information
File: `src/config/constants.js`
```javascript
export const SHOP_INFO = {
  name: 'MAU KOPI',
  address: '22 Jalan Tanimbar, Malang',
  phone: '+62 ...',
  // ... edit here
};
```

### Change Hero Section Text
File: `src/components/HeroSection.jsx`
- Edit the `<h1>` text
- Modify the description paragraph
- Adjust the SVG illustration

---

## 🐛 Troubleshooting

### ❌ `npm start` not working
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm start
```

### ❌ Port 3000 already in use
```bash
# Use different port
npm start -- --port 3001
```

### ❌ Tailwind styles not showing
```bash
# Rebuild
npm run build
# Or restart dev server
npm start
```

### ❌ SVG not rendering
- Check `src/assets/svgs/coffeeImages.js` has the correct coffee type
- Ensure `image` property in `menuData.js` matches a key in coffeeImages

---

## 📱 Responsive Breakpoints

The site is built to be responsive:
- **Mobile** (320px - 640px)
- **Tablet** (641px - 1024px)
- **Desktop** (1025px+)

All components use Tailwind's responsive prefixes (md:, lg:, etc)

---

## 🚀 Building for Production

```bash
# Create optimized build
npm run build

# This creates a /build folder ready to deploy
```

### Deploy to hosting:
- Netlify: Drag & drop the /build folder
- Vercel: Connect GitHub repo
- Any static host: Upload /build contents

---

## 📚 File Sizes

```
mau-kopi-perfect.zip:  21 KB
node_modules/: ~500 MB (after npm install)
Final build: ~2-3 MB
```

---

## 🎓 Learning Path

1. **Start here**: `src/App.jsx` - see component structure
2. **Understand layout**: `src/components/` - each file is self-contained
3. **Change data**: `src/config/menuData.js` - add/edit coffee items
4. **Customize colors**: `src/config/constants.js` - theme colors
5. **Edit styles**: `src/assets/styles/global.css` - animations & global CSS
6. **Add components**: Create new files in `src/components/`

---

## 🔗 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [SVG Guide](https://www.w3schools.com/graphics/svg_intro.asp)
- [Lucide Icons](https://lucide.dev)

---

## ✅ Checklist Before Going Live

- [ ] Update shop address
- [ ] Update phone number
- [ ] Update social media links
- [ ] Customize colors to match brand
- [ ] Add actual coffee images (optional)
- [ ] Test on mobile devices
- [ ] Update copyright year
- [ ] Build for production (`npm run build`)
- [ ] Deploy to hosting

---

## 📞 Support

If you encounter issues:

1. Check the error message carefully
2. Look in `README.md` for more info
3. Check component files for comments
4. Review `src/config/` files for configuration options
5. Read React/Tailwind documentation

---

**Happy coding! ☕**
