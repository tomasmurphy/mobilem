import logo from '../img/LogoNuevo.png';
import { Link} from 'react-router-dom';
import { CartWidget } from './CartWidget';

function Nav() {

  return (
    <nav >
      <div className='navbarContainer row'>
        <div className='navRedes'>
          <a href="https://www.facebook.com/mobilem.online" rel="noopener noreferrer" target="_blank">
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/mobilemarg/"
            target="_blank"
            rel="noopener noreferrer"
          ><i class="bi bi-instagram"></i></a>
        </div>

        <Link to={'/'} className='navLogo'>
          <img
            src={logo}
            alt="Mobilem logo"
            className='img-fluid'
          />
        </Link>
        <Link to={'/carrito'} className="navCart"> <CartWidget /> </Link>

      </div>
    </nav>

  );
}

export default Nav;

