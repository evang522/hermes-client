import {POPULATE_ROOM_DATA, SET_ADDING_CHANNEL, CLEAR_ROOM_DATA, REMOVE_ADDING_CHANNEL, POPULATE_ROOM_LIST, MERGE_NEW_MESSAGES, SET_CURRENT_CHANNEL} from '../actions/room.actions';

const initialState = {
  title: null,
  urlname: null,
  channels: [],
  created: null,
  members: null,
  id: null,
  currentChannel:null,
  messages:[],
  userrooms:[],
  addingChannel: false
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
      return {
        ...state,
        userrooms:action.roomList
      }

      case REMOVE_ADDING_CHANNEL:
      return {
        ...state,
        addingChannel:false
      }

      case SET_ADDING_CHANNEL:
      return {
        ...state,
        addingChannel:true
      }
      
      case CLEAR_ROOM_DATA:
      return {
        ...state, 
        title: null,
        urlname: null,
        channels: [],
        created: null,
        members: null,
        id: null,
        currentChannel:null,
        messages:[],
      }

      default:
      return state;
    }
}

export default roomReducer;
