import React from 'react';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContent from './ItemDetailContent';

const Main = () => {
    return (
        <main className="mt-5 container-fluid">
            <ItemListContainer saludo="Bienvenidos a Mobilem" />
            <ItemDetailContent/>
        </main>
    );
};

export default Main;
