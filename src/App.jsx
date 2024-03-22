import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter> {}
        <Header /> 
        <CartProvider> 
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido a Kameron!"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/cart" element= {<Cart/>}  />
        </Routes>
        </CartProvider>
    </BrowserRouter> 
  </div>
  );
}

export default App;
