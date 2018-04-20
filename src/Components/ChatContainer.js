import React from 'react';
import {Well} from 'react-bootstrap';
export default class ChatContainer  extends React.Component{

  render() {


    return (
      <section className='chat-message-container'>
        <div className='message-container'>
          <div className='chat-message-avatar'>
            <div className='avatar'>
            </div>
          </div>
          <div className='chat-message-body-container'>
            <Well>
            <div className='chat-message-username'>
              evang522
            </div>
            <div className='chat-message-message'>
              Hi I'm feeling foopy!
            </div>
            </Well>
          </div>
        </div>
      </section>

    )
  }
}
