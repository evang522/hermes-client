import React from 'react';

export default class ChatMessage extends React.Component {

  render() {


    return (
        <div className='chat-message-container'>
          <div className='message-container'>
            <div className='chat-message-avatar'>
              <div className='avatar'>
              </div>
            </div>
            <div className='chat-message-body-container'>
              <div className='chat-message-username'>
                <b>evang522</b>
              </div>
              <div className='chat-message-message'>
                Has anyone discussed the upcoming meeting tomorrow? 
              </div>
            </div>
          </div>
        </div>
    )
  }

}