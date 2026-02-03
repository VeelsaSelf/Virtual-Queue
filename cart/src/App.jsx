import React from 'react';
import { Header } from './Header';
import { Cart } from './Cart';

function App() {
  return (
    <div>
      <Header cartCount={3} />
      <Cart />
    </div>
  );
}

export default App;
