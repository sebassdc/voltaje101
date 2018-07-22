import React, { Component } from 'react'
import { auth } from '../../firebase/firebase'

const {
  createUserWithEmailAndPassword: signUp,
  signInWithEmailAndPassword: signIn,
} = auth

export default class AuthPage extends Component {
  
  state = {
    login: true,
    register: false,
    badRepeatPassword: false,
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

  handleSubmit = () => {
    // Choose beetween registering or login
    if (this.state.register) { // Register
      // Validation repeat password
      if (this.state.password !== this.state.repeatPassword) {
        this.setState({badRepeatPassword: true})
      } else {
        this.setState({ badRepeatPassword: false })
        signUp(this.state.email, this.state.password)
          .catch(error => console.log('Register error: ', error))
      }
    }
    else { // Login
      signIn(this.state.email, this.state.password)
        .catch(error => console.log('Login error', error))
    }
  }

  render() {
    return (
      <div className='auth'>
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
              name='email'
              placeholder='Email' 
              type='text' 
              className='auth__card__field'
            />
            <input 
              onChange={this.handleChangeField} 
              name='password'
              placeholder='Contraseña' 
              type='password' 
              className='auth__card__field'
            />
            <input 
              onChange={this.handleChangeField} 
              name='repeatPassword'
              placeholder='Repetir contraseña' 
              type='password' 
              className={`auth__card__field ${this.state.register ? 'register' : 'login'} ${this.state.badRepeatPassword ? 'bad' : ''}`}
            />
            <input type='submit' value='Ingresar' className='auth__card__btn'/>
          </form>
        </div>
      </div>
    )
  }
}