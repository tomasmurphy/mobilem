import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../firebaseConfig";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

function NavMenu() {
  const [categories, setCategories] = useState([]);
  let location = useLocation();
    var activo = ''
    location.pathname.includes('categoria') ? activo = 'active mx-0': activo="mx-0"
    
  useEffect(() => {
    const collectionCategoria = collection(dataBase, "Categorias");
    getDocs(collectionCategoria)
      .then((res) => {
        const categorias = res.docs.map((cat) => {
          return {
            id: cat.id,
            ...cat.data(),
          };
        });
        setCategories(categorias);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);

  return (
    <div className="navMenu">
      <div className="navbarContainer">
        <Dropdown className="d-inline">
          <Dropdown.Toggle as="text" id="dropdown">
            <Link to="#" className={activo} >
              Catálogo
            </Link>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {categories.map((cat) => (
              <Dropdown.Item as="div">
                <NavLink
                  key={cat.id}
                  to={`categoria/${cat.categoria}`}
                  className="categoria"
                >
                  {cat.categoria}
                </NavLink>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <NavLink to={"/nosotros"} className="">
          Nosotros
        </NavLink>
        <NavLink to={"/contacto"} className="">
          Contacto
        </NavLink>
      </div>
    </div>
    // <nav className="cajaNav navbar-dark navbar navbar-expand-md">
    //   <div className="burgerTop container-fluid mt-3 mt-md-0">
    //     <div className="bloqueLogo" id="1">
    //       <Link to={'/'} className="sombra navbar-brand mx-auto">
    //         <img src={logo} alt="logo de mobilem" className="img-fluid" />
    //       </Link>
    //     </div>
    //     <ul className="navbar-nav">
    //       <NavLink to={'/carrito'} className="btn"> <CartWidget /> </NavLink>
    //       {categories.map((cat) => (
    //         <NavLink key={cat.id} to={`categoria/${cat.categoria}`} className="btn categoria">
    //           {cat.categoria}
    //         </NavLink>))}
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavMenu;
