import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store.js';
import './App.css';
import Room from './Components/Room.js';
import LandingPage from './Components/LandingPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateRoom from './Components/CreateRoom';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="App">
          <Router>
            <div>
              <Route exact path='/' component={LandingPage} />
              <Switch>
              <Route exact path='/create' component={CreateRoom} />
              <Route exact path='/signup' component={Signup} />

                <Route exact path='/:roomName' component={Room} />
              </Switch>
            </div>
          </Router> 
         </div>
      </Provider>
    );
  }
}

export default App;
