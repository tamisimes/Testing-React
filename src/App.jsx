import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <BrowserRouter> {}
        <Header /> 
        <NavBar />
        <Routes>
  <Route path="/" element={<ItemListContainer greeting={"¡Bienvenido a Kameron!"} />} />
  <Route path="/category/:categoryId" element={<ItemListContainer />} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
</Routes>

      </BrowserRouter> {}
    </div>
  );
}

export default App;
