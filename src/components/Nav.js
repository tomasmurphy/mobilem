import logo from '../img/LogoNuevo.png';
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
        <ul className="navbar-nav">
          <NavLink to={'/carrito'} className="btn"> <CartWidget /> </NavLink>
          <NavLink to={'categoria/placares'} className="btn"> Placares </NavLink>
          <NavLink to={'categoria/sillones'} className="btn">Sillones</NavLink>
          <NavLink to={'categoria/colchones'} className="btn">Colchones</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

