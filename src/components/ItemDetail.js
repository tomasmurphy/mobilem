import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

export const ItemDetail = ({ itemDetail }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart, cantidadSeleccionada } = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(itemDetail, cantidad);
  };

  const cantidadEnCart = cantidadSeleccionada(itemDetail.id);

  return (
    <>
      <div className="card col-12 col-md-6" key={itemDetail.id}>
        <div className=''>
          <p>{itemDetail.titulo}</p>
          <h5>${itemDetail.precio}</h5>
          <div className='row'>
            <img src={itemDetail.img1} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
            <img src={itemDetail.img2} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
            <img src={itemDetail.img3} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
          </div>
          <p>{itemDetail.descripcion}</p>
          <p>En stock {itemDetail.stock}</p>
          <ItemCount stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
          {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}
        </div>
      </div>
      <div className="card col-12 col-md-6">
        <h4>Medios de pagos bla bla y otra sarasa
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, voluptatibus rerum natus, dolorum architecto minus amet facere, eveniet sed illum odit! Placeat quisquam quis eius provident? Dolore praesentium nemo unde?
        </h4>
        <h5>Envios etc
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente nobis iusto aspernatur voluptatem, quae sunt quod numquam distinctio labore facilis debitis vero. Quod iusto, reiciendis corporis rem perspiciatis sit?
        </h5>
      </div>
    </>)
}
