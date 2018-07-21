import React, { Component } from 'react'

import { auth } from '../../firebase'
import logo from '../../assets/img/VOLTAJE101.svg'
import logoCustomerService from '../../assets/img/customer-service.svg'
import logoQuestion from '../../assets/img/question.svg'
import logoHelp from '../../assets/img/help.svg'

export default class Contact extends Component {
  
  state = {
    email: '',
    textArea: ''
  }

  handleInputChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit = () => {
    if (this.state.email) {
      // Validation
      if (this.state.password === this.state.repeatPassword)
      auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => console.log('Register error: ', error))
    } else {

    }
    auth.signIn(this.state.email, this.state.password)
  }

  render() {
    const { email, textArea } = this.state
    return (
      <div className="contact">
        <div className="contact-title">
          <h1>Contacto</h1>
        </div>
        <div className="contact-body">
          <div className="contact-body__container">
            <div className="contact-component-adaptable">
              <h3>Si tiene alguna duda, estamos aqui para ayudarle</h3>
              <img src={logoQuestion} alt=""/>
              <h4>Estamos al tanto de cualquier necesidad de nuestros usuarios.</h4>
            </div>
          </div>

          <div className="contact-body__container flex-end">
            <div className="contact-component-adaptable">
              <img src={logoCustomerService} alt="customer-service"/>
              <br/>
              <h3>Contacta a nuestros desarrolladores</h3>
              <div className="contact-component__container">
                <div>
                  <h4>Sebastian Hurtado</h4>
                  <h4>Telf. +58 414 0079715</h4>
                  <h4>Lun. 08:00 am - 5:00 pm</h4>
                </div>
                <div className="contact-component__divisor"></div>
                <div>
                  <h4>Luis González</h4>
                  <h4>Telf. +58 424 6784079</h4>
                  <h4>Lun. 08:00 am - 5:00 pm</h4>
                </div>
              </div>
              <div className="contact-component__container">
                <div>
                  <h4>Luis Colmenarez</h4>
                  <h4>Telf. +58 414 6936221</h4>
                  <h4>Lun. 12:00 pm - 8:00 pm</h4>
                </div>
                <div className="contact-component__divisor"></div>
                <div>
                  <h4>Diego Parra</h4>
                  <h4>Telf. +58 414 5391265</h4>
                  <h4>Sab. 08:00 am - 5:00 pm</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-body__container">
            <form className="contact-component-adaptable" onSubmit={this.handleSubmit}>
              <h4 className="align-self-center">O puedes enviar un correo a soporte.</h4>
              <img src={logoHelp} className="align-self-center" alt="help"/>
              <input 
                onChange={this.handleInputChange} 
                value={email}
                name="email" type="email" placeholder="Tu correo" className="contact-component__field" required/>
              <br/>
              <textarea 
                onChange={this.handleInputChange}
                value={textArea} 
                placeholder="Redacta tu mensaje aqui"
                name="textArea"
                cols="30" rows="10" className="contact-component__textArea"></textarea>
              <br/>
              <input className="contact-component__btn" type="button" value="enviar" />
            </form>
          </div>

          
        </div>

        <div className="contact-footer">
          <div className="contact-footer__item">
            <h4>&copy; Copyright</h4>
          </div>
          <div className="contact-footer__item">
            <h3 className="contact-footer__item-title">Autores</h3>
            <br/>
            <div>
              <h4><a href="https://github.com/sebassdc">Sebastian Hurtado</a></h4>
              <h4><a href="https://github.com/luisjgh1">Luis González</a></h4>
              <h4><a href="https://github.com/Diegod2694">Diego Parra</a></h4>
              <h4><a href="https://www.facebook.com/luisjose.colmenarez.7">Luis colmenarez</a></h4>
            </div>
          </div>
          <img className="contact-footer__logo" src={logo} alt="app logo"/>
        </div>
      </div>
    )
  }
}