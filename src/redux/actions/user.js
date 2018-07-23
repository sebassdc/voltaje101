import { database } from '../../firebase/firebase'

export const USER_UPDATE_DATA = 'USER_UPDATE_DATA'

export const updateUserData = payload => ({
  type: USER_UPDATE_DATA,
  payload
})

export const getUserProfile = ()=> {
  return (dispatch, getState)=> {
    const uid = getState().user.uid
    database.ref(`/users/${uid}`)
      .once('value')
      .then(snapshot=> {
        console.log(snapshot.val())
      })
  }
}