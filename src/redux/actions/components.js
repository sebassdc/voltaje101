import { database,auth } from '../../firebase/firebase'

export const COMPONENT_CREATE_NEW_STARTED = 'COMPONENT_CREATE_NEW_STARTED'
export const COMPONENT_CREATE_NEW_ERROR = 'COMPONENT_CREATE_NEW_ERROR'
export const COMPONENT_CREATE_NEW_DONE = 'COMPONENT_CREATE_NEW_DONE'
export const COMPONENT_UPDATE_DATA = 'COMPONENT_UPDATE_DATA'

const createNewComponentStart = () => ({
  type: COMPONENT_CREATE_NEW_STARTED
})

const createNewComponentError = error => ({
  type: COMPONENT_CREATE_NEW_ERROR,
  error
})

const createNewComponentDone = () => ({
  type: COMPONENT_CREATE_NEW_DONE,
})

export const updateComponents = components => ({
  type: COMPONENT_UPDATE_DATA,
  components
})

export const createNewComponent = ({component}) =>
  async (dispatch, getState) => {
    const { uid } = getState().user.user
    dispatch(createNewComponentStart())
    try {
      await database.ref(`users/${uid}/components`).push(component)
      dispatch(createNewComponentDone())
    }
    catch (error) {
      dispatch(createNewComponentError(error))
    }
  }

export const retrieveComponents = () =>{
  console.log('retrieve')
  return (dispatch, getState) => {
    const uid = auth.currentUser.uid
    database.ref(`users/${uid}/components`)
      .on('value', (snapshot, error) => {
        if (error) {
          console.log('error on retrieve components ', error)
        } else {
          console.log('components on retrieveComponents', Object.values(snapshot.val() || {}))
          dispatch(updateComponents(Object.values(snapshot.val() || {})))
        }
      })
  }
}
  