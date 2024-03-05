import '../ItemCount/ItemCount.css'
import React, { useState } from 'react';



const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='contador'>
            <div className='controles'>
                <button className='button' onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className='button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='button' onClick={() => onAdd(quantity)} disabled={stock <= 0}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;
