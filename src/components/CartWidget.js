import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {
    const { totalCart } = useContext(CartContext);
    return (
        <>
            <i className="bi bi-bag">{(totalCart() === 0) ? '' : totalCart()}</i>
        </>
    )
}