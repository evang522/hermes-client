//================================== Import Dependencies ====================>
import React from 'react';
import {populateRooms} from '../actions/room.actions';
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
            <div className="card-body">
              <h2 className="card-title">{props.room.title}</h2>
              <p className="card-text">{props.room.urlname}</p>
              <Link to={props.room.urlname}>Open</Link>
            </div>
          </div>
      )
    }

    const roomList = this.props.roomlist ? this.props.roomlist.map(room => {
      return <RoomUnit room={room} />
    }) : '';

    console.log('roomslist',this.props);

    return(
      <div className='list-of-rooms-container'>
        <h1> Rooms you're a Member of</h1>
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