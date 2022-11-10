import Nav from './components/Nav';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { BannerPromo } from "./components/BannerPromo";

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <NavMenu />
                <Main />
                <BannerPromo />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;