//================================== Import dependencies ====================>
import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ListofYourRooms from './ListofYourRooms';
import './styles/LandingPage.css';
import {logout, setLoggingIn, unsetLoggingIn} from '../actions/auth.actions';
import CreateRoom from './CreateRoom';
import { setAddingRoom } from '../actions/general.actions';

export class LandingPage extends React.Component {

  handleLoginClick = () => {
    this.props.dispatch(setLoggingIn());
  }

  removeLoginModal = () => {
    this.props.dispatch(unsetLoggingIn());
  }

  render() {
    return (
      <section className='landing-page-container'>
        {this.props.loggingIn ? <Login removeLoginModal={this.removeLoginModal} /> : ''}
        {this.props.addingRoom ? <CreateRoom /> : ''}
        <div className='landing-page-header'>
          <div className='landing-page-header-title'>
            Hermes
          </div>
          <div className='landing-page-header-options'>
            <ul className='lp-header-ops-ul'>
              <li>Preferences</li>
              {!this.props.authToken ? <li onClick={() => this.handleLoginClick()}>Login</li> : <li onClick={() => this.props.dispatch(logout())}>Logout</li>}
            </ul>
          </div>
        </div>
        <main className='landing-page-main'>
          <div className='landing-page-intro'>
            A Full Stack Javascript Messenger Proof of Concept
            <div className='landing-page-intro-sub'>
              MongoDB, Node.js, Socket.io, React, Redux
            </div>
          </div>
          <div className='landing-page-options'>
          {this.props.authToken ? <button className='green' onClick={() => this.props.dispatch(setAddingRoom())}>Create a Room </button> : '' }
           {this.props.authToken ? '' : <button className='gray-button'><Link to='/signup'>Create an Account</Link></button> }
          </div>
        {this.props.authToken ? <ListofYourRooms /> : ''}
        </main>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  loggingIn: state.auth.loggingIn,
  addingRoom: state.general.addingRoom
})
export default connect(mapStateToProps)(LandingPage)