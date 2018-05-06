import {POPULATE_ROOM_DATA, POPULATE_ROOM_LIST, MERGE_NEW_MESSAGES, SET_CURRENT_CHANNEL} from '../actions/room.actions';

const initialState = {
  title: null,
  urlname: null,
  channels: [],
  created: null,
  members: null,
  id: null,
  currentChannel:null,
  messages:[],
  userrooms:[]
}

const roomReducer = (state=initialState, action) => {
    switch(action.type){
      case POPULATE_ROOM_DATA:
      return {
        ...state,
        title: action.roomData.title,
        urlname: action.roomData.urlname,
        channels: action.roomData.channels,
        created: action.roomData.created,
        members: action.roomData.members,
        id: action.roomData._id,
      }

      case SET_CURRENT_CHANNEL:
      return {
        ...state,
          currentChannel: action.channelId
      }
      
      case MERGE_NEW_MESSAGES:
      return {
        ...state, 
        messages: [...state.messages.filter(message => message.channel !== state.currentChannel), ...action.messages]
      }

      case POPULATE_ROOM_LIST:
      console.log(action);
      return {
        ...state,
        userrooms:action.roomList
      }
      
      default:
      return state;
    }
}

export default roomReducer;
