import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Form from "./Form";

const Cart = () => {
    const { cart, clearCart, clearProducto, } = useContext(CartContext);

    if (cart.length === 0) {
        return <h1>El carrito esta vacío</h1>
    } else {

        return (
            <div>
                <h1 className='mt-5'>  Esto es un carrito  </h1>
                <div>
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <h2>{producto.titulo} x {producto.cantidad}</h2>
                            <button className="btn" onClick={() => clearProducto(producto.id)}>
                                Eliminar Producto
                            </button>
                        </div>

                    ))}
                </div>
                <button className="btn" onClick={clearCart}>Vaciar Carrito</button>

                <Form />
            </div>
        );
    };
}

export default Cart;