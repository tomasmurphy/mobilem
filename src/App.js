import Nav from './components/Nav';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <NavMenu />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;