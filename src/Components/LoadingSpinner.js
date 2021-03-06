//================================== Import Dependencies ====================>
import React from 'react';
import './styles/LoadingSpinner.css';
//================================== Loading Spinner Component ====================>

export default class LoadingSpinner extends React.Component {
  render() {
    
    return (
      <div className='loader-container'>
        <div className="loader">Loading...</div>
      </div>
    )
  }
}