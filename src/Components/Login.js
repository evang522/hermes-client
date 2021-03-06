//================================== Import Dependencies ====================>
import React from 'react';
import {login} from '../actions/auth.actions';
import {connect} from 'react-redux';


//================================== Login Component ====================>

export class Login extends React.Component {
  
  handleLogin = (e) => {
    e.preventDefault();
    if (this.identifierInput.value && this.passwordInput.value)
    this.props.dispatch(login(this.identifierInput.value, this.passwordInput.value));
    this.identifierInput.value = '';
    this.passwordInput.value = '';
  }
  
  render() {
    return(

      <div className='form-uber-container'>
        <div className='form-container'>
          <div className='form-title'>
            Log in to Hermes
          </div>

          <div className='form-name-section'>
            <label htmlFor='identifier' className='add-channel-name'> Email or Handle
            </label>
            <input ref={me => this.identifierInput=me}  id='identifier' />
          </div>
            <div className='form-purpose-section'>
              <label htmlFor='password' className='add-channel-purpose'> Password
              </label>
              <input type='password' ref={me => this.passwordInput = me} id='password' />
            </div>
            <div className='add-channel-button-group'>
              <button onClick={e => this.handleLogin(e)} className='add-channel-submit-button add-channel-button'>Login</button>
              <button className='add-channel-cancel-button add-channel-button' onClick={() => this.props.removeLoginModal()}>Cancel</button>
            </div>
          </div>
      </div>

    )
  }
}

export default connect()(Login);