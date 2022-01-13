import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;
    const onChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Login submit');
    };
    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email' className=''>
                        Email Address
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
                        Password
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
