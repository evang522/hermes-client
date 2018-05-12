//================================== Import Dependencies ====================>
import React from 'react';
import './styles/AddChannel.css';


//================================== Add Channel Component ====================>

export class AddChannel extends React.Component {

  render(){
    return(

      <div className='add-channel-container'>
        <div className='add-channel-dialogue-container'>
          <div className='add-channel-dialogue-title'>
            Create a Channel:
          </div>

          <div className='add-channel-dialogue-name-section'>
            <label for='channelName' className='add-channel-name'> Name:
            </label>
            <input id='channelName' placeholder='# e.g. Marketing'/>
          </div>
            <div className='add-channel-dialogue-purpose-section'>
              <label for='channelPurpose' className='add-channel-purpose'> Purpose:
              </label>
              <input id='channelPurpose' placeholder='What is this channel about?' />
            </div>
            <div className='add-channel-button-group'>
              <button className='add-channel-cancel-button'>Cancel</button>
              <button className='add-channel-submit-button'>Create Channel</button>
            </div>
          </div>
      </div>

    )
  }

}

export default AddChannel;