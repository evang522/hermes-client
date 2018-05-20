//================================== Import Dependencies ====================>
import jsonwebtoken from 'jsonwebtoken';
import {APPLY_LOGIN, LOGOUT, SET_LOGGING_IN, UNSET_LOGGING_IN, SET_CREATE_ACCOUNT_MODAL, UNSET_CREATE_ACCOUNT_MODAL} from '../actions/auth.actions';
import { setChannelAndUpdateMessages } from '../actions/room.actions';

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
      authToken: action.authToken,
      logginIn:false,
      createAccountModal:false
    }

//------------------->

    case LOGOUT:
      return {
        ...state,
        userInfo: null,
        authToken:null
      }

//------------------->
    case SET_LOGGING_IN: 
      return {
        ...state,
        loggingIn:true
      }

//------------------->
    case UNSET_LOGGING_IN:
      return {
        ...state,
        loggingIn:false
      }
    
//------------------>
    case SET_CREATE_ACCOUNT_MODAL:
      return {
        ...state,
        createAccountModal:true
      }

//------------------>
case UNSET_CREATE_ACCOUNT_MODAL:
return {
  ...state,
  createAccountModal:false
}


//------------------>
    default:
    return state;
  }
}