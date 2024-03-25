import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore'; 
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'ItemList'), where('category', '==', categoryId))
            : collection(db, 'ItemList');

        getDocs(collectionRef) 
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => { 
                setLoading(false);
            });
    }, [categoryId]);

    return (
        <div>
            <ItemList products={products} loading={loading} />
        </div>
    );
};

export default ItemListContainer;
