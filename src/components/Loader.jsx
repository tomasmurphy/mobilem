import React from 'react';
import logo from '../img/logo.png';

const Loader = () => {

    return (
        <div className="contenido">
            <div className="spinner">
                <img src={logo} alt="logo de mobilem" className="img-fluid" />
            </div>
        </div>
    );
};

export default Loader;
