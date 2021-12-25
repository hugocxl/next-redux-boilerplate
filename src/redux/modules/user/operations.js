import * as actions from './actions'
import * as api from './api'
import Router from 'next/router'

export const userSignin = (user) => async (dispatch, getState) => {
  dispatch(actions.userSigninRequest())

  try {
    const response = await api.userSignin(user)
    await dispatch(actions.userSigninSuccess(response))
    Router.push('/')
  } catch (error) {
    dispatch(actions.userSigninError(error))
    return error
  }
}
export const userSignup = (user) => async (dispatch, getState) => {
  dispatch(actions.userSignupRequest())

  try {
    const response = await api.userSignup(user)
    await dispatch(actions.userSignupSuccess(response))
    Router.push('/')
  } catch (error) {
    dispatch(actions.userSignupError(error))
    return error
  }
}
