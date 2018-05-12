//================================== Import Dependencies ====================>
import React from 'react';
import './styles/AddChannel.css';
import {removeAddingChannel,createChannel, retrieveRoomInfo} from '../actions/room.actions';
import {connect} from 'react-redux';

//================================== Add Channel Component ====================>

export class AddChannel extends React.Component {

  onAddChannel() {
    if (this.channelName.value)
    this.props.dispatch(createChannel(this.channelName.value, this.channelPurpose.value));
    this.props.dispatch(removeAddingChannel());
  }


  render(){
    return(

      <div className='add-channel-container'>
        <div className='add-channel-dialogue-container'>
          <div className='add-channel-dialogue-title'>
            Create a Channel:
          </div>

          <div className='add-channel-dialogue-name-section'>
            <label htmlFor='channelName' className='add-channel-name'> Name
            </label>
            <input ref={me => this.channelName=me}  id='channelName' placeholder='# e.g. Marketing'/>
          </div>
            <div className='add-channel-dialogue-purpose-section'>
              <label htmlFor='channelPurpose' className='add-channel-purpose'> Purpose (optional)
              </label>
              <input ref={me => this.channelPurpose = me} id='channelPurpose' placeholder='What is this channel about?' />
            </div>
            <div className='add-channel-button-group'>
              <button onClick={() => this.props.dispatch(removeAddingChannel())}className='add-channel-cancel-button add-channel-button'>Cancel</button>
              <button onClick={() => this.onAddChannel()} className='add-channel-submit-button add-channel-button'>Create Channel</button>
            </div>
          </div>
      </div>

    )
  }

}

export default connect()(AddChannel);