import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';
import { v4 as uuid } from 'uuid';
import { REMOVE_ALERT, SET_ALERT } from '../types';

const AlertState = (props) => {
    const initialState = [];
    const [state, dispatch] = useReducer(alertReducer, initialState);

    // set alert
    const setAlert = (msg, type, timout = 3000) => {
        const id = uuid.v4();
        dispatch({ type: SET_ALERT, payload: { msg, type, id } });
        setTimeout(() => {
            dispatch({ type: REMOVE_ALERT, payload: id });
        }, timout);
    };

    return (
        <alertContext.Provider
            value={{
                alerts: state,
                setAlert,
            }}
        >
            {props.children}
        </alertContext.Provider>
    );
};
export default AlertState;
