//================================== Import Dependencies ====================>
import {setLoading, clearLoading,setError} from './general.actions';
import {API_URL} from '../config';
import axios from 'axios';


//================================== Store Actions ====================>
export const APPLY_LOGIN = 'APPLY_LOGIN';
export const applyLogin = authToken => ({
  type: APPLY_LOGIN,
  authToken
});

export const LOGOUT = 'LOGOUT';
export const storeLogout = () => ({
  type:LOGOUT
});

export const SET_LOGGING_IN = 'SET_LOGGING_IN';
export const setLoggingIn = () => ({
  type:SET_LOGGING_IN
});

export const UNSET_LOGGING_IN = 'UNSET_LOGGING_IN';
export const unsetLoggingIn = () => ({
  type:UNSET_LOGGING_IN
});




//================================== Async Actions ====================>
export const login = (identifier,password) => (dispatch,getState) =>{
  const userSubmission = {identifier, password};

  dispatch(setLoading())
  axios({
    'url':`${API_URL}/auth/login`,
    headers: {
      'Authorization':`Bearer ${getState().auth.authToken}`,
      'content-type':'application/json'
    },
    data: JSON.stringify(userSubmission),
    'method':'POST'
  })
  .then(response => {
    dispatch(clearLoading())
    dispatch(applyLogin(response.data.authToken));
    localStorage.setItem('authToken',response.data.authToken);
    dispatch(unsetLoggingIn());
  })
  .catch(err => {
    dispatch(clearLoading());
    dispatch(setError(err));
    
  })
}

export const signup = (userObj) => (dispatch,getState) => {
  dispatch(setLoading());
  axios({
    'url':`${API_URL}/users`,
    headers: {
      'content-type':'application/json'
    },
    data: JSON.stringify(userObj),
    'method':'POST'
  })
  .then(response => {
    dispatch(clearLoading())
  })
  .catch(err =>{
    dispatch(clearLoading());
    dispatch(setError(err));
  })
}

export const logout = () => dispatch => {
  dispatch(storeLogout());
  localStorage.clear('authToken');
}