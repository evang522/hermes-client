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

export const POPULATE_ROOM_LIST = 'POPULATE_ROOM_LIST';
export const populateRoomList = roomList => ({
  type:POPULATE_ROOM_LIST,
  roomList
})

export const REMOVE_ADDING_CHANNEL = 'REMOVE_ADDING_CHANNEL';
export const removeAddingChannel = () => ({
  type:REMOVE_ADDING_CHANNEL
})

export const SET_ADDING_CHANNEL = 'SET_ADDING_CHANNEL';
export const setAddingChannel = () => ({
  type:SET_ADDING_CHANNEL
})

export const CLEAR_ROOM_DATA = 'CLEAR_ROOM_DATA';
export const clearRoomData = () => ({
  type:CLEAR_ROOM_DATA
})





//================================== ASYNC Actions ====================>

// Retrieve current RoomInformation
export const retrieveRoomInfo = (urlname) => (dispatch,getState) => {
  dispatch(setLoading());
  axios({
    method:'GET',
    'url': `${API_URL}/rooms/${urlname}`,
    headers: {
      'content-type': 'application/json',
      'Authorization':`Bearer ${getState().auth.authToken}`
    }
  })
  .then(res => {
    dispatch(populateRoomData(res.data));
    const mainId =  res.data.channels.filter(channel => channel.title === 'Main')[0]._id;
    dispatch(setChannelAndUpdateMessages(mainId));
    dispatch(clearLoading());
  })
  .catch(err => {
    dispatch(clearLoading());
    dispatch(setError(err));
  })

}

export const setChannelAndUpdateMessages = channelId => (dispatch,getState) => {
  if (channelId) {
    dispatch(setCurrentChannel(channelId));
  }

  dispatch(setLoading())
  axios({
    method:'GET',
    'url': `${API_URL}/messages?channelId=${channelId}`,
    headers: {
      'content-type':'application/json',
      'Authorization':`Bearer ${getState().auth.authToken}`
    }
  })
  .then(response => {
    dispatch(clearLoading())
    dispatch(mergeNewMessages(response.data));
  })
  .catch(err => {

    dispatch(clearLoading())
    setError(err);
  })
}


export const addNewMessage = messageBody => (dispatch,getState) =>{

  if (!getState().room.currentChannel) {
    return;
  }
  const message = {
    body: messageBody,
  }
  
  dispatch(setLoading());

  axios({
    url:`${API_URL}/messages?channelId=${getState().room.currentChannel}`,
    headers: {
      'content-type':'application/json',
      'Authorization':`Bearer ${getState().auth.authToken}`
    },
    data: JSON.stringify(message),
    method:'POST'
  })
  .then(response => {
    dispatch(clearLoading())
    // dispatch(setChannelAndUpdateMessages(getState().room.currentChannel));
  })
  .catch(err => {
    dispatch(clearLoading())
    dispatch(setError(err));
  })
}

//================================== New Channel  ====================>

export const createChannel = (channelToAdd,purpose) => (dispatch,getState) => {
  const channelRequest = {
    type:'addChannel',
    channelToAdd,
    purpose
  }
  dispatch(setLoading());

  axios({
    url: `${API_URL}/rooms/${getState().room.id}`,
    method:'PUT',
    headers: {
      'Authorization':`Bearer ${getState().auth.authToken}`,
      'content-type':'application/json'
    },
    data:JSON.stringify(channelRequest)
  })
  .then(response => {
    dispatch(clearLoading())
    dispatch(retrieveRoomInfo(getState().room.urlname));
  })
  .catch(err => {
    dispatch(clearLoading())
    dispatch(setError(err))
  });
}


//================================== New Room ====================>
export const createNewRoom = (urlname,title) => (dispatch,getState) => {
  dispatch(setLoading())
  const requestBody = {
    urlname,
    title
  }

  axios({
    url:`${API_URL}/rooms`,
    method:'POST',
    data: JSON.stringify(requestBody),
    headers: {
      'Authorization':`Bearer ${getState().auth.authToken}`,
      'content-type':'application/json'
    }
  })
  .then(response => {
    dispatch(clearLoading())
    dispatch(populateRooms());
  })
  .catch(err => {
    dispatch(clearLoading())
    console.log(err);
  })
}


export const populateRooms = () => (dispatch,getState) =>{
  dispatch(setLoading());

  axios({
    'url':`${API_URL}/rooms`,
    headers: {
      'Authorization':`Bearer ${getState().auth.authToken}`,
      'content-type':'application/json'
    },
    'method':'GET'
  })
  .then(response => {
    dispatch(clearLoading())
    dispatch(populateRoomList(response.data))
  })
  .catch(err => {
    dispatch(clearLoading());
    dispatch(setError(err));
  })
  
}