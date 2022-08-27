import React, { useState, useEffect } from 'react';
import { productos } from '../mock/productos';
import { ItemList } from './ItemList';
const ItemListContainer = ({ saludo }) => {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(productos);
            }, 2000);
        });

        getProducts
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Finally');
            });
    }, []);

    return (
      <>
        <div className='row mt-5'>
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
        </>
    );
};

export default ItemListContainer;