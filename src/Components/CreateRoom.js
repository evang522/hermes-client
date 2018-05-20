import React from 'react';
import {createNewRoom} from '../actions/room.actions';
import {connect} from 'react-redux';
import {setAddingRoom, unsetAddingRoom} from '../actions/general.actions';
export class CreateRoom extends React.Component {

  onCreateNewRoom() {
    this.props.dispatch(createNewRoom(this.urlNameInput.value, this.roomNameInput.value));
    this.urlNameInput.value = '';
    this.roomNameInput.value='';
    this.props.dispatch(unsetAddingRoom());
  }

  render() {

    return (
           <div className='add-channel-container'>
        <div className='add-channel-dialogue-container'>
          <div className='add-channel-dialogue-title'>
            Create a Room:
          </div>

          <div className='add-channel-dialogue-name-section'>
            <label htmlFor='urlname' className='add-channel-name'> Room URL
            </label>
            <input ref={me => this.urlNameInput=me}  id='urlname' placeholder='# e.g. philosophytalk'/>
          </div>
            <div className='add-channel-dialogue-purpose-section'>
              <label htmlFor='channelPurpose' className='add-channel-purpose'> Room Title
              </label>
              <input ref={me => this.roomNameInput = me} id='roomName' placeholder='What do you want to Call this Room?' />
            </div>
            <div className='add-channel-button-group'>
              <button className='add-channel-cancel-button add-channel-button' onClick={() => this.props.dispatch(unsetAddingRoom())}>Cancel</button>
              <button onClick={() => this.onCreateNewRoom()} className='add-channel-submit-button add-channel-button'>Create Room</button>
            </div>
          </div>
      </div>
    

    )
  }
}


export default connect()(CreateRoom);