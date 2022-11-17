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
  var formaPago = ""
  const handleChangeValue = () => {
    let e = document.getElementById("select");
    formaPago = (e.value)
  };

  const doce = `12 cuotas de $${Math.round(itemDetail.formaPago.doceValue / 12 * count)} con tarjeta de credito bancaria `;
  const seis = `6 cuotas de $${Math.round(itemDetail.formaPago.seisValue / 6 * count)} con tarjeta de credito bancaria `;
  const tres = `3 cuotas de $${Math.round(itemDetail.formaPago.tresValue / 3 * count)} con tarjeta de credito bancaria `;
  const personal = `4 cuotas de $${Math.round(itemDetail.formaPago.personalValue / 4 * count)} con crédito personal `;
  const contado = `Efectivo, débito, transferencia: $${Math.round(itemDetail.formaPago.contadoValue * count)}`;
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
            <h2> ${itemDetail.precio} </h2>
          </div>
          <p className='mt-3'>{itemDetail.descripcion}</p>
          <div className='mt-3'>   <h4 >FORMA DE PAGO</h4>
            <FormaPago
              formasPago={[doce, seis, tres, personal, contado, noBancarias]}
              traerFormaPago={handleChangeValue} />

            <br />
            <i className="d-inline text-center text-md-end"><p>Envíos por la zona sin costo.</p>
              <p><ModalCreditos />{formaPago} créditos personales</p> </i>
            <hr />
          </div>
          <h4 className='text-center text-md-start mt-3'><ItemCount traerFormaPago={handleChangeValue} traerCount={traerCount} stock={itemDetail.stock} initial={(cantidadEnCart === undefined) ? 1 : cantidadEnCart} onAdd={onAdd} />
          </h4>
        </div>
      </div>
    </>)

}
