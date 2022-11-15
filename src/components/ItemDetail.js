import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import Carousel from './Carousel';
import ModalCreditos from './ModalCreditos';
import FormaPago from './FormaPago';
import Seo from './Head';

export const ItemDetail = ({ itemDetail }) => {
  const { addToCart, cantidadSeleccionada } = useContext(CartContext)

  const onAdd = (cantidad) => {
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

  const seisSinInteres = [1, 1.24, .87]
  const tresSinInteres = [1.21, 1.45, .93]
  const coeficientes = (itemDetail.categoria === "sillones") ? seisSinInteres : tresSinInteres


  const doceValue = Math.round(itemDetail.precio * coeficientes[1] / 12) * count,
  seisValue = Math.round(itemDetail.precio * coeficientes[0] / 6) * count,
  tresValue = Math.round(itemDetail.precio / 3) * count,
  personalValue = Math.round(itemDetail.precio / 4) * count,
  contadoValue = Math.round(itemDetail.precio * coeficientes[2] * count);

  const doce = `12 cuotas de $${doceValue} con tarjeta de credito bancaria `;
  const seis = `6 cuotas de $${seisValue} con tarjeta de credito bancaria `;
  const tres = `3 cuotas de $${tresValue} con tarjeta de credito bancaria `;
  const personal = `4 cuotas de $${personalValue} con crédito personal `;
  const contado = `Efectivo, débito, transferencia: $${contadoValue}`;
  const noBancarias = "Tarjetas de crédito no bancarias consultar.";



  return (
    <>
      <Seo title={itemDetail.titulo}
        description={itemDetail.precio}
        image={`${itemDetail.imagenes[0].replace("..", `${window.location.origin}`)}`}
        pathSlug={window.location.href}
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
            <h2> ${contadoValue} <span className="tachado">${itemDetail.precio*count}</span>  </h2>
          </div>
          <p className='mt-3'>{itemDetail.descripcion}</p>
          <div className='mt-3'>   <h4 >FORMA DE PAGO</h4>
            <FormaPago formasPago={[doce, seis, tres, personal, contado, noBancarias]} />

            <br />
            <i className="d-inline text-center text-md-end"><p>Envíos por la zona sin costo.</p>
              <p><ModalCreditos /> créditos personales</p> </i>
            <hr />

          </div>
          <h4 className='text-center text-md-start mt-3'><ItemCount traerFormaPago={traerFormaPago} traerCount={traerCount} stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
          </h4>

        </div>
      </div>
    </>)

}
