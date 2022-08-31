import logo from '../img/logo.png';
import {CardWidget} from './CardWidget';
import { Link, NavLink } from 'react-router-dom';
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
        <NavLink to={'/carrito'} className=""> <CardWidget/> </NavLink>
          <NavLink to={''} className='dropdown'>
          <NavLink to={''} className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </NavLink>
          <ul className="dropdown-menu">
          
          <li> <Link to={'/'} className="dropdown-item">Todos los productos</Link></li>  
            <li> <Link to={'categoria/placares'} className="dropdown-item"> Placares </Link></li>
            <li> <Link to={'categoria/sillones'} className="dropdown-item">Sillones</Link></li>
            <li> <Link to={'categoria/colchones'} className="dropdown-item">Colchones</Link></li>
          </ul>
          </NavLink>
        <NavLink to={'/nosotros'}> Nosotros </NavLink>
                
        
      </ul>         
       </div>
        </div>
    </nav>        
    );
  }
  
  export default Nav;
  
