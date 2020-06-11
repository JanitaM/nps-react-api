import {
  SEARCH_PARKS,
  GET_PARK,
  CLEAR_SEARCH,
  SET_LOADING,
  SET_ALERT,
  CLEAR_ALERT,
  FILTER_PARKS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PARKS:
      return {
        ...state,
        parks: action.payload,
        loading: false
      };
    case GET_PARK:
      return {
        ...state,
        park: action.payload,
        loading: false
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        parks: [],
        loading: false,
        filteredParks: []
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ALERT:
      return {
        ...state,
        alert: true
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: false
      };

    case FILTER_PARKS:
      return {
        ...state,
        filteredParks: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
