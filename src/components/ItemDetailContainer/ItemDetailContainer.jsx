import React, { useState, useEffect } from "react";
import { getProductById } from "../../AsyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]); 

    return (
        <div className="ItemDetailContainer">
            {product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
