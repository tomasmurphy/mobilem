import logo from '../img/logo.png';
import {CardWidget} from './CardWidget';

function Nav() {
    return (
<nav id="menu" className="cajaNav navbar-dark navbar navbar-expand-md">
      <div className="burgerTop container-fluid mt-3 mt-md-0">
        <div className="bloqueLogo" id="1">
          <a className="sombra navbar-brand mx-auto" href="#menu">
            <img src={logo} alt="logo de mobilem" className="img-fluid" />
          </a>
          
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
        <li className="nav-item"><a className="nav-link" href="#menu"> <CardWidget/></a></li>
        <li className="nav-item dropdown">
          
          <a className="nav-link dropdown-toggle" href="#menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#menu">Placares</a></li>
            <li><a className="dropdown-item" href="#menu">Sillones</a></li>
            <li><a className="dropdown-item" href="#menu">Sommiers</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#menu">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#menu">Contacto</a>
        </li>
        
      </ul>         
       </div>
        </div>
    </nav>        
    );
  }
  
  export default Nav;
  
