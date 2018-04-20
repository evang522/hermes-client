import React from 'react';
import './ChatContainer.css';
import ChatMessage from './ChatMessage';

export default class ChatContainer  extends React.Component{
  render() {

    return (
      <section className='chat-jumbo-container'>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </section>

    )
  }
}
