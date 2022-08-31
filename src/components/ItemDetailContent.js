import { useParams } from 'react-router-dom';
import { productos } from '../mock/productos';
import { ItemDetail } from './ItemDetail';

const ItemDetailContent = () => {
    const {idProducto} = useParams()
    
    const itemDetail = productos.find(producto => producto.id === idProducto)
    return (

        <>
            <div className='row mt-5'>
                <h5>Detalle del producto</h5>
                <ItemDetail itemDetail={itemDetail} />
            </div>
        </>
    );
};

export default ItemDetailContent;