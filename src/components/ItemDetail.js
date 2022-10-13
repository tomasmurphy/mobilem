import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Carousel from './Carousel';

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
    <div className='row'>
      <div className="card col-12 col-md-6 ps-5 pe-5" key={itemDetail.id}>

        <Carousel>
            <div><img src={itemDetail.img1} id="uno" alt="" className="img-fluid"/></div>       
            <div><img src={itemDetail.img2} id="dos" alt="" className="img-fluid"/></div>       
            <div><img src={itemDetail.img3} id="tres" alt="" className="img-fluid"/></div>       
        </Carousel> 
      </div>
      <div className="card col-12 col-md-6">
        <h1>{itemDetail.titulo}</h1>
        <h4>${itemDetail.precio}</h4>
        <p>{itemDetail.descripcion}</p>
        <p>En stock {itemDetail.stock}</p>
        <ItemCount stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
        {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}
      </div>
      </div>
    </>)
}
