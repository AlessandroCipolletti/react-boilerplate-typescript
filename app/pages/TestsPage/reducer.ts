import { ActionTypes, TestStates, PageStates } from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
  state: PageStates.WAITING,
  environment: {
    state: TestStates.WAITING,
    result: {},
  },
  networkSecurity: {
    state: TestStates.WAITING,
    result: {},
  },
  bandwidth: {
    state: TestStates.WAITING,
    result: {},
  },
  html5Support: {
    state: TestStates.WAITING,
    result: {},
  },
}

function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {

    case ActionTypes.SAVE_TEST_RESULT:
      return {
        ...state,
        [action.payload.testName]: {
          state: TestStates.DONE,
          result: action.payload.result,
        }
      }

    case ActionTypes.START_TEST:
      return {
        ...state,
        state: PageStates.IN_PROGRESS,
        [action.payload.testName]: {
          state: TestStates.IN_PROGRESS,
          result: {},
        }
      }

    case ActionTypes.REQUEST_SEND_RESULTS:
      return {
        ...state,
        state: PageStates.SAVING,
      }

    case ActionTypes.SEND_RESULTS_KO:
      return {
        ...state,
        state: PageStates.SAVEKO,
      }

    case ActionTypes.SEND_RESULTS_OK:
      return {
        ...state,
        state: PageStates.SAVEOK,
      }

    default:
      return state
  }
}

export default homeReducer
