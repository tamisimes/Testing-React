import React, { useContext, useState } from 'react';
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext (CartContext)
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    const item = {
        id, nombre, precio,
    }
    addItem (item, quantity)
    };

    return (
        <article className="CardItem card">
            <header className="Header">
                <h4 className="ItemHeader">{nombre}</h4>
            </header>
            <picture>
                <img src={img} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Precio: ${precio}</p>
                <p className="Info">Stock Disponible: {stock}</p>
                <p className="Info">Descripción: {descripcion}</p>
                <p className="Info">Categoría: {category}</p>
            </section>
            <footer className="ItemFooter">
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    );
};

export default ItemDetail;
