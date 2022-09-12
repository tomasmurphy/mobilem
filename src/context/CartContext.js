import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }])
        }

    }

    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id);
    }

    const sumarCantidad = (item, cantidad) => {
        const cartActualizado = cart.map((producto) => {
            if (producto.id === item.id) {
                const productoActualizado = {
                    ...producto,
                    cantidad: cantidad
                }
                return productoActualizado
            } else {
                return producto
            }
        });
        setCart(cartActualizado)
    }

    const clearCart = () => {
        setCart([]);
    }

    const clearProducto = (id) => {
        const cartFiltrado = cart.filter((producto) => producto.id !== id)
        setCart(cartFiltrado)
    }
    const totalCart = () => {
        let acumulador = 0;
        cart.forEach((producto) => {
            acumulador += producto.cantidad;
        });
        return acumulador;
    };


    const totalPrecio = () => {
        let acumulador = 0;
        cart.forEach((producto) => {
            acumulador += producto.cantidad * producto.precio;
        });
        return acumulador;
    };

    const cantidadSeleccionada = (id) => {
        const producto = cart.find((prod) => prod.id === id);
        return producto?.cantidad;
    };


    return (
        <CartContext.Provider value={{
            cart, addToCart, clearCart, clearProducto, totalCart, totalPrecio, cantidadSeleccionada
        }}>
            {children}
        </CartContext.Provider>
    );
}