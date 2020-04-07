import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from './constants'
import { startTestAction, saveTestResultAction } from './actions'

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

export default function* testsSagas() {
  yield takeEvery(ActionTypes.START_TEST, launchTest)
}
