export const COLORS = {
  darkBg: '#1a1a1a',
  darkSecondary: '#292524',
  tanAccent: '#d4af9a',
  white: '#ffffff',
  gray400: '#9ca3af',
  gray500: '#6b7280',
};

export const CHECKOUT_ITEMS = [
  {
    id: 1,
    name: 'Iced Latte',
    specs: 'Medium • Less Sugar • Normal Ice',
    price: 35000,
    image: 'iced-latte',
  },
  {
    id: 2,
    name: 'Chicken Teriyaki Rice Bowl',
    specs: 'Regular Rice • Mild Spicy Level',
    price: 42000,
    image: 'teriyaki-bowl',
  },
  {
    id: 3,
    name: 'Chocolate Brownie',
    specs: 'Served Warm • Add Vanilla Ice Cream\nCatatan: Es krimnya tolong dipasah',
    price: 25000,
    image: 'chocolate-brownie',
  },
];

export const PAYMENT_METHODS = [
  { id: 'pilih', label: 'Pilih' },
  { id: 'cash', label: 'Tunai' },
  { id: 'debit', label: 'Debit' },
  { id: 'credit', label: 'Kredit' },
  { id: 'ewallet', label: 'E-Wallet' },
];

export const SUBTOTAL = 102000;
export const PPN_PERCENT = 10;
export const PPN_AMOUNT = SUBTOTAL * (PPN_PERCENT / 100);
export const TOTAL = SUBTOTAL + PPN_AMOUNT;
