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
      <div className='signup-container'>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e) => this.handleSignup(e)} className='signup-form'>
          <label htmlFor='name'>Your Name</label>
          <input className='form-control' id='name' ref={input => this.nameInput = input}/>

          <label htmlFor='email'>Email Address</label>
          <input className='form-control' id='email' ref={input => this.emailInput = input}/>
          
          <label htmlFor='handle'>Your Handle (username)</label>
          <input className='form-control' id='handle' ref={input => this.handleInput = input}/>

          <label htmlFor='pass'>Password</label>
          <input className='form-control' id='pass' type='password' ref={input => this.passwordInput = input}/>
          
          <label htmlFor='pass1'>Verify Password</label>
          <input className='form-control' id='pass1' type='password' ref={input => this.password1Input = input}/>
          <small id="emailHelp" className="form-text text-muted">{this.state.warningmessage ? this.state.warningmessage : ''}</small>
          <br/>

          <input type='submit' title='hello' className='btn btn-primary'/>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);