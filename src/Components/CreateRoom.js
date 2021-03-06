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
           <div className='form-uber-container'>
        <div className='form-container'>
          <div className='form-title'>
            Create a Room:
          </div>

          <div className='form-name-section'>
            <label htmlFor='urlname' className='add-channel-name'> Room URL
            </label>
            <input ref={me => this.urlNameInput=me}  id='urlname' placeholder='# e.g. philosophytalk'/>
          </div>
            <div className='form-purpose-section'>
              <label htmlFor='channelPurpose' className='add-channel-purpose'> Room Title
              </label>
              <input ref={me => this.roomNameInput = me} id='roomName' placeholder='What do you want to call this Room?' />
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