import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

/* --- STATE --- */
interface HomeState {
  readonly email: string
  readonly firstname: string
  readonly lastname: string
}

/* --- ACTIONS --- */
type HomeActions = ActionType<typeof actions>

/* --- EXPORTS --- */
type ContainerState = HomeState
type ContainerActions = HomeActions

export { ContainerState, ContainerActions }
