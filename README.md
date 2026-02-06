# MAU KOPI - Professional Coffee Shop React App

100% Pixel-Perfect React Application matching the design specifications with Playfair Display & Inter fonts.

## ✨ Features

- ✅ **100% Design Match** - Exact pixel-perfect implementation
- ✅ **Professional Fonts** - Playfair Display (Headings) + Inter (Body)
- ✅ **Real Product Images** - Uses Unsplash API for quality images
- ✅ **Full Navigation** - React Router v6 routing
- ✅ **Payment Status Flow** - Multiple states (Waiting, Processing, Failed, Success)
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - Fade-in, slide-up, pulse effects
- ✅ **Clean Code Structure** - Organized folder layout

## 📂 Project Structure

```
mau-kopi-pro/
├── public/
│   └── index.html                 # Main HTML with fonts
├── src/
│   ├── components/
│   │   ├── Header.jsx            # Navigation header (fixed)
│   │   └── Footer.jsx            # Footer with wave effect
│   ├── pages/
│   │   ├── Home.jsx              # Landing + Menu catalog
│   │   ├── MenuDetails.jsx       # Product customization
│   │   ├── Cart.jsx              # Shopping cart
│   │   ├── Checkout.jsx          # Order summary & payment
│   │   ├── Receipt.jsx           # Order confirmation
│   │   └── PaymentStatus.jsx     # Payment states
│   ├── constants/
│   │   ├── colors.js             # Color palette
│   │   └── products.js           # Product & data constants
│   ├── App.jsx                   # Router setup
│   ├── index.jsx                 # React entry point
│   └── index.css                 # Global styles
├── package.json                  # Dependencies
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

## 🚀 Quick Start

### 1. Extract & Navigate
```bash
unzip mau-kopi-pro.zip
cd mau-kopi-pro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

### 4. Open Browser
```
http://localhost:3000
```

## 📄 Pages Included

### 1. Home (`/`)
- Hero section with call-to-action
- "What's on the Menu" section
- 8 coffee products in responsive grid
- Category filters (Coffee, Non-Coffee, Food, Desserts, Snacks)
- Footer with wave effect

### 2. Menu Details (`/menu/:id`)
- Large product image
- Product description
- Size options (Regular, Medium +5000, Large +8000)
- Sugar level options
- Ice level options
- Add-ons with prices
- Optional notes field
- Real-time price calculation
- Quantity selector
- "Masukkan Keranjang" button

### 3. Cart (`/cart`)
- List of 3 items with images
- Product specs & notes
- Quantity +/- controls
- Delete button per item
- Real-time total calculation
- "Lanjutkan" button

### 4. Checkout (`/checkout`)
- Order summary with 3 items
- Payment method dropdown
- Customer name input (required)
- Price breakdown (Subtotal, PPN, Total)
- "Checkout" button

### 5. Payment Status (`/payment-process?status=waiting|processing|failed|success`)
- **Waiting** - Timer 00:09:54, yellow clock icon
- **Processing** - Pulsing icon, "confirming payment"
- **Failed** - Red X icon, retry option
- **Success** - Green checkmark, receipt button

### 6. Receipt (`/receipt`)
- Order number (73) with pulse animation
- Date & time (15-12-2025 10:22 AM)
- Location (Jl. Tanimbar 22, Malang)
- Items breakdown
- Payment method (QRIS)
- Price summary
- Thank you message

## 🎨 Design System

### Colors
```javascript
{
  darkBg: '#0f0f0f',
  darkSecondary: '#1a1a1a',
  darkTertiary: '#2a2a2a',
  tanAccent: '#d4af9a',
  white: '#ffffff',
  mediumGray: '#999999',
  darkGray: '#666666',
}
```

### Fonts
- **Headings**: Playfair Display (400, 500, 600, 700, 800)
- **Body**: Inter (300, 400, 500, 600, 700)
- Imported from Google Fonts CDN

### Animations
- `fadeInUp` - 0.6s ease-out
- `pulse` - 2s ease-in-out (Order number)
- `shake` - 0.5s ease-in-out (Error icon)

## 🔗 Navigation Flow

```
Home (/)
  ↓ Order Now
Menu Details (/menu/:id)
  ↓ Masukkan Keranjang
Cart (/cart)
  ↓ Lanjutkan
Checkout (/checkout)
  ↓ Checkout
Payment Status (/payment-process?status=processing)
  ↓ Auto-redirect
Payment Success (/payment-process?status=success)
  ↓ Receipt Button
Receipt (/receipt)
  ↓ Back to Home
Home (/)
```

## 📱 Responsive Breakpoints

- Desktop: 1400px max-width
- Tablet: Grid adapts to 2 columns
- Mobile: Stack layout with 2rem padding

## 🛠️ Tech Stack

- **React**: 18.2.0
- **React Router DOM**: 6.8.0
- **Lucide React**: Icons (Bell, ShoppingCart, Clock, etc.)
- **Tailwind CSS**: Utility classes via CDN
- **Google Fonts**: Playfair Display + Inter

## 🎯 Key Features

### Header (Fixed)
- MAU KOPI branding
- Notification bell
- Shopping cart with item count
- Clickable logo (back to home)

### Footer
- Wave SVG divider
- Brand section with socials (Instagram, WhatsApp, Twitter, TikTok)
- Address & Hours
- Copyright & Legal links

### Product Cards
- Hover lift effect (-8px transform)
- Image with aspect ratio
- Description (3-line limit)
- Price & Order button

### Cart Items
- Image thumbnail (80x80px)
- Product name, specs, notes
- Quantity control with +/-
- Delete button
- Real-time price calculation

### Customization
- Radio buttons (Size, Sugar, Ice)
- Checkboxes (Add-ons)
- Optional notes input
- Dynamic price updates

## 💡 Customization

### Change Product Images
Edit `src/constants/products.js`:
```javascript
image: 'https://your-image-url.jpg'
```

### Update Prices
Edit `src/constants/products.js`:
```javascript
price: 30000
```

### Modify Colors
Edit `src/constants/colors.js`:
```javascript
tanAccent: '#your-color'
```

### Add More Products
Edit `src/constants/products.js` `COFFEE_PRODUCTS` array

## 📦 Building for Production

```bash
npm run build
```

Output: `build/` folder ready for deployment

## 🤝 Contributing

Feel free to fork and customize for your own coffee shop!

## 📝 License

Open source - feel free to use!

---

**Made with ☕ and React**

For issues or questions, check the code comments or review the design files!
