import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import ModalCompra from "./ModalCompra";

const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clearCart, clearProducto, totalPrecio } = useContext(CartContext);

    const total = totalPrecio()
    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <div className="cart mt-3">
            <h1>Gracias por tu compra!</h1>
            <p> Tu código de seguimiento es: <span className="negrita">{idCompra}</span> </p>
        </div>
    }
    if (cart.length === 0) {
        return <div className="cart mt-3">
            <h1>El carrito esta vacío</h1>
            <div className="botonera">
                <Link to="/categoria" className="boton">
                    Ver todos los productos
                </Link>
            </div>
        </div>
    } else {

        return (
            <div className="cart mt-3">
                <h1 className=''>  Productos seleccionados   </h1>

                <div>
                    {cart.map((producto) => (
                        <div key={producto.id}>
                            <div>{producto.titulo} ${producto.precio} x {producto.cantidad} = ${producto.cantidad * producto.precio} / {producto.formaPago}
                            <button className="btn" onClick={() => clearProducto(producto.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>

                            <hr />

                        </div>
                    ))}

                </div>
                <h2 className="text-center mt-4 mb-4">Total carrito ${totalPrecio()}</h2>
                <div className="botonera">
                    <Link to="/categoria" className="boton vaciar">
                        Agregar mas productos
                    </Link>
                    <ModalCompra cart={cart}
                        total={total}
                        clearCart={clearCart}
                        handleId={handleId}></ModalCompra>
                </div>
            </div>
        );
    };
}

export default Cart;