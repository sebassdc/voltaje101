import { database } from '../../firebase/firebase'

export const USER_UPDATE_DATA = 'USER_UPDATE_DATA'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const updateUserData = payload => {
  return dispatch => {
    if (payload.user) {
      const { uid } = payload.user
      database.ref(`/users/${uid}`)
      .once('value')
      .then(snapshot=> {
        dispatch({
          type: SET_USER_PROFILE,
          name: snapshot.val().name
        })
      })     
    }
    dispatch({
      type: USER_UPDATE_DATA,
      payload
    })
  }
}