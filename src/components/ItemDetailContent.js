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
                const seisSinInteres = [1, 1.24, .87]
                    const tresSinInteres = [1.21, 1.45, .93]
                    const coeficientes = (res.data().categoria === "sillones") ? seisSinInteres : tresSinInteres
                  
                    const doceValue = Math.round(res.data().precio * coeficientes[1]),
                    seisValue = Math.round(res.data().precio * coeficientes[0]),
                    tresValue = Math.round(res.data().precio),
                    personalValue = Math.round(res.data().precio),
                    contadoValue = Math.round(res.data().precio * coeficientes[2]);
                setItem({
                    id: res.id,
                    formaPago: {doceValue: doceValue,
                        seisValue: seisValue, 
                        tresValue:tresValue, 
                        personalValue:personalValue, 
                        contadoValue:contadoValue},
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
                    <div className='detalle'>
                        <ItemDetail itemDetail={itemDetail} />
                    </div>
                )
            }
        </>
    );
};

export default ItemDetailContent;