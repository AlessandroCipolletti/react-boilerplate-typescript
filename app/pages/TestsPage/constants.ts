export enum ActionTypes {
  START_TEST = 'app/TestsPage/START_TEST',
  SAVE_TEST_RESULT = 'app/TestsPage/SAVE_TEST_RESULT',
}

export enum TestStates {
  WAITING = 0,
  IN_PROGRESS = 1,
  DONE = 2,
}

export enum TestsTypes {
  'environment',
  'networkSecurity',
  'bandwidth',
  'html5Support',
}
