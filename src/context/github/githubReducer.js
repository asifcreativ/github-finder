import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  REMOVE_ALERT,
  SEARCH_USERS,
  SET_ALERT,
  SET_LOADING,
} from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    case SET_ALERT:
      return { ...state };
    case REMOVE_ALERT:
      return { ...state };

    default:
      return state;
  }
};

export default GithubReducer;
