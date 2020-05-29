import React, { useReducer } from 'react';
import axios from 'axios';
import NPSContext from './npsContext';
import NPSReducer from './npsReducer';
import {
  SEARCH_PARKS,
  GET_PARK,
  CLEAR_SEARCH,
  SET_LOADING,
  SET_ALERT,
  CLEAR_ALERT
} from '../types';

let npsAPIKey;

if (process.env.NODE_ENV !== 'production') {
  npsAPIKey = process.env.REACT_APP_NPS_API_KEY;
} else {
  npsAPIKey = process.env.NPS_API_KEY;
}

const NPSState = ({ children }) => {
  const initialState = {
    parks: [],
    park: {},
    details: [],
    loading: false,
    alert: false
  };

  const [state, dispatch] = useReducer(NPSReducer, initialState);

  // Search Parks
  const searchParks = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://developer.nps.gov/api/v1/parks?limit=9&stateCode=${text}&api_key=${npsAPIKey}`
    );

    dispatch({
      type: SEARCH_PARKS,
      payload: res.data.data
    });
  };

  // Get Park
  const getPark = async (parkCode) => {
    setLoading();

    const res = axios.get(
      `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${npsAPIKey}`
    );

    console.log(res.data);

    dispatch({
      type: GET_PARK,
      payload: res.data
    });
  };

  // Get Details

  // Clear Search
  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Alert
  const setAlert = () => dispatch({ type: SET_ALERT });

  // Set Alert
  const clearAlert = () => dispatch({ type: CLEAR_ALERT });

  return (
    <NPSContext.Provider
      value={{
        parks: state.parks,
        park: state.park,
        details: state.details,
        loading: state.loading,
        alert: state.alert,
        searchParks,
        clearSearch,
        getPark,
        setAlert,
        clearAlert
      }}
    >
      {children}
    </NPSContext.Provider>
  );
};

export default NPSState;
