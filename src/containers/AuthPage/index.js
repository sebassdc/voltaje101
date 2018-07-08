import React, { Component } from 'react'
import { auth } from '../../firebase'

export default class AuthPage extends Component {
  constructor(props){
    super()
    this.state = {
      login: true,
      register: false,
      email: '',
      password: ''
    }
  }

  handleChangeField = (e)=> this.setState({[e.target.name]: e.target.value})

  handleSubmit = ()=> auth.signIn(this.state.email, this.state.password)

  render() {
    return (
      <div className='auth'>
        <div className='auth__card'>
          <div className='auth__card__tabs'>
            <span
              className={`auth__card__tab`}
            >
              Iniciar Sesion
            </span>
            <span 
              className={`auth__card__tab`}
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
            <input type='submit' value='Ingresar' className='auth__card__btn'/>
          </form>
        </div>
      </div>
    )
  }
}