//================================== Import dependencies ====================>
import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ListofYourRooms from './ListofYourRooms';
import './styles/LandingPage.css';

export class LandingPage extends React.Component {

  render() {

    return (
      <section className='landing-page-container'>
        <div className='landing-page-header'>
          <div className='landing-page-header-title'>
            #Hermes
          </div>
          <div className='landing-page-header-options'>
            <ul className='lp-header-ops-ul'>
              <li>Preferences</li>
              {!this.props.authToken ?  <li>Login</li> : <li>Logout</li>}
            </ul>
          </div>
        </div>
        <main className='landing-page-main'>
        {this.props.authToken ? <ListofYourRooms /> : <Login/>}
        <div className='landing-page-about-section'>
          <h1>About hermes</h1>
          <Link to='/create'>Create a new Room </Link>
          <br/>
          <Link to='/signup'>Create an Account</Link>
        </div>
        </main>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})
export default connect(mapStateToProps)(LandingPage)