import Nav from './components/Nav';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { BannerPromo } from "./components/BannerPromo";
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
    const helmetContext = {};
    return (
        <HelmetProvider context={helmetContext}>
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <NavMenu />
                <Main />
                <BannerPromo />
            </BrowserRouter>
        </CartProvider>
        </HelmetProvider>
    );
};


export default App;