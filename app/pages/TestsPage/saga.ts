import { put, takeEvery } from 'redux-saga/effects'
import { ActionTypes } from './constants'
import { startTestAction, saveTestResultAction } from './actions'

export function* launchTest(action: ReturnType<typeof startTestAction>) {
  const { testName } = action.payload

  try {
    const test = require(`./tests/${testName}.js`).default // eslint-disable-line
    const result = test()
    yield put(saveTestResultAction(testName, {
      status: 'success',
      data: result,
    }))
    console.log(result)
  } catch (err) {
    console.log('dio')
    yield put(saveTestResultAction(testName, {
      status: 'error',
      data: {},
    }))
  }
}

export default function* testsSagas() {
  yield takeEvery(ActionTypes.START_TEST, launchTest)
}
