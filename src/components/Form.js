import React, { useState } from "react";
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { dataBase } from "../firebaseConfig";
import Loader from './Loader';

const Form = ({ cart, total, clearCart, handleId }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [nombreCompleto, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [cel, setCel] = useState('');
    const [formaPago, setFormaPago] = useState('');

    const handleSubmit = (event) => {

        setIsLoading(true)
        event.preventDefault();

        const orden = {
            comprador: { nombre: nombreCompleto, email: mail, celular: cel, formaPago: formaPago },
            items: cart,
            total: total,
            date: serverTimestamp()
        };
        const ordersCollection = collection(dataBase, 'ordenes');
        addDoc(ordersCollection, orden).then((res) => {
            handleId(res.id);
            clearCart();
        });
    };

    const handleChangeName = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeMail = (event) => {
        setMail(event.target.value);
    };
    const handleChangeEntreCel = (event) => {
        setCel(event.target.value);
    };

    const handleChangeFormaPago = (event) => {
        setFormaPago(event.target.value);
    };

    return (
        <>
            {isLoading ? (<Loader></Loader>)
                : (<div className="">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" required placeholder="Nombre completo" name="nombreCompleto" value={nombreCompleto} onChange={handleChangeName} />
                        <input type="email" required placeholder="E-mail" name="mail" value={mail} onChange={handleChangeMail} />
                        <input type="tel" pattern="^[0-9]+$" minLength={10} title='Ingresa un numero de telefono válido, sin espacios, guiones, o parentesis' placeholder="Celular sin 0 ni 15" name="cel" value={cel} onChange={handleChangeEntreCel} />
                        <select name="formaPago" value={formaPago} onChange={handleChangeFormaPago}>
                            <option value="Opcion"></option>
                            <option value="Efectivo">Efectivo</option>
                            <option value="Tarjeta">Tarjeta</option>
                        </select>
                        <button className="btn">Comprar</button>
                    </form>
                </div>)}
        </>
    )
}
export default Form;