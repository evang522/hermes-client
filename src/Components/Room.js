import React from 'react';
import {connect} from 'react-redux';
import {retrieveRoomInfo, createChannel} from '../actions/room.actions';
import ChatContainer from './ChatContainer';
import MessageInput from './MessageInput';
import ChannelName from './ChannelName';
import {withRouter} from 'react-router-dom';
import './styles/Room.css';
import AddChannel from './AddChannel';


export class Room extends React.Component {
  componentDidMount() {
    if (this.props.match) {
      this.props.dispatch(retrieveRoomInfo(this.props.match.params.roomName));
    }
   
  }


  onAddChannel() {
    if (this.newChannel.value)
    this.props.dispatch(createChannel(this.newChannel.value));
    this.newChannel.value='';
  }

  render() {
    let channels;
    if (this.props.channels) {
    channels = this.props.channels.map((channel,index) => <ChannelName key={index} id={channel._id} name={channel.title} />);
    }

    let currentChannel = this.props.channels ? this.props.channels.find(channel => {
      return channel._id === this.props.currentChannel
    }) : '';
    
    

    return (

        <main>
          <AddChannel/>
          <div className='sidebar-container'>
            <div className='room-title'>
              {this.props.roomTitle ? this.props.roomTitle : ''}
            </div>
            <div className='channel-list-container'>
              <div className='channels-channeladd'>
                <h3> Channels</h3>
                <img className='add-channel-button' src='img/addbutton.png'/>
              </div>
              <ul className='channel-list-ul'>
                {channels ? channels : ''}
              </ul>
            </div>
            <div className='new-channel'>
              Create new Channel:
              <input className='new-channel-input' ref={me => this.newChannel = me}/>
              <button onClick={() => this.onAddChannel()}className='add-new-channel-button'>Add</button>
            </div>
          </div>
          <div className='header-chat-container'>
            <div className='navbar-container'>

            </div>
            <ChatContainer/>
          <MessageInput room={this.props.match.params.roomName}/>
          </div>
        </main>

    )

  }
}

const mapStateToProps = state => ({
  roomTitle: state.room.title,
  channels: state.room.channels,
  urlname: state.room.urlname,
  members: state.room.members,
  currentChannel: state.room.currentChannel
});

export default withRouter(connect(mapStateToProps)(Room));