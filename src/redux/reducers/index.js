import { combineReducers } from 'redux'
import user from './user'
import components from './components'

export default combineReducers({
  user,
  components,
})