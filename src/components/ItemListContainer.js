import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Loader from './Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';

const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { nombreCategoria } = useParams()

    useEffect(() => {
        let q = ''
        if (nombreCategoria === undefined) {
            q = collection(dataBase, 'productos');

        } else {
            const itemsCollection = collection(dataBase, 'productos');
            q = query(itemsCollection, where('categoria', '==', nombreCategoria))

        };

        getDocs(q)
            .then((res) => {
                const productos = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data()
                    }
                });
                setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    },
        [nombreCategoria]);

    return (
        <>
            {isLoading ? (<Loader></Loader>) : (<div className='row mt-5'>
                <h2>{saludo}</h2>
                <ItemList items={items} />
            </div>)}

        </>
    );
};

export default ItemListContainer;