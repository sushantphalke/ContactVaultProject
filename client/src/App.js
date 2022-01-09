import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
const title = 'ContactVault';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <div className='App'>
                    <Navbar title={title} />
                    {/* <h1 className='navbar-btn'>ContactVault</h1> */}
                    <Route exact path='/'><Home /></Route>
                    <Route path='/About' ><About /></Route>
                    <div></div>
                </div>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
