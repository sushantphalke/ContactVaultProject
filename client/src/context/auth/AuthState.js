import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LODED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
    
} from '../types';
const AuthState = (props) => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated:null, 
        loading:true,
        error:null,
    };


    const [state, dispatch] = useReducer(authReducer, initialState);
    
// Load User
// Resister user
// Login
// Logout
// clear errors

 
    return (
        <authContext.Provider
            value={{
                token:state.token,
                isAuthenticated:state.isAuthenticated,
                loading:state.loading,
                user:state.user,
                error:state.error
            }}  
        >
            {props.children}
        </authContext.Provider>
    );
};
export default AuthState;
