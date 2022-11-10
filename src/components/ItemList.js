import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {

   return (
      <>
         {
            items.map(item =>
               <div className='card col-12 col-md-3'>
               <Item
                  key={item.id}
                  id={item.id}
                  imagenes={item.imagenes}
                  titulo={item.titulo}
                  stock={item.stock}
                  precio={item.precio} />
                  </div>
            )
         }
      </>
   )
};