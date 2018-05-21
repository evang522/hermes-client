import React from 'react';
import {connect} from 'react-redux';
import {setChannelAndUpdateMessages} from '../actions/room.actions';
import './ChannelName.css';

export class ChannelName extends React.Component{
  onClick (e) {
    this.props.dispatch(setChannelAndUpdateMessages(e.target.dataset.id));
  }
  
  render() {

  return (
    <li className={`channel-name ${this.props.channelId === this.props.id ? 'selected-channel' : ''}`} onClick={e => this.onClick(e)} data-id={this.props.id}>{this.props.name ? this.props.name : ''}</li>
  )
}
}

const mapStateToProps = state => ({
  channelId: state.room.currentChannel
});

export default connect(mapStateToProps)(ChannelName);