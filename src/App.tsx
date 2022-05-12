import React from 'react';
import { ProductProvider } from './context';
import { AppRoutes } from './routes';

function App() {
  

  return (
    <ProductProvider>
      <AppRoutes />
    </ProductProvider>
  );
}

export default App;
