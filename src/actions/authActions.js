import axios from '../api';
import {
  LOGIN_IN,
  SET_LOGIN_ERROR,
  SET_LOGIN_LOADING,
  SET_REGISTER_ERROR,
  SET_REGISTER_LOADING,
} from '../constants';

export const login = (email, password) => async dispatch => {
  dispatch({type: SET_LOGIN_ERROR, payload: ''});
  dispatch({type: SET_LOGIN_LOADING, payload: true});
  try {
    const response = await axios.post('auth/login/', {email, password});
    if (response.status === 200) {
      dispatch({type: LOGIN_IN, payload: response.data});
    } else {
      dispatch({type: SET_LOGIN_ERROR, payload: response.data?.detail});
    }
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: SET_LOGIN_ERROR,
      payload: err.response.data?.detail || err.message,
    });
  }

  dispatch({type: SET_LOGIN_LOADING, payload: false});
};

export const register =
  (email, username, password, password2) => async dispatch => {
    dispatch({type: SET_REGISTER_ERROR, payload: false});
    dispatch({type: SET_REGISTER_LOADING, payload: true});
    try {
      const response = await axios.post('auth/register/', {
        email,
        username,
        password,
        password2,
      });
    } catch (err) {
      const resData = err.response.data;
      let errorMsg = '';
      if (resData?.email) errorMsg += 'email- ' + resData.email;
      if (resData?.username)
        errorMsg +=
          (errorMsg ? '\n' : '') + 'username- ' + `${resData.username}`;
      if (!errorMsg) errorMsg = err.message;
      dispatch({
        type: SET_REGISTER_ERROR,
        payload: errorMsg,
      });
    }
    dispatch({type: SET_REGISTER_LOADING, payload: false});
  };
