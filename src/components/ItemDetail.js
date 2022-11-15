import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Carousel from './Carousel';
import ModalCreditos from './ModalCreditos';
import FormaPago from './FormaPago';
import Seo from './Head';

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
  let formaPago = "";

  const traerFormaPago = (value) => {
    formaPago = value
  };
  
  const traerContado = (value) => {
    let contado = value
    console.log(contado)
    return contado
  };

  const URLdomain = window.location.origin;
  const metaImg = `${itemDetail.imagenes[0].replace("..", `${URLdomain}`)}`
  const URL = window.location.href;

  return (
    <>
    <Seo title={itemDetail.titulo} 
    description={itemDetail.precio}
    image = {metaImg}
    pathSlug={URL} 
    keywords={"llaves"}
    />
        
      <div className='row'>
        <div className="card col-12 col-md-6 ps-md-5 pe-md-5 pe-3 ps-3 mt-3" key={itemDetail.id}>

          <Carousel>
            {itemDetail.imagenes.map(img =>
              <div><img src={img} alt={itemDetail.titulo} className="img-fluid" /></div>
            )}
          </Carousel>
        </div>
        <div className="card datos mt-3 col-12 col-md-6">
          <div>
            <h1>{itemDetail.titulo}</h1>
            <h2> <span className="tachado">${traerContado()}</span>${itemDetail.precio}</h2>
          </div>
          <p  className='mt-3'>{itemDetail.descripcion}</p>
          <div className='mt-3'>   <h4 >FORMA DE PAGO</h4>
            <FormaPago traerContado={traerContado} itemDetail={itemDetail} count={count} />

            <br />
            <i className="d-inline text-center text-md-end"><p>Envíos por la zona sin costo.</p>
              <p><ModalCreditos /> créditos personales</p> </i>
              <hr />

          </div>
                    <h4 className='text-center text-md-start mt-3'><ItemCount traerFormaPago={traerFormaPago} traerCount={traerCount} stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
            {cantidad === 0 ? <p></p> : <p>Seleccionaste {cantidad} productos</p>}</h4>

        </div>
      </div>
    </>)

}
