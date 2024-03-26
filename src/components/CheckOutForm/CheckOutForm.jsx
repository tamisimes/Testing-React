import React, { useState } from "react";
import '../CheckOutForm/CheckOutForm.css';

const CheckOutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = async (event) => {
        event.preventDefault();

        const userData = {
            name,
            phone,
            email
        };

        await onConfirm(userData);
    };

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="Label">
                    Teléfono
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label className="Label">
                    Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Crear orden</button>
            </form>
        </div>
    );
};

export default CheckOutForm;
