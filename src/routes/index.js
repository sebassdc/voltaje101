import React from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../firebase/firebase'
import AuthPage from '../containers/AuthPage'
import Dashboard from '../containers/Dashboard'
import Contact from '../containers/Contact'
import Profile from '../containers/Profile'

const routes = ({user}) => {
  const handleClick = ()=> {
    auth.signOut()
      .catch(err=> {
        console.log('There was an error trying to log out!')
      })
  }

  return (
    <Router>
      <React.Fragment>
        {user && (
            <nav className='navbar'>
              <span className='navbar__logout' onClick={handleClick}>
                Log out
              </span>
            </nav>
          )
        }
        <Route exact path="/" component={AuthPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contacto" component={Contact} />
        <Route path="/perfil" component={Profile} />
      </React.Fragment>
    </Router>
  )
}


export default connect(state=> ({ user: state.user.user }))(routes)