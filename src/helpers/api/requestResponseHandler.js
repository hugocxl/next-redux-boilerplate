export const requestResponseHandler = async response => {
  if (
    response.status === 400 ||
    response.status === 401 ||
    response.status === 500 ||
    response.status === 403 ||
    !response.ok
  ) {
    const parsedResponse = await response.json()
    throw parsedResponse
  }

  return response
}
