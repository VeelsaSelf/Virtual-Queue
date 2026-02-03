import React from 'react';
import { Header } from './Header';
import { Receipt } from './Receipt';

function App() {
  return (
    <div>
      <Header cartCount={3} />
      <Receipt />
    </div>
  );
}

export default App;
