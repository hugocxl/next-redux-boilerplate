import * as types from './types'

export const userSigninRequest = () => ({
  type: types.USER_SIGNIN_REQUEST
})

export const userSigninSuccess = (payload) => ({
  type: types.USER_SIGNIN_SUCCESS,
  payload
})

export const userSigninError = (payload) => ({
  type: types.USER_SIGNIN_ERROR,
  payload
})

export const userSignupRequest = () => ({
  type: types.USER_SIGNIN_REQUEST
})

export const userSignupSuccess = (payload) => ({
  type: types.USER_SIGNIN_SUCCESS,
  payload
})

export const userSignupError = (payload) => ({
  type: types.USER_SIGNIN_ERROR,
  payload
})
