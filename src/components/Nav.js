import logo from '../img/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

function Nav() {

  return (
    <nav id="menu" className="cajaNav navbar-dark navbar navbar-expand-md">
      <div className="burgerTop container-fluid mt-3 mt-md-0">
        <div className="bloqueLogo" id="1">
          <Link to={'/'} className="sombra navbar-brand mx-auto">
            <img src={logo} alt="logo de mobilem" className="img-fluid" />
          </Link>
        </div>
        <button
          id="button"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-flower1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to={'/carrito'} className=""> <CartWidget /> </NavLink>
            <NavLink to={'categoria/placares'} className=""> Placares </NavLink>
            <NavLink to={'categoria/sillones'} className="">Sillones</NavLink>
            <NavLink to={'categoria/colchones'} className="">Colchones</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

