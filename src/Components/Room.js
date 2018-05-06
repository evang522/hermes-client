import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {retrieveRoomInfo, createChannel} from '../actions/room.actions';
import ChatContainer from './ChatContainer';
import MessageInput from './MessageInput';
import ChannelName from './ChannelName';
import {withRouter} from 'react-router-dom';

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
    channels = this.props.channels.map(channel => <ChannelName id={channel._id} name={channel.title} />);
    }

    let currentChannel = this.props.channels ? this.props.channels.find(channel => {
      return channel._id === this.props.currentChannel
    }) : '';
    
    

    return (

        <main>
          <div className='sidebar-container'>
            <div className='room-title'>
              {this.props.roomTitle ? this.props.roomTitle : ''}
            </div>
            <div className='channel-title'>
              {currentChannel ? currentChannel.title : ''}
            </div>
            <div className='channel-list-container'>
              <h3> Channels:</h3>
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
            <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="/">Hermes</a>
        </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Settings
            </NavItem>
            <NavItem eventKey={2} href="#">
              
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
            </div>
            <ChatContainer/>
          <MessageInput/>
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