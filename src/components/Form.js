import React, { useState } from "react";

const Form = () => {
    const [nombreCompleto, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [entreCalle1, setEntreCalle1] = useState('');
    const [entreCalle2, setEntreCalle2] = useState('');
    const [formaPago, setFormaPago] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const handleChangeName = (event) => {
        setNombre(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setDireccion(event.target.value);
    };
    const handleChangeEntreCalle1 = (event) => {
        setEntreCalle1(event.target.value);
    };
    const handleChangeEntreCalle2 = (event) => {
        setEntreCalle2(event.target.value);
    };
    const handleChangeFormaPago = (event) => {
        setFormaPago(event.target.value);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre completo" name="nombreCompleto" value={nombreCompleto} onChange={handleChangeName} />
                <input type="text" placeholder="Dirección" name="direccion" value={direccion} onChange={handleChangeLastName} />
                <input type="text" placeholder="Entre calle" name="entreCalle1" value={entreCalle1} onChange={handleChangeEntreCalle1} />
                <input type="text" placeholder="y calle" name="entreCalle2" value={entreCalle2} onChange={handleChangeEntreCalle2} />
                <select name="formaPago" value={formaPago} onChange={handleChangeFormaPago}>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Tarjeta">Tarjeta</option>
                </select>
                <button className="btn">Comprar</button>
            </form>
        </div>
    )
}
export default Form;