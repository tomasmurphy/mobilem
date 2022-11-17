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

    return (
        <>
            <div count={count} id='agregarAlCarrito'>
                <Link to={'/carrito'} className='boton me-md-2' onClick={() => onAdd(count, traerFormaPago())}>Agregar al carrito</Link>
                <div>
                <button className='btnCant' onClick={ () => restar(count, traerFormaPago())}>-</button>
                {count}
                <button className='btnCant' onClick={ () => sumar(count, traerFormaPago())}>+</button>
                </div>
            </div>
        </>
    );
};

export default ItemCount;