import React from 'react'
import { Switch, Route } from 'react-router'
import Editor from '../containers/Editor' 

import AuthPage from '../containers/AuthPage'
import Dashboard from '../containers/Dashboard';

const routes = () =>
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>

export default routes