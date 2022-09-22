import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;