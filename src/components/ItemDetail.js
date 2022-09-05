import React, { useState } from 'react'
import ItemCount from './ItemCount'

export const ItemDetail = ({ itemDetail }) => {
  const [cantidad, setCantidad] = useState(0);
  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    console.log(cantidad)
  };
  return (
    <div className="card col-12" key={itemDetail.id}>
      <p>{itemDetail.titulo}</p>
      <h5>${itemDetail.precio}</h5>
      <div className='row'>
        <img src={itemDetail.img1} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
        <img src={itemDetail.img2} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
        <img src={itemDetail.img3} alt={`Foto de ${itemDetail.titulo}`} className='col-4 img-fluid' />
      </div>
      <p>{itemDetail.descripcion}</p>
      <p>En stock {itemDetail.stock}</p>
      <ItemCount stock={itemDetail.stock} initial={1} onAdd={onAdd} />
      {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}
    </div>)
}
