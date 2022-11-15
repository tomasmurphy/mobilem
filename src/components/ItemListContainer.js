import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Loader from './Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';
import Seo from './Head';

const ItemListContainer = () => {
    window.scrollTo(0, 0)
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
                const productosOrdenados = [...productos].sort((a, b) => (a.precio > b.precio ? 1 : a.precio < b.precio ? -1 : 0))
                setItems(productosOrdenados)
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
            <Seo
        title={"Catálogo"}
        description={"Tienda de electrodomésticos y artículos para el hogar"}
        image={`${window.location.origin}/static/media/portada.8f9e2e9e4243c9605ecc.jpg`}
        pathSlug={window.location.href}
      />
            {isLoading ? (<Loader />) : (<div className='item row'>
                <ItemList items={items} />
            </div>)}
        </>
    );
};

export default ItemListContainer;