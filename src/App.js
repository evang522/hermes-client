import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store.js';
import './App.css';
import Room from './Components/Room.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <div className="App">
          <Router>
            <Route path='/rooms/:roomName' component={Room}/>
          </Router>
         </div>
      </Provider>
    );
  }
}

export default App;
