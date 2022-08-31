import { productos } from '../mock/productos';
import { ItemDetail } from './ItemDetail';
const ItemDetailContent = () => {
    
    const itemDetail = productos.find(producto => producto.id === 1)
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