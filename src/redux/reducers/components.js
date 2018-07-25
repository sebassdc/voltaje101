import {
  COMPONENT_CREATE_NEW_DONE,
  COMPONENT_CREATE_NEW_STARTED,
  COMPONENT_CREATE_NEW_ERROR,
  COMPONENT_UPDATE_DATA,
} from '../actions/components'
import createReducer from '../../utils/createReducer';

export default createReducer({
  creating: false,
  error: null,
  components: []
}, {
  [COMPONENT_CREATE_NEW_STARTED]: (state, action) => {
    console.log('reducer component ')
    return ({
      ...state,
      creating: true,
    })
  },
  [COMPONENT_CREATE_NEW_ERROR]: (state, action) => ({
    ...state,
    error: action.error
  }),
  [COMPONENT_CREATE_NEW_DONE]: (state, action) => ({
    ...state,
    creating: false,
  }),
  [COMPONENT_UPDATE_DATA]: (state, action) => {
    console.log('Components on reducer', action.components)
    return ({
      ...state,
      components: action.components,
    })
  },
})