import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SignInForm from '../../auth/containers/login';
import Form from '../../form/container/index';

import * as routes from '../constants/routes';
import withAuthentication from '../../../HOC/withAuthentication';


const App = () =>
  <Router>
    <div>
      <Route exact path={routes.LOG_IN} component={() => (
        <div><SignInForm /><Form /></div>
      )} />
    </div>
  </Router>

export default withAuthentication(App);
