//================================== Import Actions ====================>
import {setLoading, setError, clearLoading} from './general.actions';
import {API_URL} from '../config';

//================================== Require Dependencies ====================>
//for API calls
const axios = require('axios');

//================================== STORE ACTIONS ====================>

export const POPULATE_ROOM_DATA = 'POPULATE_ROOM_DATA';
export const populateRoomData = roomData => ({
  type:POPULATE_ROOM_DATA,
  roomData
});

export const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL';
export const setCurrentChannel = channelId => ({
  type:SET_CURRENT_CHANNEL,
  channelId
})

export const MERGE_NEW_MESSAGES = 'MERGE NEW MESSAGES';
export const mergeNewMessages = messages => ({
  type:MERGE_NEW_MESSAGES,
  messages
})



//================================== ASYNC Actions ====================>

// Retrieve current RoomInformation
export const retrieveRoomInfo = (urlname) => dispatch => {
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

export const setChannelAndUpdateMessages = channelId => dispatch => {
  if (channelId) {
    dispatch(setCurrentChannel(channelId));
  }
  axios({
    method:'GET',
    'url': `${API_URL}/messages?channelId=${channelId}`,
    headers: {
      'content-type':'application/json'
    }
  })
  .then(response => {
    dispatch(mergeNewMessages(response.data));
  })
  .catch(err => {
    setError(err);
  })
}


export const addNewMessage = messageBody => (dispatch,getState) =>{

  if (!getState().room.currentChannel) {
    return;
  }
  const message = {
    body: messageBody,
    // TODO For now we have assigned the author to EVAN's id, but eventually we want to set it to get current User
    author: '5adac6d819ff5e023ba68c1a',
  }

  axios({
    url:`${API_URL}/messages?channelId=${getState().room.currentChannel}`,
    headers: {
      'content-type':'application/json'
    },
    data: JSON.stringify(message),
    method:'POST'
  })
  .then(response => {
    dispatch(setChannelAndUpdateMessages(getState().room.currentChannel));
  })
  .catch(err => {
    dispatch(setError(err));
  })
}

//================================== New Channel  ====================>

export const createChannel = channelToAdd => (dispatch,getState) => {
  const channelRequest = {
    type:'addChannel',
    channelToAdd
  }

  axios({
    url: `${API_URL}/rooms/${getState().room.id}`,
    method:'PUT',
    headers: {
      'content-type':'application/json',
    },
    data:JSON.stringify(channelRequest)
  })
  .then(response => {
    dispatch(retrieveRoomInfo(getState().room.urlname));
  })
  .catch(err => {
    dispatch(setError(err))
  });
}


//================================== New Room ====================>
export const createNewRoom = (urlname,title) => dispatch => {

  const requestBody = {
    urlname,
    title
  }

  axios({
    url:`${API_URL}/rooms`,
    method:'POST',
    data: JSON.stringify(requestBody),
    headers: {
      'content-type':'application/json'
    }
  })
  .then(response => {
    console.log('successful');
  })
  .catch(err => {
    console.log(err);
  })
}