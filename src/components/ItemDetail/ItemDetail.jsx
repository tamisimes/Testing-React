import React, { useState, useEffect } from 'react';
import '../ItemDetail/ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../AsyncMock';

const ItemDetail = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProduct();
    }, [itemId]);

    const getProduct = async () => {
        try {
            const productData = await getProductById(itemId);
            setProduct(productData);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    return (
        <div className="ItemDetail">
            {product ? (
                <article className="CardItem card">
                    <header className="Header">
                        <h4 className="ItemHeader">{product.nombre}</h4>
                    </header>
                    <picture>
                        <img src={product.img} alt={product.nombre} className="ItemImg" />
                    </picture>
                    <section>
                        <p className="Info">Precio: ${product.precio}</p>
                        <p className="Info">Stock Disponible: {product.stock}</p>
                        <p className="Info">Descripción: {product.descripcion}</p>
                        <p className="Info">Categoría: {product.category}</p>
                    </section>
                    <footer className="ItemFooter">
                        <Link to={`/item/${product.id}`} className="Option">
                            Ver detalle
                        </Link>
                        <ItemCount
                            initial={1}
                            stock={product.stock}
                            onAdd={(quantity) => console.log('Cantidad agregada', quantity)}
                        />
                    </footer>
                </article>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};

export default ItemDetail;
