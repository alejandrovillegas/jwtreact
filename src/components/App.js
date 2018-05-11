import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignInForm from '../containers/login/login'

import * as routes from '../constants/routes';

import withAuthentication from '../HOC/withAuthentication';

const App = () =>
  <Router>
    <div>
      <Route exact path={routes.LOG_IN} component={() => <SignInForm />} />
    </div>
  </Router>

export default withAuthentication(App);
