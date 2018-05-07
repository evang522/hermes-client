import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

export class ChatMessage extends React.Component {

  render() {
    return (
        <div className='chat-message-container'>
          <div className='message-container'>
            <div className='chat-message-avatar'>
              <div className='avatar'>
              </div>
            </div>
            <div className='chat-message-body-container'>
              <div className='chat-message-username-timestamp'>
                <b>{this.props.author.handle}</b>
              <div className='chat-message-timestamp'>
              {moment(this.props.timestamp).fromNow()}
              </div>
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


export default connect()(ChatMessage);