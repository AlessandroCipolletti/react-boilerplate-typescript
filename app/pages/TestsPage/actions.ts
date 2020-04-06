import { action } from 'typesafe-actions'
// import { } from './types'

import { ActionTypes } from './constants'

export const startTestAction = (testName: string) => action(ActionTypes.START_TEST, { testName })

export const saveTestResultAction = (testName: string, result: object) => action(ActionTypes.SAVE_TEST_RESULT, { testName, result })
