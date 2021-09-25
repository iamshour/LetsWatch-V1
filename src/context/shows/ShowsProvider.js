import { useReducer } from "react";
import ShowsContext from "./showsContext";
import ShowsReducer from './showsReducer';
import axios from "axios";

import {
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW 
} from '../types';

const ShowsProvider = ({children}) => {

    const initialState = {
        shows: [],
        singleShow: {},
        loading: false
    }

    const [state, dispatch] = useReducer(ShowsReducer, initialState);

    const searchShows = async (searchTerm) => {
        dispatch({type: SET_LOADING});

        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)

        dispatch({
            type: SEARCH_SHOWS,
            payload: data
        });
    }

    const getSingleShow = async (id) => {
        dispatch({
            type: SET_LOADING
        });
        
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        console.log(data);

        dispatch({
            type: SET_SINGLE_SHOW,
            payload: data
        });
    }

    const clearSingleShow = () => {
        dispatch({
            type: CLEAR_SINGLE_SHOW
        })
    }

    return (
        <ShowsContext.Provider value={{
            shows: state.shows,
            singleShow: state.singleShow,
            loading: state.loading,
            searchShows,
            getSingleShow,
            clearSingleShow
        }}>
            {children}
        </ShowsContext.Provider>
    )
}

export default ShowsProvider
