import React from 'react';
import {connect} from 'react-redux';
import './styles/LandingHeader.css';
export class LandingHeader extends React.Component {
  render() {

    return (

      <div className='header-container'>
      </div>
    )
  }
}

export default connect()(LandingHeader);