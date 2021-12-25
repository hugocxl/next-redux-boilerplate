// Dependencies
import { useState } from 'react'
import { useDispatch } from 'react-redux'

// Hooks
import { useUser } from '@Hooks/useUser'

// Store
import { userOperations } from '@Redux'

export default function Signup({ ...props }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const test = useUser()
  const dispatch = useDispatch()

  function onSubmit() {
    dispatch(userOperations.userSignup(credentials))
  }

  function onChangeInput(event) {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <div>
      <h1>Signup</h1>

      <input
        onChange={onChangeInput}
        type={'text'}
        name={'email'}
        placeholder={'email'}
        value={credentials.email}
      />
      <input
        onChange={onChangeInput}
        type={'password'}
        name={'password'}
        placeholder={'Password'}
        value={credentials.password}
      />
      <button onClick={onSubmit}>Sign up</button>
      {JSON.stringify(test)}
    </div>
  )
}
