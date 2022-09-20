import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext';

// CARGA MASIVA DE PRODUCTOS
// import { collection, addDoc } from 'firebase/firestore';
// import { dataBase } from './firebaseConfig';
// import { productos } from './mock/productos'
// const ref = collection(dataBase, "productos")
// productos.map((prod) => {
//     addDoc(ref, prod)
// });
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