import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
const Login = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const { email, password } = user;
    const onChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please Fill In All Fields', 'danger');
        } else {
            login({
                email,
                password,
            });
        }
    };
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email' className=''>
                        Email Address *
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='email address'
                        value={email}
                        onChange={onChange}
                        required
                    ></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className=''>
                        Password *
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={onChange}
                        required
                        minLength='6'
                    ></input>
                </div>

                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};
export default Login;
