import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Cart from './Cart';
import ItemDetailContent from './ItemDetailContent';

const Main = () => {

    return (
        <main className="container-fluid">
            <Routes>
                <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Mobilem" />} />
                <Route path='/categoria/:nombreCategoria'  element={<ItemListContainer />} />
                <Route path='/detalle/:idProducto' element={<ItemDetailContent />} />
                <Route path='/carrito' element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;
