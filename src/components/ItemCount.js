import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ItemCount = ({ stock, onAdd, initial, traerCount, traerFormaPago }) => {
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
    traerCount(count)
    var formaPago = ""
    const handleChangeValue = () => {
        var e = document.getElementById("select");
        formaPago = e.value
        traerFormaPago(formaPago)
    };


    return (
        <>
            <div count={count} id='agregarAlCarrito'>
                <Link to={'/carrito'} className='boton' onClick={() => onAdd(count, handleChangeValue())}>Agregar al carrito</Link>
                <button className='btnCant' onClick={restar}>-</button>
                {count}
                <button className='btnCant' onClick={sumar}>+</button>
            </div>
        </>
    );
};

export default ItemCount;