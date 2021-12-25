import { helpers } from '@Helpers'

export async function userSignin (credentials) {
  // const url = `${ENV.api.ui}/signin`
  const url = `http://localhost:9000/signin`
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const parsedResponse = await helpers.api.requestResponseHandler(response)
    return parsedResponse.json()
  } catch (e) {
    throw e
  }
}

export async function userSignup (payload) {
  const url = `http://localhost:9000/signup`

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const parsedResponse = await helpers.api.requestResponseHandler(response)
    return parsedResponse.json()
  } catch (e) {
    throw e
  }
}