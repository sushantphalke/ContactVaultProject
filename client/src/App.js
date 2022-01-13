import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Fragment } from 'react';
import ContactState from './context/contact/ContactState';
import AuhtState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/login';
const title = 'ContactVault';

const App = () => {
    return (
        <AuhtState>
            <ContactState>
                <Router>
                    <Fragment>
                        <Switch>
                            <div className='container'>
                                <Navbar title={title} />
                                {/* <h1 className='navbar-btn'>ContactVault</h1> */}
                                <Route exact path='/' component={Home}></Route>
                                <Route path='/About' component={About}></Route>
                                <Route path='/register' component={Register}></Route>
                                <Route path='/login' component={Login}></Route>
                                <div></div>
                            </div>
                        </Switch>
                    </Fragment>
                </Router>
            </ContactState>
        </AuhtState>
    );
};

export default App;
