import React from 'react'
import { Link } from 'react-router-dom'
export const Item = (
  {
    id = "",
    titulo = '',
    img1 = '',
    precio = 0,
    stock = 0
  }

) => {
  return (
    <div className="card col-3" key={id}>
      <p>{titulo}</p>
      <h5>${precio}</h5>
      <img src={img1} alt={`Foto de ${titulo}`} className='img-fluid' />
      <p>En stock {stock}</p>
      <Link to={`/detail/${id}`}>
        <buttom className='btn'>Ver detalles </buttom>
      </Link>
    </div>)
}
