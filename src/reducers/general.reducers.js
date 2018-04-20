import  {SET_LOADING, CLEAR_LOADING} from '../actions/general.actions';


const initialState = {
  loading:false,
  error:null
}

const roomReducer = (state=initialState, action) => {
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


      default:
      return state;
    }
}

export default generalReducer;
