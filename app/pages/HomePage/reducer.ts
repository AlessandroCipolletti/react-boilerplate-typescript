import ActionTypes from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
  email: '',
  firstname: '',
  lastname: '',
}

function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {

    case ActionTypes.SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      }

    case ActionTypes.SET_USER_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload.firstname,
      }

    case ActionTypes.SET_USER_LASTNAME:
      return {
        ...state,
        lastname: action.payload.lastname,
      }

    default:
      return state
  }
}

export default homeReducer
