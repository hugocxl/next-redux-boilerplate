import * as types from './types'
import { STATES } from '@Constants/states'

export const userReducer = (state = {
  data: null,
  error: null,
  status: STATES.IDLE,
}, action) => {
  switch (action.type) {
    case types.USER_SIGNUP_REQUEST:
    case types.USER_SIGNIN_REQUEST: {
      return {
        ...state,
        error: null,
        status: STATES.LOADING
      }
    }

    case types.USER_SIGNUP_SUCCESS:
    case types.USER_SIGNIN_SUCCESS: {
      return {
        ...state,
        error: null,
        status: STATES.SUCCESS,
        data: action.payload
      }
    }

    case types.USER_SIGNUP_ERROR:
    case types.USER_SIGNIN_ERROR: {
      return {
        ...state,
        status: STATES.ERROR,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}

