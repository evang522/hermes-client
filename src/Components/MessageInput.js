import React from 'react';
import './MessageInput.css';
import {addNewMessage} from '../actions/room.actions';
import {connect} from 'react-redux';

export class MessageInput extends React.Component {
  
  handleKeyDown (e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit()
    }
  };

  handleSubmit() {
    this.props.dispatch(addNewMessage(this.input.value))
    this.input.value = '';
  }

  render() {


    return (

      <div className='message-input-container'>
        <form className='message-input-form'>
          <textarea ref={area => this.input = area} onKeyDown={e => this.handleKeyDown(e)} className='message-input' placeholder='new message...'/>
        </form>
      </div>

    )
  }
}


export default connect()(MessageInput);