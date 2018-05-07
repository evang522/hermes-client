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
      <div className='login-container'>
        <br/>
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e) => this.handleLogin(e)} className='login-container'>
          <label htmlFor='identifier'>Email or Handle</label>
          <input className='form-control' id='identifier' ref={input => this.identifierInput = input}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          <br/>
          <label htmlFor='password'>Password</label>
          <input className='form-control' id='password' type='password' ref={input => this.passwordInput = input}/>
          <br/>
          <input type='submit' title='hello' className='btn btn-primary'/>
        </form>
      </div>
    )
  }
}

export default connect()(Login);