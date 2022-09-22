import logo from '../img/LogoNuevo.png';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dataBase } from '../firebaseConfig';


function Nav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionCategoria = collection(dataBase, 'Categorias');

    getDocs(collectionCategoria)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
          return {
            id: cat.id,
            ...cat.data()
          }
        });
        setCategories(categorias)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);


  return (
    <nav className="cajaNav navbar-dark navbar navbar-expand-md">
      <div className="burgerTop container-fluid mt-3 mt-md-0">
        <div className="bloqueLogo" id="1">
          <Link to={'/'} className="sombra navbar-brand mx-auto">
            <img src={logo} alt="logo de mobilem" className="img-fluid" />
          </Link>
        </div>
        <ul className="navbar-nav">
          <NavLink to={'/carrito'} className="btn"> <CartWidget /> </NavLink>
          {categories.map((cat) => (
            <NavLink key={cat.id} to={`categoria/${cat.categoria}`} className="btn categoria">
              {cat.categoria}
            </NavLink>))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

