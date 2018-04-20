import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import roomReducer from './reducers/room.reducers';


const store = createStore(
  combineReducers({
    room: roomReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)


export default store;