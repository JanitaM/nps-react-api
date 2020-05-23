import { SEARCH_PARKS, GET_PARK, CLEAR_SEARCH, SET_LOADING } from '../types';

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
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
