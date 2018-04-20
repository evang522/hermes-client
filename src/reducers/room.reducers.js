import {POPULATE_ROOM_DATA} from '../actions/room.actions';

const initialState = {
  title: null,
  urlname: null,
  channels: [],
  created: null,
  members: null,
  id: null,
  currentChannel:null
}

const roomReducer = (state=initialState, action) => {
    switch(action.type){
      case POPULATE_ROOM_DATA:
      console.log(action, 'ROOMDATA');
      return {
        ...state,
        title: action.roomData.title,
        urlname: action.roomData.urlname,
        channels: action.roomData.channels,
        created: action.roomData.created,
        members: action.roomData.members,
        id: action.roomData._id,
      }

      default:
      return state;
    }
}

export default roomReducer;
