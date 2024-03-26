import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Redirect } from "react-router-dom";

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);
    const [redirect, setRedirect] = useState(false);

    const createOrder = async (userData) => {
        setLoading(true);
        try {
            const orderData = {
                buyer: userData,
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const ordersCollectionRef = collection(db, 'orders');
            const newOrderRef = await addDoc(ordersCollectionRef, orderData);
            setOrderId(newOrderRef.id);

            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
            setRedirect(true); 
        }
    };

    if (loading) {
        return <h1>Se está procesando su orden...</h1>;
    }

    if (redirect) {
        return <Redirect to="/checkout" />;
    }

    if (orderId) {
        return <h1>El ID de su orden es: {orderId}</h1>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    );
};

export default CheckOut;
