import React, { useState } from "react";
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { dataBase } from "../firebaseConfig";
import Loader from './Loader';

const Form = ({ cart, total, clearCart, handleId }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [nombreCompleto, setNombre] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tel, setTel] = useState('');
  
    const handleSubmit = (event) => {
  // eslint-disable-next-line no-restricted-globals
  let celu = screen.width < 990 ? "api" : "web";
  let mensaje = ""
  

        setIsLoading(true)
        event.preventDefault();
        cart.map(prod =>
            mensaje += `${prod.titulo} x ${prod.cantidad}. ${prod.formaPago} // `
        )
        const whatsapp = `Hola Mobilem! Soy ${nombreCompleto} de ${localidad} (${direccion}) por la compra de ${mensaje}` 
        let linkCompra = `https://${celu}.whatsapp.com/send?phone=5491168475475&text=${whatsapp}`;
        const orden = {
            comprador: { nombre: nombreCompleto, localidad: localidad, direccion: direccion},
            items: mensaje,
            total: total,
            date: serverTimestamp()
        };
        const ordersCollection = collection(dataBase, 'ordenes');
        addDoc(ordersCollection, orden).then((res) => {
            handleId(res.id);
            clearCart();
        });
        window.open(linkCompra, '_blank')
     };
    
    

    const handleChangeName = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeLocalidad = (event) => {
        setLocalidad(event.target.value);
    };
    const handleChangeDireccion = (event) => {
        setDireccion(event.target.value);
    };
    const handleChangeTel = (event) => {
        setTel(event.target.value);
    };


    return (
        <>
            {isLoading ? (<Loader></Loader>)
                : (<div className="">
                    <form className="form" action="" onSubmit={handleSubmit}>
                        <input type="text" required placeholder="Nombre completo" name="nombreCompleto" value={nombreCompleto} onChange={handleChangeName} />
                        <input type="text" required placeholder="Localidad" name="localidad" value={localidad} onChange={handleChangeLocalidad} />
                        <input type="text" placeholder="Dirección" name="direccion" value={direccion} onChange={handleChangeDireccion} />
                        <input type="text" placeholder="Celular" name="tel" value={tel} onChange={handleChangeTel} />
                        <button className="boton">Comprar</button>
                        </form>
                </div>)}
        </>
    )
}
export default Form;