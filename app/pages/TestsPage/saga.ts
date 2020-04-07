import { call, put, select, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from './constants'
import {
  startTestAction,
  saveTestResultAction,
  requestSendResultsAction,
  sendResultsOkAction,
  sendResultsKoAction,
} from './actions'

import { makeSelectEmail, makeSelectFirstname, makeSelectLastname } from 'pages/HomePage/selectors'

export function* launchTest(action: ReturnType<typeof startTestAction>) {
  const { testName } = action.payload

  try {
    const test = require(`./testsScripts/${testName}.js`).default // eslint-disable-line
    const result = yield call(test)
    yield put(saveTestResultAction(testName, {
      status: 'success',
      data: result,
    }))
  } catch (err) {
    yield put(saveTestResultAction(testName, {
      status: 'error',
      data: {},
    }))
  }
}

export function* sendResults(action: ReturnType<typeof requestSendResultsAction>) {
  const { results } = action.payload

  const email = yield select(makeSelectEmail())
  const firstname = yield select(makeSelectFirstname())
  const lastname = yield select(makeSelectLastname())

  const data = {
    email,
    firstname,
    lastname,
    tests: results,
  }
  console.log('save results json: ', data)

  const result = yield call(async() => {
    const headers = new Headers()
    headers.append('content-type', 'application/json')

    const response = await fetch('https://b06i57mm9c.execute-api.eu-west-1.amazonaws.com/production/benchmarks', {
      method: 'POST',
      headers,
      body: JSON.stringify({ data })
    })
    return !!response.ok
  })

  if (result) {
    yield put(sendResultsOkAction())
  } else {
    yield put(sendResultsKoAction())
  }
}

export default function* testsSagas() {
  yield takeEvery(ActionTypes.START_TEST, launchTest)
  yield takeEvery(ActionTypes.REQUEST_SEND_RESULTS, sendResults)
}
