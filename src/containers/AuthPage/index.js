import React, { Component } from 'react'
import firebase, { auth, database } from '../../firebase/firebase'
import logo from '../../assets/img/VOLTAJE101.svg'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class AuthPage extends Component {
  
  state = {
    register: false,
    badRepeatPassword: false,
    noName: false,
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  }

  selectLogin = () => {
    this.setState({register: false})
  }
  selectRegister = () => {
    this.setState({register: true})
  }

  handleChangeField = (e)=> this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()
    console.log('entering')
    // Choose beetween registering or login
    if (this.state.register) { // Register
      // Validation repeat password
      if (
        this.state.password !== this.state.repeatPassword ||
        !this.state.name
      ) {
        this.setState({
          badRepeatPassword: this.state.password !== this.state.repeatPassword,
          noName: !this.state.name
        })
      } else {
        this.setState({ badRepeatPassword: false, noName: false })
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(({user}) => {
            database.ref(`users/${user.uid}`).set({
              name: this.state.name,
              email: user.email,
              created: firebase.database.ServerValue.TIMESTAMP
            })
          })
          .catch(error => console.log('Register error: ', error))
      }
    }
    else { // Login
      auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => console.log('Login error', error))
    }
  }

  render() {
    if(this.props.user) {
      return <Redirect to='/dashboard'/>
    }

    return (
      <div className='auth'>
        <div className='auth-title'>
          <img src={logo} alt='voltaje 101'/>
        </div>
        <div className='auth-body'>
          <div className='auth__card'>
            <div className='auth__card__tabs'>
              <span
                className={`auth__card__tab`}
                onClick={this.selectLogin}
              >
                Iniciar Sesion
              </span>
              <span 
                className={`auth__card__tab`}
                onClick={this.selectRegister}
              >
                Registro
              </span>
            </div>
            <form className='auth__card__form'>
              <input
                onChange={this.handleChangeField}
                value={this.state.name}
                name='name'
                placeholder='Nombre'
                type='text'
                className={`auth__card__field ${this.state.register ? 'register' : 'login'} ${this.state.noName ? 'bad' : ''}`}
              />
              {console.log(this.state.noName)}
              <input
                onChange={this.handleChangeField} 
                value={this.state.email}
                name='email'
                placeholder='Email' 
                type='text' 
                className='auth__card__field'
              />
              <input 
                onChange={this.handleChangeField}
                value={this.state.password}
                name='password'
                placeholder='Contraseña' 
                type='password' 
                className='auth__card__field'
              />
              <input 
                onChange={this.handleChangeField}
                value={this.state.repeatPassword}
                name='repeatPassword'
                placeholder='Repetir contraseña' 
                type='password' 
                className={`auth__card__field ${this.state.register ? 'register' : 'login'} ${this.state.badRepeatPassword ? 'bad' : ''}`}
              />
              <button
                className='auth__card__btn'
                onClick={this.handleSubmit}
                >Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({user: state.user.user}))(AuthPage)