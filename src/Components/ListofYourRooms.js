//================================== Import Dependencies ====================>
import React from 'react';
import {populateRooms} from '../actions/room.actions';
import {setAddingRoom} from '../actions/general.actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class ListOfYourRooms extends React.Component {


  componentDidMount() {
    this.props.dispatch(populateRooms());
  }
  render() {

    const RoomUnit = props => {

      return (
          <div className="card roomcard" >
              <h2 className="card-title">{props.room.title}</h2>
              <Link to={props.room.urlname}>Open</Link>
          </div>
      )
    }

    const roomList = this.props.roomlist.length ? this.props.roomlist.map((room,index) => {
      return <RoomUnit key={index} room={room} />
    }) : (
          <div className="card roomcard" >
              <h2 className="card-title">You aren't in any Rooms</h2>
              <Link onClick={() => this.props.dispatch(setAddingRoom())}to='#'>Create One!</Link>
          </div>
    );


    return(
      <div className='list-of-rooms-container'>
        <p className='your-rooms'> Your Rooms:</p>
        <div className='list-of-rooms-list-container'>
          {roomList ? roomList : ''}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  roomlist:state.room.userrooms ? state.room.userrooms : null
})

export default connect(mapStateToProps)(ListOfYourRooms)