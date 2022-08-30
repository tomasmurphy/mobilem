import React from 'react'
import ItemCount from './ItemCount'


export const ItemDetail = (
    {
    id = 100,
    titulo = 'Producto de testeo',
    img1 = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    img2 = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    img3 = 'https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg',
    precio = 600,
    stock = 10,
    descripcion = "Descripcion de un producto de testeo"
}

) => {
  return (
<div className="card col-12" key={id}>
                <p>{titulo}</p>
                <h5>${precio}</h5>
                <div className='row'>
                <img src={img1} alt={`Foto de ${titulo}`} className='col-4 img-fluid' />
                <img src={img2} alt={`Foto de ${titulo}`} className='col-4 img-fluid' />
                <img src={img3} alt={`Foto de ${titulo}`} className='col-4 img-fluid' />
                </div>
                <p>{descripcion}</p>
                <p>En stock {stock}</p>
                <ItemCount stock={stock}/>
            </div>  )
}
