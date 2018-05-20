//================================== Import Dependencies ====================>
import React from 'react';
import {signup} from '../actions/auth.actions';
import {connect} from 'react-redux';


//================================== Signup Component ====================>

export class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state  = {
      warningmessage: ''
    }
  }

  
  handleSignup = (e) => {
    e.preventDefault();
    if (this.nameInput.value && this.emailInput.value&& this.handleInput.value && this.passwordInput.value && this.password1Input.value) {
      if (this.passwordInput.value !== this.password1Input.value) {
        return this.setState({
          warningmessage:'Passwords do not match.'
        })
      }
      
      if (this.handleInput.value.indexOf('@') !== -1) {
        return this.setState({
          warningmessage:'Handle may not contain @ character.'
        })
      }
      
    const userInfo = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      handle: this.handleInput.value,
      password: this.passwordInput.value
    }
      
    this.props.dispatch(signup(userInfo));
    this.nameInput.value = '';
    this.passwordInput.value = '';
    }
  }
  
  render() {
    return(

       <div className='add-channel-container'>
        <div className='form-container'>
            <div className='form-title'>
              Create an Account:
            </div>

            <div className='form-name-section'>
              <label htmlFor='channelName' className='add-channel-name'> Your Name
              </label>
              <input ref={me => this.nameInput=me}  id='name'/>
            </div>

            <div className='form-name-section'>
              <label htmlFor='email' className='add-channel-purpose'> Email Address
              </label>
              <input ref={me => this.emailInput = me} id='email' />
            </div>
            <div className='form-name-section'>
              <label htmlFor='handle' className='add-channel-purpose'> Handle
              </label>
              <input ref={me => this.handleInput = me} id='handle' />
            </div>

            <div className='form-name-section'>
              <label htmlFor='handle' className='add-channel-purpose'> Password
              </label>
              <input ref={me => this.passwordInput = me} type='password' id='password' />
            </div>

            <div className='form-purpose-section'>
              <label htmlFor='password1' className='add-channel-purpose'> Verify Password
              </label>
              <input ref={me => this.password1Input = me}  type='password' id='password1' />
            </div>

            <div className='add-channel-button-group'>
              <button onClick={() => this.handleSignup()} className='add-channel-submit-button add-channel-button'>Let's Go!</button>
              <button className='add-channel-cancel-button add-channel-button'>Cancel</button>
            </div>
          </div>
      </div>
    )
  }
}

export default connect()(Signup);