import React from 'react';
import {createNewRoom} from '../actions/room.actions';
import {connect} from 'react-redux';
export class LandingPage extends React.Component {

  onCreateNewRoom() {
    this.props.dispatch(createNewRoom(this.urlinput.value, this.titleinput.value));
    this.urlinput.value = '';
    this.titleinput.value='';
  }

  render() {

    return (
      <div className='landing-page-container'>
        <div className='create-new-room-container'>
          <h2>Create new Room</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" placeholder='Url name...' className="form-control" ref={input => this.urlinput = input}/>
              </div>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <input type="text" placeholder='Room Title...' className="form-control" ref={input => this.titleinput = input}/>
              </div>
            </div>
          </div>

          <button className='btn btn-primary btn-wide' onClick={() => this.onCreateNewRoom()}> Create Room! </button>
        </div>
      </div>
    

    )
  }
}


export default connect()(LandingPage);