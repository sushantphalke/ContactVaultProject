import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Register = () => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

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
            [e.target.name]: e.target.value
        });
    const onSubmit = (e) => {
        e.preventDefault();
        if (name == '' || email == '' || password == '') {
            setAlert('Please enter all required fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords dosent matched', 'danger');
        } else {
            console.log('Register submit');
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
            </form>
        </div>
    );
};
export default Register;
