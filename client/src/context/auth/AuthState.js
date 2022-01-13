import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    USER_LOADED,
} from '../types';
 const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/user');
            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
    };
    // Resister user
    const register = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            loadUser();
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg,
            });
        }
    };
    // Login
    const login = () => {
        console.log('login');
    };
    // Logout
    const logout = () => {
        console.log('logout');
    };
    // clear errors
    const clearErrors = () => {
        dispatch({ type: CLEAR_ERRORS });
    };

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                login,
                logout,
                clearErrors,
                loadUser,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};
export default AuthState;
