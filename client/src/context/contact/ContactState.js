import React, { useReducer } from 'react';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
} from '../types';
const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'sushant phalke',
                email: 'sushantphalke@gov.world',
                phone: '34343434434',
                type: 'Professional',
            },
            {
                id: 2,
                name: 'tillu marchant',
                email: 'tillumarchant@bhikari.com',
                phone: '7696900676',
                type: 'Personal',
            },
            {
                id: 3,
                name: 'pablovisco',
                email: 'pablovisco@millionaire.com',
                phone: '6798876976',
                type: 'Personal',
            },
            {
                id: 4,
                name: 'narendramodi',
                email: 'narendramodi@420.gov.in',
                phone: '9022664334',
                type: 'Personal',
            },
        ],
        current: null,
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
    // update contact
    // filter contacts
    // clear filter
    return (
        <contactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
            }}
        >
            {props.children}
        </contactContext.Provider>
    );
};
export default ContactState;
