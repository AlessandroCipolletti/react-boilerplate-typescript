import React from 'react'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { useSelector, connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'

import reducer from './reducer'
import saga from './saga'
import { makeSelectTests, makeSelectResults } from './selectors'
import { TestStates } from './constants'
import { startTestAction, sendResultsAction } from './actions'

import messages from './messages'

import Page from 'containers/Page'
import { PageSubtitle } from 'common/styled/PageSubtitle'
import TestPreview from './components/TestPreview'
import ThankYouMessage from './components/ThankYouMessage'

interface Props {
  intl: any
  startTest(testName: string): any
  sendResults(results: object): boolean
}

const TestsPage = function(
  { intl, startTest, sendResults }: Props
) {
  useInjectReducer({ key: 'tests', reducer })
  useInjectSaga({ key: 'tests', saga })

  const { tests, results } = useSelector(stateSelector)
  const [testsAreDone, setTestsAreDone] = React.useState(false)

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
      tests.bandwidth.state === TestStates.DONE &&
      tests.environment.state === TestStates.DONE &&
      tests.networkSecurity.state === TestStates.DONE
    ) {
      sendResults(results)
      setTestsAreDone(true)
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
      {testsAreDone && <ThankYouMessage />}
    </Page>
  )
}

const stateSelector = createStructuredSelector({
  tests: makeSelectTests(),
  results: makeSelectResults(),
})

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    startTest: function(testName: string): void { dispatch(startTestAction(testName)) },
    sendResults: function(results: object): void { dispatch(sendResultsAction(results)) },
  }
}

export const withConnect = connect(null, mapDispatchToProps)

export default injectIntl(compose(withConnect)(TestsPage))
