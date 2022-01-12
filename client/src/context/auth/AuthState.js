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
const ContactState = (props) => {
    const initialState = {
        
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);
    

    //  add contact
    const addContact = (contact) => {
        contact.id = uuidv4;
        dispatch({ type: ADD_CONTACT, payload: contact });
    };
    // delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };
    // set current contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };
    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };
    // Update contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };
    // filter contacts
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };
    // clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER});
    };
    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered:state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter,
            }}
        >
            {props.children}
        </contactContext.Provider>
    );
};
export default ContactState;
