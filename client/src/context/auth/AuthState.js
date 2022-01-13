import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LODED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
    
} from '../types';
import { application } from 'express';
const AuthState = (props) => {
    const initialState = {
        token : localStorage.getItem('token'),
        isAuthenticated:null, 
        loading:true,
        error:null,
    };


    const [state, dispatch] = useReducer(authReducer, initialState);
    
// Load User
const loadUser =async()=>{
//    to do add token into a global headers
try {
    const res= await axios.get('/api/auth');
    dispatch({type:USER_LODED,payload:res.data});
    
} catch (err) {
    dispatch({type:AUTH_ERROR}); 
}
}
// Resister user
const register=async(formData)=>{
const config={
    headers:{
        'Content-Type':'application/json'
    }
};  
try {
    const res=await axios.post('/api/users',formData,config);
}catch(err){
    dispatch({type:AUTH_ERROR}); 
}
}
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
                error:state.error,
                loadUser,
                register
            }}  
        >
            {props.children}
        </authContext.Provider>
    );
};
export default AuthState;
