export const COFFEE_PRODUCTS = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Pure, bold, and concentrated',
    price: 20000,
    image: 'https://cdn.shopify.com/s/files/1/0601/8783/6659/files/Espresso-cup-with-coffee-beans.jpg?v=1655750550',
    category: 'coffee',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Equal parts espresso, milk, and foam',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'coffee',
  },
  {
    id: 3,
    name: 'Iced Latte',
    description: 'Cold milk with smooth espresso',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww',
    category: 'coffee',
  },
  {
    id: 4,
    name: 'Caramel Latte',
    description: 'Espresso with caramel sweetness',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1579888071069-c107a6f79d82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyYW1lbCUyMGxhdHRlfGVufDB8fDB8fHww',
    category: 'coffee',
  },
  {
    id: 5,
    name: 'Americano',
    description: 'Espresso with hot water',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1587985782608-20062892559d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1lcmljYW5vfGVufDB8fDB8fHww',
    category: 'coffee',
  },
  {
    id: 6,
    name: 'Spanish Latte',
    description: 'Sweetened milk with espresso',
    price: 30000,
    image:'https://plus.unsplash.com/premium_photo-1723759448747-1d174225e61f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhbmlzaCUyMGxhdHRlfGVufDB8fDB8fHww',
    category: 'coffee',
  },
  {
    id: 7,
    name: 'Mocha',
    description: 'Espresso with chocolate and milk',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1632845407875-10b4d85e6bf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9jaGF8ZW58MHx8MHx8fDA%3D',
    category: 'coffee',
  },
  {
    id: 8,
    name: 'Flat White',
    description: 'Velvety milk with espresso base',
    price: 30000,
    image: 'https://plus.unsplash.com/premium_photo-1664970900098-2676029e6a99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxhdCUyMHdoaXRlfGVufDB8fDB8fHww',
    category: 'coffee',
  },
];

export const CART_ITEMS = [
  {
    id: 1,
    name: 'Iced Latte',
    specs: 'Medium • Less Sugar • Normal Ice',
    notes: '',
    price: 35000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Chicken Teriyaki Rice Bowl',
    specs: 'Regular Rice • Mild Spicy Level',
    notes: '',
    price: 42000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Chocolate Brownies',
    specs: 'Served Warm • Add Vanilla Ice Cream',
    notes: 'Catatan: Es krimnya tolong dipisah',
    price: 25000,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop',
  },
];

export const MENU_DETAILS = {
  id: 1,
  name: 'Iced Latte',
  description: 'A smooth blend of espresso and cold milk over ice, light, creamy, and easy to enjoy.',
  price: 30000,
  image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww',
  category: 'Coffee',
  sizes: [
    { id: 'regular', label: 'Regular', price: 0 },
    { id: 'medium', label: 'Medium', price: 5000 },
    { id: 'large', label: 'Large', price: 8000 },
  ],
  sugarLevels: [
    { id: 'normal', label: 'Normal' },
    { id: 'less', label: 'Less Sugar' },
    { id: 'none', label: 'No Sugar' },
  ],
  iceLevels: [
    { id: 'normal', label: 'Normal' },
    { id: 'less', label: 'Less Ice' },
    { id: 'none', label: 'No Ice' },
  ],
  addons: [
    { id: 'chocolate', label: 'Extra Chocolate', price: 4000 },
    { id: 'icecream', label: 'Extra Ice Cream', price: 6000 },
  ],
};

export const PAYMENT_METHODS = [
  { id: 'pilih', label: 'Pilih' },
  { id: 'cash', label: 'Cash' },
  { id: 'cashless', label: 'Cashless' },
];

export const RECEIPT_DATA = {
  orderNumber: '73',
  dateTime: {
    date: '15-12-2025',
    time: '10:22 AM',
  },
  address: 'Jl. Tanimbar 22, Malang, Jawa Timur, Indonesia',
  paymentMethod: 'QRIS',
  subtotal: 102000,
  ppnPercent: 10,
  ppnAmount: 10200,
  total: 112200,
};
