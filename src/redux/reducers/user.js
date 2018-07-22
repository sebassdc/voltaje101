import createReducer from '../../utils/createReducer'
import { USER_UPDATE_DATA } from '../actions/user';

export default createReducer({
  user: null
}, {
  [USER_UPDATE_DATA]: (state, action) => ({
    ...state,
    user: action.payload.user
  })
})