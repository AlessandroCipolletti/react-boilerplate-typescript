import { ActionTypes, TestStates} from './constants'
import { ContainerState, ContainerActions } from './types'

export const initialState: ContainerState = {
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
  // html5Support: {
  //   state: TestStates.WAITING,
  //   result: {},
  // },
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
        [action.payload.testName]: {
          state: TestStates.IN_PROGRESS,
          result: {},
        }
      }

    default:
      return state
  }
}

export default homeReducer
