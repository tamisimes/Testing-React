import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Header /> 
      <NavBar />
      <ItemListContainer greeting={"¡Bienvenido a Kameron!"} />
    </div>
  );
}

export default App;