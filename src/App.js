import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'

const App = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Main />
        </BrowserRouter>
    );
};

export default App;