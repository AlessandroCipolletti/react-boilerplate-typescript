import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { TestStates, PageStates } from './constants'

/* --- STATE --- */
interface TestsState {
  state: PageStates.WAITING | PageStates.IN_PROGRESS | PageStates.SAVING | PageStates.SAVEKO | PageStates.SAVEOK
  environment: Test
  networkSecurity: Test
  bandwidth: Test
  // html5Support: Test
}

/* --- ACTIONS --- */
type TestsActions = ActionType<typeof actions>

/* --- EXPORTS --- */
export interface Test {
  readonly state: TestStates.WAITING | TestStates.IN_PROGRESS | TestStates.DONE
  readonly result: object
}
export type ContainerState = TestsState
export type ContainerActions = TestsActions
