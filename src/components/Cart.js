import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Form from "./Form";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, clearProducto, totalPrecio } = useContext(CartContext);

    if (cart.length === 0) {
        return <div>
            <h1>El carrito esta vacío</h1>
            <Link to="/" className="btn">
                Ver productos
            </Link>
        </div>
    } else {

        return (
            <div>
                <h1 className='mt-5'>  Esto es un carrito  </h1>
                <div>
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <div>{producto.titulo} ${producto.precio} x {producto.cantidad} = ${producto.cantidad * producto.precio}
                                <button className="btn" onClick={() => clearProducto(producto.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
                <h2>Total carrito ${totalPrecio()}
                    <button className="btn" onClick={clearCart}>
                        Vaciar Carrito<i className="bi bi-trash"></i>
                    </button>
                </h2>
                <Form />
            </div>
        );
    };
}

export default Cart;