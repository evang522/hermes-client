//================================== Import Actions ====================>
import {setLoading, setError, clearLoading} from './general.actions';
import {API_URL} from '../config';

//================================== Require Dependencies ====================>
//for API calls
const axios = require('axios');

//================================== STORE ACTIONS ====================>

export const POPULATE_ROOM_DATA = 'POPULATE_ROOM_DATA';
export const populateRoomData = roomData => {
  type:POPULATE_ROOM_DATA,
  roomData
}



//================================== ASYNC Actions ====================>

// Retrieve current RoomInformation
export const retrieveRoomInfo = (urlname) => dispatch => {
  console.log('retrieving');
  dispatch(setLoading());
  axios({
    method:'GET',
    'url': `${API_URL}/rooms/${urlname}`,
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => {
    dispatch(populateRoomData(res.data));
    dispatch(clearLoading());
  })
  .catch(err => {
    dispatch(clearLoading());
    dispatch(setError(err));
  })

}
