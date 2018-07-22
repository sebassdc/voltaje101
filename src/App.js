import React from 'react'
import { connect } from 'react-redux'

import Routes from './routes'

import './App.css'
import { auth } from './firebase/firebase';
import { updateUserData } from './redux/actions/user'


class App extends React.Component {
  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.props.dispatch(updateUserData({user}))
    })
  }
  render() {
    return (
      <div className="app">
        <Routes/>
      </div>
    )
  }
}

export default connect()(App)
