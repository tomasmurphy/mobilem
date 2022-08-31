import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Card from './Card';
import ItemDetailContent from './ItemDetailContent';
import Nosotros from './Nosotros';

const Main = () => {
    return (
        <main className="mt-5 container-fluid">
            <Routes>
            <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Mobilem" />}/>
            <Route path='/categoria/:nombreCategoria' element={<ItemListContainer/>}/>
            <Route path='/detail/:idProducto' element={<ItemDetailContent/>}/>
            <Route path='/carrito' element={<Card/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            </Routes>
        </main>
    );
};

export default Main;
