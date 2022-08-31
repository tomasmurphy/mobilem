import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);

    let tope = stock;

    const sumar = () => {
        count < tope && setCount(count + 1);
    };
    const restar = () => {
        count > 0 && setCount(count - 1);
    };

    return (
        <div>
            <button className='btn' onClick={sumar}>+</button>
            <button className='btn' onClick={restar}>-</button>
            <p>Cantidad: {count} </p>
            <Link to={'/carrito'} className='btn'>Agregar al carrito</Link>
        </div>
    );
};

export default ItemCount;