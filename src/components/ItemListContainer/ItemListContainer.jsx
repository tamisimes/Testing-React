import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../AsyncMock';
import Item from '../Item/Item'; 

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (categoryId) {
          const filteredProducts = data.filter(product => product.category === categoryId);
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      {products.map(product => (
        <Item
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          precio={product.precio}
          img={product.img}
          category={product.category}
          stock={product.stock}
          descripcion={product.descripcion}
        />
      ))}
    </div>
  );
}

export default ItemListContainer;
