import React from 'react';
import { Header } from './Header';
import { Checkout } from './Checkout';

function App() {
  return (
    <div>
      <Header cartCount={3} />
      <Checkout />
    </div>
  );
}

export default App;
