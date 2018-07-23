import React, { Component } from 'react'

class Dashboard extends Component {
  state = {
    name: '', 
    profilePicture: ''
  }
  render() {
    return (
      <div className='profile'>
        <img className='profile__picture' src='https://firebasestorage.googleapis.com/v0/b/voltaje101-fd539.appspot.com/o/profile-pictures%2FappElPitazo5.jpg?alt=media&token=303cb3dd-9bb1-4c64-96fa-fab009eebd83'/>
        <input type='text' className='profile__name'/>
        <button className='profile__button' >Guardar cambios</button>
      </div>
    )
  }
}

export default Dashboard