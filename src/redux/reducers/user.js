import createReducer from '../../utils/createReducer'
import { USER_UPDATE_DATA, SET_USER_PROFILE } from '../actions/user';

export default createReducer({
  user: null,
  profile: {
    name: '',
    profilePictureUri: ''
  }
}, {
  [USER_UPDATE_DATA]: (state, action) => ({
    ...state,
    user: action.payload.user
  }),
  [SET_USER_PROFILE]: (state, action) => ({
    ...state,
    profile: {
      name: action.name,
      profilePictureUri: ''
    }
  })
})