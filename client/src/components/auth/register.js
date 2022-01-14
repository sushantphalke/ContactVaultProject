import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = user;
    const onChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    const onSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all required fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords dosent matched', 'danger');
        } else {
            register({
                name,
                email,
                password,
            });
            
        }
    };
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='name' className=''>
                        Name *
                    </label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={onChange}
                        required
                    ></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email' className=''>
                        Email Address *
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
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
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                        required
                        minLength='6'
                    ></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password2' className=''>
                        Confirm Password *
                    </label>
                    <input
                        type='password'
                        name='password2'
                        placeholder='Confirm Password '
                        value={password2}
                        onChange={onChange}
                    ></input>
                </div>
                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
                <Link to='/login'>
                    {' '}
                    <button className='btn btn-primary btn-block'>
                        Already a user, Login here
                    </button>
                </Link>
            </form>
        </div>
    );
};
export default Register;
