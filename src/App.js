import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store.js';
import './App.css';
import Room from './Components/Room.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        {/* Header-Navbar */}
        <Room/>
      </div>
      </Provider>
    );
  }
}

export default App;
