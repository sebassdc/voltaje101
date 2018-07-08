import React from 'react'
import { Switch, Route } from 'react-router' 

import AuthPage from '../containers/AuthPage'

const routes = ()=>
  <Switch>
    <Route exact path="/" component={AuthPage} />
  </Switch>

export default routes  