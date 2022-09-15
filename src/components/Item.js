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
    <div className="card col-12 col-md-3" key={id}>
      <Link to={`/detail/${id}`} className='link'>
        <img src={img1} alt={`Foto de ${titulo}`} className='img-fluid mx-0 px-0' />
        <h4 className='text-center mt-2'>{titulo}</h4>
        <p className='text-center'>${precio}</p>
      </Link>
    </div>)
}
