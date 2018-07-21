import React from 'react'
import { connect } from 'react-redux'

import Routes from './routes'

import './App.css'
import { auth } from './firebase/firebase';

class App extends React.Component {
  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.props.dispatch(updateUserData())
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
