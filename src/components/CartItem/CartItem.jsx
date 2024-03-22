import React from 'react';
import './CartItem.css'; 

const CartItem = ({ id, nombre, precio, quantity, onRemove }) => {
    const handleRemoveItem = () => {
      if (typeof onRemove === 'function') { 
        onRemove(id); 
      } else {
        console.error('Error: onRemove is not a function');
      }
    };
  
    return (
      <div className="CartItem">
        <h3>{nombre}</h3>
        <p>Precio unitario: ${precio}</p>
        <p>Cantidad: {quantity}</p>
        <p>Total: ${precio * quantity}</p>
        <button onClick={handleRemoveItem}>X</button>
      </div>
    );
  };
  

export default CartItem;