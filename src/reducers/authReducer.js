import {
  LOGIN_IN,
  SET_LOGIN_ERROR,
  SET_LOGIN_LOADING,
  SET_REGISTER_ERROR,
  SET_REGISTER_LOADING,
} from '../constants';

const initialState = {
  authenticated: false,
  userDetails: {},
  loading: false,
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return {...state, authenticated: true, userDetails: {...action.payload}};
    case SET_LOGIN_ERROR:
      return {...state, error: action.payload};
    case SET_LOGIN_LOADING:
      return {...state, loading: action.payload};
    case SET_REGISTER_LOADING:
      return {...state, loading: action.payload};
    case SET_REGISTER_ERROR:
      return {...state, error: action.payload};

    default:
      return state;
  }
};
