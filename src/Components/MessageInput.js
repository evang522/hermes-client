import React from 'react';
import './MessageInput.css';
import {addNewMessage} from '../actions/room.actions';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {SOCKET_URL} from '../config';
import {setChannelAndUpdateMessages} from '../actions/room.actions';

export class MessageInput extends React.Component {

  constructor(props) {
    super(props);
    this.socket = io.connect(SOCKET_URL, {query: `room=${this.props.room}`});
    this.socket.on('newmessage', () =>{ 
      this.props.dispatch(setChannelAndUpdateMessages(this.props.currentChannel))
    })

  }
  
  componentDidMount() {
  }

  handleKeyDown (e) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit()
    }
  };

  handleSubmit() {
    if (this.input.value && this.props.currentChannel) {
    this.props.dispatch(addNewMessage(this.input.value))
    this.socket.emit('newmessage', this.props.room);
    this.input.value = '';
    }
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

const mapStateToProps = state => ({
  currentChannel: state.room.currentChannel
})


export default connect(mapStateToProps)(MessageInput);