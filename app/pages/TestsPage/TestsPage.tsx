import React from 'react'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { useSelector, connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'

import reducer from './reducer'
import saga from './saga'
import { makeSelectTests, makeSelectResults, makeSelectPageState } from './selectors'
import { TestStates, PageStates } from './constants'
import { startTestAction, requestSendResultsAction } from './actions'

import messages from './messages'

import Page from 'containers/Page'
import { PageSubtitle } from 'common/styled/PageSubtitle'
import { TestPreview, ThankYouMessage, Saving, SaveError } from './components'

interface Props {
  intl: any
  startTest(testName: string): any
  requestSendResults(results: object): boolean
}

const TestsPage = function(
  { intl, startTest, requestSendResults }: Props
) {
  useInjectReducer({ key: 'tests', reducer })
  useInjectSaga({ key: 'tests', saga })

  const { tests, results, pageState } = useSelector(stateSelector)

  // hook to launch tests one after the other
  React.useEffect(() => {
    const testsNames = Object.keys(tests)
    for (let i = 0; i < testsNames.length; i++) {
      const name = testsNames[i]
      if (tests[name].state === TestStates.WAITING) {
        startTest(name)
        break
      }
      if (tests[name].state === TestStates.IN_PROGRESS) {
        break
      }
    }
  }, [tests])

  // hoot to send and save results if all tests are done
  React.useEffect(() => {
    if (
      tests.state === PageStates.IN_PROGRESS &&
      tests.bandwidth.state === TestStates.DONE &&
      tests.environment.state === TestStates.DONE &&
      tests.networkSecurity.state === TestStates.DONE
    ) {
      requestSendResults(results)
    }
  }, [tests, results])

  return (
    <Page>
      <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
      <TestPreview
        name="environment"
        state={tests.environment.state}
      />
      <TestPreview
        name="NetworkSecurity"
        state={tests.networkSecurity.state}
      />
      <TestPreview
        name="bandwidth"
        state={tests.bandwidth.state}
      />
      {pageState === PageStates.SAVING && <Saving />}
      {pageState === PageStates.SAVEOK && <ThankYouMessage />}
      {pageState === PageStates.SAVEKO && <SaveError />}
    </Page>
  )
}

const stateSelector = createStructuredSelector({
  tests: makeSelectTests(),
  results: makeSelectResults(),
  pageState: makeSelectPageState(),
})

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    startTest: function(testName: string): void { dispatch(startTestAction(testName)) },
    requestSendResults: function(results: object): void { dispatch(requestSendResultsAction(results)) },
  }
}

export const withConnect = connect(null, mapDispatchToProps)

export default injectIntl(compose(withConnect)(TestsPage))
