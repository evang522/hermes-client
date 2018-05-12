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
    chats = channelMessages.map((message,index) => {
      return <ChatMessage body={message.body} key={index} timestamp={message.created} author={message.author}/>
    });


    return (
      <section className='chat-jumbo-container'>
        <header className='chat-container-header'>
          <div className='chat-container-header-channelname'>
            #{this.props.channels.length && this.props.currentChannel ? this.props.channels.filter(chan => chan._id === this.props.currentChannel)[0].title : ''}
          </div>
          <div className='chat-container-header-purpose'>
          {this.props.channels.length && this.props.currentChannel ? this.props.channels.filter(chan => chan._id === this.props.currentChannel)[0].purpose : ''}
          </div>
        </header>
        <section className='chat-container-body'>
        {chats ? chats: ''}
        </section>
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
