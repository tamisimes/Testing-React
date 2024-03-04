import React from 'react';
import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <div className='cartWidgetContainer'> 
            <img src={cart} alt="cart-widget" className='cartIcon'/> 
            <span className='cartCount'>0</span>
        </div>
    );
};

export default CartWidget;
