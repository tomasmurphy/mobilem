import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext';

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <Main />
            </BrowserRouter>
        </CartProvider>
    );
};

export default App;