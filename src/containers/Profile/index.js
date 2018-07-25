import React, { Component } from 'react'
import { connect } from 'react-redux'
import FaPencil from 'react-icons/lib/fa/pencil'

import { getUserProfile } from '../../redux/actions/user';

class Profile extends Component {
  state = {
    name: '', 
    profilePictureUri: '',
    file: null
  }

  handleFileChange = (event)=> {
    const file = event.target.files[0]
    let blob = ''
    var reader = new FileReader()
    reader.onload = function() {
      blob = reader.result
    };
    reader.readAsDataURL(file)
    const url = window.URL.createObjectURL(file)
    console.log(url)
    this.setState({
      file
    })
  }

  render() {
    return (
      <div className='profile'>
        <div className='profile__pictureWrapper'>
          <FaPencil size={30} className='profile__pictureWrapper--icon' onClick={()=> document.getElementById('selectedFile').click()}/>
          <img className='profile__pictureWrapper--picture' src='https://firebasestorage.googleapis.com/v0/b/voltaje101-fd539.appspot.com/o/profile-pictures%2FappElPitazo5.jpg?alt=media&token=303cb3dd-9bb1-4c64-96fa-fab009eebd83'/>
          <input 
            type="file" 
            id='selectedFile' 
            className='profile__pictureWrapper--file'
            onChange={this.handleFileChange}
          />
        </div>
        <button className='profile__button' >Guardar cambios</button>
      </div>
    )
  }
}

export default connect(state=> ({ uid: state.user.uid, name: state.user.profile.name }))(Profile)