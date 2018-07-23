import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'

import AuthPage from '../containers/AuthPage'
import Dashboard from '../containers/Dashboard'
import Contact from '../containers/Contact'
import Profile from '../containers/Profile'

const routes = () =>
  <Router>
    <React.Fragment>
      <Route exact path="/" component={AuthPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/contacto" component={Contact} />
      <Route exact path="/perfil" component={Profile} />
    </React.Fragment>
  </Router>

export default routes