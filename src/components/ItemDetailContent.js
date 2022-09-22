import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dataBase } from '../firebaseConfig';
import { getDoc, doc, collection } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';
import Loader from './Loader';


const ItemDetailContent = () => {
    window.scrollTo(0, 0)
    const [itemDetail, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { idProducto } = useParams()

    useEffect(() => {
        const itemsCollection = collection(dataBase, 'productos');
        const ref = doc(itemsCollection, idProducto);
        getDoc(ref)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data()
                });
                setIsLoading(false)
            });
    }, [idProducto]);

    return (
        <>
            {isLoading
                ? (<Loader></Loader>)
                : (
                    <div className='row'>
                        <h5>Detalle del producto</h5>
                        <ItemDetail itemDetail={itemDetail} />
                    </div>
                )
            }
        </>
    );
};

export default ItemDetailContent;