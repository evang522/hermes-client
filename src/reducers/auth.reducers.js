//================================== Import Dependencies ====================>
import jsonwebtoken from 'jsonwebtoken';
import {APPLY_LOGIN} from '../actions/auth.actions';

//================================== Set up Initial State ====================>
const initialState = {
  userInfo: jsonwebtoken.decode(localStorage.getItem('authToken')) || null,
  authToken: localStorage.getItem('authToken') || null
}


export const authReducer = (state=initialState,action) => {
  switch(action.type) {
//------------------>
    case APPLY_LOGIN:
    return {
      ...state,
      userInfo: jsonwebtoken.decode(action.authToken),
      authToken: action.authToken
    }

//------------------>
    default:
    return state;
  }
}