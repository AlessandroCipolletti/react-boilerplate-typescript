export enum ActionTypes {
  START_TEST = 'app/TestsPage/START_TEST',
  SAVE_TEST_RESULT = 'app/TestsPage/SAVE_TEST_RESULT',
  REQUEST_SEND_RESULTS = 'app/TestsPage/REQUEST_SEND_RESULTS',
  SEND_RESULTS_OK = 'app/TestsPage/SEND_RESULTS_OK',
  SEND_RESULTS_KO = 'app/TestsPage/SEND_RESULTS_KO',
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

export enum PageStates {
  WAITING = 0,
  IN_PROGRESS = 1,
  SAVING = 2,
  SAVEKO = 3,
  SAVEOK = 4,
}
