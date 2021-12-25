// Helpers
import { apiHelpers } from '@Helpers/api'

export const apiMiddleware = (store) => (next) => (action) => {
  // Checker to intercept only api calls actions
  if (!action.meta || action.meta.type !== 'api') {
    return next(action)
  }

  // Dispatch original action
  next({
    type: action.type,
    ...action
  })

  // Dispatch loading action
  next({
    type: action.type + '_LOADING'
  })

  const { api, endpoint, params, ...fetchOptions } = action.meta
  const url = apiHelpers.buildUrl({ api, endpoint, params })

  return (
    fetch(url, fetchOptions)
      // Custom middleware to handle responses
      .then(apiHelpers.requestResponseHandler)

      // Convert response to JSON
      .then((response) => response.json())

      // Dispatch success action
      .then((data) =>
        next({
          type: action.type + '_SUCCESS',
          payload: data
        })
      )

      // OnSuccess call (if provided)
      .then((data) => {
        if (
          action.meta.onSuccess &&
          typeof action.meta.onSuccess === 'function'
        ) {
          action.meta.onSuccess(data)
        }
        return data // For the next promise in the chain
      })

      // Error catching
      .catch((error) => {
        // Custom middleware to handle responses
        const handledError = apiHelpers.requestErrorHandler(error)

        // OnError call (if provided)
        if (action.meta.onError && typeof action.meta.onError === 'function') {
          action.meta.onError(handledError)
        }

        return next({
          type: action.type + '_ERROR',
          error: handledError
        })
      })
  )
}
