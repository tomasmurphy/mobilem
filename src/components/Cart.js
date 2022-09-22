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
        return <h1>Gracias por comprar!<br /> Tu número de seguimiento de compra es:<br /> {idCompra}</h1>;
    }
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
                    <ModalCompra cart={cart}
                        total={total}
                        clearCart={clearCart}
                        handleId={handleId}></ModalCompra>
                </h2>
            </div>
        );
    };
}

export default Cart;