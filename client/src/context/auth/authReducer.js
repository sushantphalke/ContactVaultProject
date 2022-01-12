import AuhtState from "./AuthState";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LODED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
    
} from '../types';
export default ()=>{
  switch (action.type) {
    case REGISTER_SUCCESS :
      return {
        
      }
      
   
  
    default:
      return state;
  }
}