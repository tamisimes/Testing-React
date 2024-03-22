import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './assets/cart.svg';
import { CartContext } from '../Context/CartContext';
import './CartWidget.css'; 

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidgetLink'>
            <img className='CartIcon' src={cartIcon} alt='cart-icon' />
            {totalQuantity > 0 && <span className='CartBadge'>{totalQuantity}</span>}
        </Link>
    );
};

export default CartWidget;
