import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom'; 
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.precio * item.quantity;
    });
    return total;
  };

  if (cart.length === 0) {
    return (
      <div>
        <h1 className='alerta'> No hay Items en el carrito </h1>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          precio={item.precio}
          quantity={item.quantity}
          subtotal={item.precio * item.quantity}
          onRemove={handleRemoveItem}
        />
      ))}
      <h5> Total: ${calculateTotal()}</h5>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Button CheckoutButton">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
