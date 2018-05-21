import  {SET_LOADING, SET_ERROR, CLEAR_LOADING, SET_ADDING_ROOM, UNSET_ADDING_ROOM, SET_REDIRECT_HOME, UNSET_REDIRECT_HOME} from '../actions/general.actions';


const initialState = {
  loading:false,
  error:null,
  addingRoom:false,
  redirectHome:false
}

const generalReducer = (state=initialState, action) => {
    switch(action.type){
      case SET_LOADING:
      return {
        ...state,
        loading:true
      }

      case CLEAR_LOADING:
      return {
        ...state, 
        loading:false
      }

      case SET_ERROR:
      return {
        ...state,
        err:action.err
      }

      case SET_ADDING_ROOM:
      return {
        ...state, 
        addingRoom:true
      }

      case UNSET_ADDING_ROOM:
      return {
        ...state, 
        addingRoom:false
      }

      case SET_REDIRECT_HOME:
      return {
        ...state, 
        redirectHome:true,
      }

      case UNSET_REDIRECT_HOME:
      return {
        ...state,
        redirectHome:false
      }

      default:
      return state;
    }
}

export default generalReducer;
