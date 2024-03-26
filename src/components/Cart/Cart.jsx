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

  let total = 0;

  if (cart.length === 0) {
    return (
      <div>
        <h1 className='alerta'> No hay Items en el carrito </h1>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => {
        const subtotal = item.precio * item.quantity;
        total += subtotal;

        return (
          <CartItem
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            quantity={item.quantity}
            subtotal={subtotal}
            onRemove={handleRemoveItem}
          />
        );
      })}
      <h5> Total: ${total}</h5>
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
