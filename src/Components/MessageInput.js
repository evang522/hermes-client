import React from 'react';
import './MessageInput.css';
export default class MessageInput extends React.Component {

  render() {



    return (

      <div className='message-input-container'>
        <form className='message-input-form'>
          <textarea className='message-input' placeholder='new message...'/>
        </form>
      </div>

    )
  }
}