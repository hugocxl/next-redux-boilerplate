// Dependencies
import { useSelector } from 'react-redux'

// Constants
import { helpers } from '@Helpers'

export function useUser () {
  const user = useSelector(state => state.user)

  return {
    ...user,
    isLoading: helpers.store.getLoadingState(user)
  }
}