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
                <b>{this.props.author}</b>
              </div>
              <div className='chat-message-message'>
                {this.props.body}
              </div>
            </div>
          </div>
        </div>
    )
  }

}