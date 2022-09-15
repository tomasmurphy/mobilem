import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Cart from './Cart';
import ItemDetailContent from './ItemDetailContent';
import FinalizarCompra from './FinalizarCompra';

const Main = () => {

    return (
        <main className="container-fluid">
            <Routes>
                <Route path='/' element={<ItemListContainer saludo="Bienvenidos a Mobilem" />} />
                <Route path='/categoria/:nombreCategoria' element={<ItemListContainer />} />
                <Route path='/detail/:idProducto' element={<ItemDetailContent />} />
                <Route path='/carrito' element={<Cart />} />
                <Route path='/finalizarCompra' element={<FinalizarCompra />} />
            </Routes>
        </main>
    );
};

export default Main;
