import React from 'react'
import { Link } from 'react-router-dom'
// const onAdd = (param) => {
//     alert(param);
// };
export const Item = (
    {
    id = 1,
    titulo = 'Producto de testeo',
    img1 = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    precio = 600,
    stock = 10
}

) => {
  return (
<div className="card col-3" key={id}>
                <p>{titulo}</p>
                <h5>${precio}</h5>
                <img src={img1} alt={`Foto de ${titulo}`} className='img-fluid' />
                <p>En stock {stock}</p>
                <Link to={'/detail'}>
                <buttom className='btn'>Ver detalles </buttom>
                </Link>
            </div>  )
}
