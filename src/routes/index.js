import React from 'react'
import { Switch, Route } from 'react-router'
import Editor from '../containers/Editor' 

import AuthPage from '../containers/AuthPage'
import Dashboard from '../containers/Dashboard'
import Contact from '../containers/Contact'

const routes = () =>
  <Switch>
    <Route exact path="/" component={AuthPage} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/contacto" component={Contact} />
  </Switch>

export default routes