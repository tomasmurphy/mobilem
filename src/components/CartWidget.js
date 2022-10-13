import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {
    const { totalCart } = useContext(CartContext);
    return (
        <>
            {(totalCart() === 0) 
            ? <i className="bi bi-cart"></i> 
            : (<i className="bi bi-cart-check"><span className="d-inline nroCart">{totalCart()}</span></i>)
            }
        </>
    )
}