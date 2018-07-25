import React from 'react'
import { connect } from 'react-redux'

import Routes from './routes'

import { auth, database } from './firebase/firebase';
import { updateUserData } from './redux/actions/user'
import OverlayedMenu from './components/OverlayedMenu'

import './App.css'

const links = [
  {
    route: "/dashboard",
    name: 'Dashboard'
  },
  {
    route: "/contacto",
    name: 'Contacto'
  },
  {
    route: "/perfil",
    name: 'Perfil'
  },
]

class App extends React.Component {
  state = {
    menuVisible: false
  }
  componentDidMount = () => {
    auth.onAuthStateChanged(user => {
      this.props.dispatch(updateUserData({user}))
    })
  }
  handleToggleMenu = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    })
  }
  render() {
    return (
      <div className="app">
        <OverlayedMenu
          isVisible={this.state.menuVisible}
          toggleHandler={this.handleToggleMenu}
          links={links}
        />
        <Routes/>
      </div>
    )
  }
}

export default connect(state => ({user: state.user.user}))(App)
