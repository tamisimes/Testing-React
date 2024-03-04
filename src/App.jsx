import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header /> 
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenido a Kameron!"} />
      <ItemCount initial={1} stock={15} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
    </div>
  );
}

export default App;