import React from 'react';
import './ChatContainer.css';
import ChatMessage from './ChatMessage';
import {connect} from 'react-redux';

export class ChatContainer  extends React.Component{
  render() {
    let channelMessages;
    if (this.props.messages) {
      channelMessages = this.props.messages.filter(message => {
        return message.channel === this.props.currentChannel;
      });
    }

    let chats;
    chats = channelMessages.map(message => {
      return <ChatMessage body={message.body} timestamp={message.created} author={message.author}/>
    });


    return (
      <section className='chat-jumbo-container'>
        {chats ? chats: ''}
      </section>

    )
  }
}

const mapStateToProps = state => ({
  messages: state.room.messages,
  channels: state.room.channels,
  currentChannel: state.room.currentChannel
})


export default connect(mapStateToProps)(ChatContainer);
