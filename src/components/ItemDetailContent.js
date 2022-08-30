import { productos } from '../mock/productos';
import { ItemDetail } from './ItemDetail';
const ItemDetailContent = () => {
    
    const itemDetail = productos.find(producto => producto.id === 1)
    return (

        <>
            <div className='row mt-5'>
                <h5>Detalle del producto</h5>
                <ItemDetail key={itemDetail.id} titulo={itemDetail.titulo} img1={itemDetail.img1} img2={itemDetail.img2} img3={itemDetail.img3} precio={itemDetail.precio} stock={itemDetail.stock} descripcion={itemDetail.descripcion} />
            </div>
        </>
    );
};

export default ItemDetailContent;