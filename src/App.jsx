import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MenuDetails } from './pages/MenuDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Receipt } from './pages/Receipt';
import { PaymentStatus } from './pages/PaymentStatus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<MenuDetails />} />
        <Route path="/menu-list" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-process" element={<PaymentStatus />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
