// Constants
import { STATES } from '@Constants'

export function getLoadingState({ status }) {
  return status === STATES.LOADING
}
