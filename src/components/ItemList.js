import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {

   return (
      <div className='row'>
         {
            items.map(item => <Item key={item.id} img1={item.img1} 
            titulo={item.titulo} stock={item.stock} precio={item.precio} />)
         }
      </div>
   )
};

