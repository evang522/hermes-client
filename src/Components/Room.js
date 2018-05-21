import React from 'react';
import {connect} from 'react-redux';
import {retrieveRoomInfo, createChannel, setAddingChannel, clearRoomData} from '../actions/room.actions';
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

  componentWillUnmount() {
    this.props.dispatch(clearRoomData());
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

        <main className='room-app-main'>
          {this.props.addingChannel ? <AddChannel/> : '' }
          <div className='sidebar-container'>
            <div className='room-title'>
              {this.props.roomTitle ? this.props.roomTitle : ''}
            </div>
            <div className='channel-list-container'>
              <div className='channels-channeladd'>
                <h3> Channels</h3>
                <div className='mini-add-channel-button' onClick = {() => this.props.dispatch(setAddingChannel())}>
                  Add
                  </div>
              </div>
              <ul className='channel-list-ul'>
                {channels ? channels : ''}
              </ul>
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
  currentChannel: state.room.currentChannel,
  addingChannel: state.room.addingChannel
});

export default withRouter(connect(mapStateToProps)(Room));