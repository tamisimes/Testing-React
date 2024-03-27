import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Timestamp, collection, addDoc, writeBatch, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: calculateTotal(), 
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsRef = collection(db, 'products');
            const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)));
            const { docs } = productsAddedFromFirestore;
            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedtoCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedtoCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('Hay productos que están fuera de stock');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.precio * item.quantity;
        });
        return total;
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h5>El ID de su orden es: {orderId}</h5>;
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckOutForm onConfirm={createOrder} />
        </div>
    );
};

export default CheckOut;
