import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(1);
    let tope = stock;

    const sumar = () => {
        count < tope && setCount(count + 1);
    };
    const restar = () => {
        count > 0 && setCount(count - 1);
    };
    const irAlCarrito = () => {
        const irAlCarrito = document.getElementById('irAlCarrito');
        const agregarAlCarrito = document.getElementById('agregarAlCarrito');

        irAlCarrito.classList.remove('d-none')
        agregarAlCarrito.classList.add('d-none')

    };
    return (
        <div>
            <button className='btn' onClick={sumar}>+</button>
            <button className='btn' onClick={restar}>-</button>
            <p>Cantidad: {count} </p>
            <button className='btn' id='agregarAlCarrito' onClick={() => onAdd(count, irAlCarrito())}>Agregar al carrito</button>
            <Link to={'/carrito'} id='irAlCarrito' className='btn d-none'>Ir al carrito</Link>
        </div>
    );
};

export default ItemCount;