import React from 'react';
import ItemListContainer from '../components/ItemListContainer';

const Main = () => {
    return (
        <main className="mt-5 container-fluid">
            <ItemListContainer saludo="Bienvenidos a Mobilem" />
        </main>
    );
};

export default Main;
