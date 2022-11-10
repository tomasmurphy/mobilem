import React from "react";
import { Form } from "react-bootstrap";

const FormaPago = ({ itemDetail, count }) => {
  const seisSinInteres = [1, 1.24,  .87 ]
  const tresSinInteres = [1.21, 1.45, .93 ]
  const coeficientes = (itemDetail.categoria === "sillones")? seisSinInteres : tresSinInteres
 

  const doce = `12 cuotas de $${
    Math.round(itemDetail.precio * coeficientes[1] / 12)  * count
  } con tarjeta de credito bancaria `;
  const seis = `6 cuotas de $${
    Math.round(itemDetail.precio * coeficientes[0] / 6) * count
  } con tarjeta de credito bancaria `;
  const tres = `3 cuotas de $${Math.round(
    (itemDetail.precio / 3) * count
  )} con tarjeta de credito bancaria `;
  const personal = `4 cuotas de $${Math.round(
    (itemDetail.precio / 4) * count
  )} con crédito personal `;
  const contado = `Efectivo, débito, transferencia: $${Math.round(
    itemDetail.precio * coeficientes[2] * count
  )}`;
  const noBancarias = "Tarjetas de crédito no bancarias consultar.";

  return (
    <>
      <Form.Select id="select" aria-label="Default select example">
        <option value={doce}>{doce}</option>
        <option value={seis}>{seis}</option>
        <option value={tres}>{tres}</option>
        <option value={personal}>{personal}</option>
        <option value={contado}>{contado}</option>
        <option value={noBancarias}>{noBancarias}</option>
      </Form.Select>
    </>
  );
};

export default FormaPago;
