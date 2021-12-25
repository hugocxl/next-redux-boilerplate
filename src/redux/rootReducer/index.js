// Dependencies
import { combineReducers } from 'redux'

// Modules
import { userReducer } from '../modules/user'

export const rootReducer = combineReducers({
  user: userReducer
})
