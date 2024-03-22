import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({id, nombre, precio, img, category, stock, descripcion}) => {
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
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    );
}

export default Item;
