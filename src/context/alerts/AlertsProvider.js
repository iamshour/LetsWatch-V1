import { useReducer } from 'react';

import AlertsContext from './alertsContext';
import alertsReducer from './alertsReducer';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const StateProvider = ({ children }) => {

    const initialState = null;
    
    const [state, dispatch] = useReducer(alertsReducer, initialState);

    const setAlert = (message, type) => {
        dispatch({
            type:  SET_ALERT,
            payload: {
                message,
                type
            }
        })

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)
    }

    return (
        <AlertsContext.Provider value={{
            alert: state,
            setAlert
        }}>
            { children }
        </AlertsContext.Provider>
    )
}

export default StateProvider
