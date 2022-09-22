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
      <div className="card col-12 col-md-6 ps-5 pe-5" key={itemDetail.id}>
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={itemDetail.img1} alt={`Foto de ${itemDetail.titulo}`} className='d-block w-100' />
            </div>
            <div className="carousel-item">
              <img src={itemDetail.img2} alt={`Foto de ${itemDetail.titulo}`} className='d-block w-100' />
            </div>
            <div className="carousel-item">
              <img src={itemDetail.img3} alt={`Foto de ${itemDetail.titulo}`} className='d-block w-100' />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className="card col-12 col-md-6">
        <p>{itemDetail.titulo}</p>
        <h5>${itemDetail.precio}</h5>
        <p>{itemDetail.descripcion}</p>
        <p>En stock {itemDetail.stock}</p>
        <ItemCount stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
        {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}
        <h4>Medios de pagos bla bla y otra sarasa
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, voluptatibus rerum natus, dolorum architecto minus amet facere, eveniet sed illum odit! Placeat quisquam quis eius provident? Dolore praesentium nemo unde?
        </h4>
      </div>
    </>)
}
