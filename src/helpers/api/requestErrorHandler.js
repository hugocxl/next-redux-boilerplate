export const requestErrorHandler = error => {
  // eslint-disable-next-line no-console
  console.error(`API call failed. ${
    error.name === 'AbortError' ? 'Request aborted.' : error.message
  }`)

  return error
}
