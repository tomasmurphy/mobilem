import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial);
    useEffect(() => {
        setCount(initial);
    }, [initial]);

    let tope = stock;

    const sumar = () => {
        count < tope && setCount(count + 1);
    };
    const restar = () => {
        count > 1 && setCount(count - 1);
    };
    const irAlCarrito = () => {
        const irAlCarrito = document.getElementById('irAlCarrito');
        const agregarAlCarrito = document.getElementById('agregarAlCarrito');

        irAlCarrito.classList.remove('d-none')
        agregarAlCarrito.classList.add('d-none')

    };
    return (
        <>
            <div id='agregarAlCarrito'>
                <button className='btn' onClick={restar}>-</button>
                <button className='btn' onClick={sumar}>+</button>
                <p>Cantidad: {count} </p>
                <button className='btn' onClick={() => onAdd(count, irAlCarrito())}>Agregar al carrito</button>
            </div>
            <div id='irAlCarrito' className='d-none'>
                <Link to={'/carrito'} className='btn'>Ir al carrito</Link>
            </div>
        </>
    );
};

export default ItemCount;