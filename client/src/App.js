import Navbar from './components/layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
const title = 'ContactVault';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <div className='App'>
                    <Navbar title={title} />
                    {/* <h1 className='navbar-btn'>ContactVault</h1> */}
                    <div></div>
                </div>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
