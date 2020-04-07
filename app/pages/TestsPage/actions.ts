import { action } from 'typesafe-actions'
// import { } from './types'

import { ActionTypes } from './constants'

export const startTestAction = (testName: string) => action(ActionTypes.START_TEST, { testName })

export const saveTestResultAction = (testName: string, result: object) => action(ActionTypes.SAVE_TEST_RESULT, { testName, result })

export const requestSendResultsAction = (results: object) => action(ActionTypes.REQUEST_SEND_RESULTS, { results })

export const sendResultsOkAction = () => action(ActionTypes.SEND_RESULTS_OK)

export const sendResultsKoAction = () => action(ActionTypes.SEND_RESULTS_KO)
