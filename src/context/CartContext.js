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
                    cantidad: producto.cantidad + cantidad
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

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, clearProducto }}>
            {children}
        </CartContext.Provider>
    );
}