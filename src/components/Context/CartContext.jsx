import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalQuantity: 0, 
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0); 

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prevCart) => [...prevCart, { ...item, quantity }]);
            setTotalQuantity((prevQuantity) => prevQuantity + quantity); 
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId, itemQuantity) => {
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
        setCart(cartUpdated);
        setTotalQuantity((prevQuantity) => prevQuantity - itemQuantity); 
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0); 
    };

    const isInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, totalQuantity }} 
        >
            {children}
        </CartContext.Provider>
    );
};
