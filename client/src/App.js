import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Fragment } from 'react';
import ContactState from './context/contact/ContactState';
import AuhtState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/login';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
// import PrivateRoute from './components/routing/PrivateRoute';
const title = 'ContactVault';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}
const App = () => {
    return (
        <AuhtState>
            <ContactState>
                <AlertState>
                    <Router>
                        <Fragment>
                            <Navbar title={title} />
                            <div className='container'>
                                <Alerts />
                                <Switch>
                                    <Route
                                        exact
                                        path='/'
                                        component={Home}
                                    ></Route>
                                    <Route
                                        path='/About'
                                        component={About}
                                    ></Route>
                                    <Route
                                        path='/register'
                                        component={Register}
                                    ></Route>
                                    <Route
                                        path='/Login'
                                        component={Login}
                                    ></Route>
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertState>
            </ContactState>
        </AuhtState>
    );
};

export default App;
