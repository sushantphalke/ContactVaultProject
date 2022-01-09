import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    SET_ALERT,
    REMOVE_ALERT,
} from '../types';
const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'sushant phalke',
                email: 'sushantphalke@gov.world',
                phone: '34343434434',
                type: 'personal',
            },
            {
                id: 2,
                name: 'tillu marchant',
                email: 'tillumarchant@bhikari.com',
                phone: '7696900676',
                type: 'personal',
            },
            {
                id: 3,
                name: 'pablovisco',
                email: 'pablovisco@millionaire.com',
                phone: '6798876976',
                type: 'personal',
            },
            {
                id: 4,
                name: 'narendramodi',
                email: 'narendramodi@420.gov.in',
                phone: '9022664334',
                type: 'personal',
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //  add contact
    // delete contact
    // set current contact
    // Clear current contact
    // update contact
    // filter contacts
    // clear filter
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};
export default ContactState;
