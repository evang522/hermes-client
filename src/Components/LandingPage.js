//================================== Import dependencies ====================>
import React from 'react';
import Login from './Login';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ListofYourRooms from './ListofYourRooms';
import LandingHeader from '../Components/LandingHeader';

export class LandingPage extends React.Component {

  render() {

    return (
      <section className='landing-page-container'>
        <header className='landing-page-header'>
          <LandingHeader/>
        </header>
        {this.props.authToken ? <ListofYourRooms /> : <Login/>}
        <br/>
        <br/>
        <div className='landing-page-about-section'>
          <h1>About hermes</h1>
          <Link to='/create'>Create a new Room </Link>
          <br/>
          <Link to='/signup'>Create an Account</Link>
        </div>
      </section>
    )
  }

}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})
export default connect(mapStateToProps)(LandingPage)