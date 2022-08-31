import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../mock/productos';
import { ItemList } from './ItemList';
const ItemListContainer = ({ saludo }) => {
    
    const [items, setItems] = useState([]);
    const {nombreCategoria} = useParams()


    useEffect(() => {
    
        const getProducts = () =>
        new Promise((res, rej) => {
            const productosFiltrados = productos.filter(
                (producto) => producto.categoria === nombreCategoria)
            setTimeout(() => {
                res(nombreCategoria ? productosFiltrados:productos);
            }, 2000);
        });

        getProducts()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log('Finally');
            });
    }, 
    [nombreCategoria]);

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