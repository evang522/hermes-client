import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store.js';
import './App.css';
import Room from './Components/Room.js';
import LandingPage from './Components/LandingPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="App">
          <Router>
            <div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/:roomName' component={Room}/>
            </div>
          </Router>
         </div>
      </Provider>
    );
  }
}

export default App;
