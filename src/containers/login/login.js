import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './login.css'

import { auth } from '../../redux/actions/authActions';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div className='grid'>
    <h1 className='text--center title'>Log In</h1>
    <SignInForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    event.preventDefault();
    const {
      history,
    } = this.props;

    this.props.dispatch( 
      auth(email, password)
    );
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    const props = this.props;

    return (
      <div className="container">
        <form className='topBefore' onSubmit={this.onSubmit}>
        <h1>Login</h1>
          <div>
            <input
              value={email}
              onChange={event => this.setState(byPropKey('email', event.target.value))}
              type='text'
              placeholder='Email Address'
            />
          </div>
          <div >
            <input
              value={password}
              onChange={event => this.setState(byPropKey('password', event.target.value))}
              type='password'
              placeholder='Password'
            />
          </div>
          <div>
            <button disabled={isInvalid} type='submit'>
              Sign In
            </button>
          </div>

          { error && <p>{error.message}</p> }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  auth: state.sessionState.auth,
  error: state.sessionState.error
});

export default compose (
  withRouter,
  connect(mapStateToProps)
)(SignInForm);
