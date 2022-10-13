import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import Cart from './Cart';
import ItemDetailContent from './ItemDetailContent';
import Contactos from './Contactos'
import Nosotros from './Nosotros';
import Home from './Home'

const Main = () => {

    return (
        <div className="container-fluid">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categoria/' element={<ItemListContainer />} />
                <Route path='/categoria/:nombreCategoria' element={<ItemListContainer />} />
                <Route path='/detalle/:idProducto' element={<ItemDetailContent />} />
                <Route path='/carrito' element={<Cart />} />
                <Route path='/contacto' element={<Contactos />} />
                <Route path='/nosotros' element={<Nosotros />} />
            </Routes>
        </div>
    );
};

export default Main;
