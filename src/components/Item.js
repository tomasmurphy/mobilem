import React from 'react'
import { Link } from 'react-router-dom'

export const Item = (
  {
    id = "",
    titulo = '',
    img1 = '',
    precio = 0,
  }

) => {
  const tituloId = titulo.replace(" ", "_");
  return (
    <div className="card" key={id}>
      <Link to={`/detalle/${id}#${tituloId}`} className='link'>
        <img src={img1} alt={`Foto de ${titulo}`} className='img-fluid mx-0 px-0' />
        <h4 className='text-center mt-2'>{titulo}</h4>
        <p className='text-center'>${precio}</p>
      </Link>
    </div>)
}
