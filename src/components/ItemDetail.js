import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Carousel from './Carousel';
import ModalCreditos from './ModalCreditos';
import FormaPago from './FormaPago';

export const ItemDetail = ({ itemDetail }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart, cantidadSeleccionada } = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(itemDetail, cantidad, formaPago);
  };

  const cantidadEnCart = cantidadSeleccionada(itemDetail.id);

  const [count, setCount] = useState('');

  const traerCount = (count) => {
    setCount(count)
  }
  var formaPago = "";
  let descripcion = "";
  const traerFormaPago = (value) => {
    formaPago = value
    descripcion = `$${itemDetail.precio}. ${document.getElementById("select").value}`
  };
 
 const metaImg = `${itemDetail.imagenes[0].replace("..", "https://mobilem.com.ar")}`
  return (
    <>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={itemDetail.titulo} />
    <meta
      property="og:description"
      content={descripcion}
    />
    <meta
      property="og:image"
      content={metaImg}
    />

      <div className='row'>
        <div className="card col-12 col-md-6 ps-5 pe-5" key={itemDetail.id}>

          <Carousel>
          {itemDetail.imagenes.map(img =>
          <div><img src={img}  alt={itemDetail.titulo} className="img-fluid" /></div>
          )}
            {/* <div><img src={itemDetail.img1} id="uno" alt="" className="img-fluid" /></div>
            <div><img src={itemDetail.img2} id="dos" alt="" className="img-fluid" /></div>
            <div><img src={itemDetail.img3} id="tres" alt="" className="img-fluid" /></div> */}
          </Carousel>
        </div>
        <div className="card datos col-12 col-md-6">
          <div>
            <h1>{itemDetail.titulo}</h1>
            <h2 >${itemDetail.precio}</h2>
          </div>
          <p >{itemDetail.descripcion}</p>
          <div>   <h4 >FORMA DE PAGO</h4>
            <FormaPago itemDetail={itemDetail} count={count} />

            <br /><br />
            <i className="d-inline">Envíos por la zona sin costo.
              <p><ModalCreditos /> créditos personales</p> </i>
          </div>
          <h4><ItemCount traerFormaPago={traerFormaPago} traerCount={traerCount} stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
            {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}</h4>

        </div>
      </div>
    </>)

}
