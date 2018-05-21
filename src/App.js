import React, { Component } from 'react';
import './App.css';
import Room from './Components/Room.js';
import LandingPage from './Components/LandingPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateRoom from './Components/CreateRoom';
import Signup from './Components/Signup';
import LoadingSpinner from './Components/LoadingSpinner';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (

         <div className="App">
          <Router>
            <div>
              {this.props.loading ? <LoadingSpinner/> : ''}
              <Route exact path='/' component={LandingPage} />
              <Switch>
              <Route exact path='/create' component={CreateRoom} />
              <Route exact path='/signup' component={Signup} />

                <Route exact path='/:roomName' component={Room} />
              </Switch>
            </div>
          </Router> 
         </div>

    );
  }
}

const mapStateToProps = state => ({
  loading: state.general.loading
});

export default connect(mapStateToProps)(App);
