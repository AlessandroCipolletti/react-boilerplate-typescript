import React from 'react'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { useSelector, connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'

import reducer from './reducer'
import saga from './saga'
import { makeSelectTests } from './selectors'

import { saveTestResultAction, startTestAction } from './actions'

import messages from './messages'

import Page from 'containers/Page'
import { PageSubtitle } from 'common/styled/PageSubtitle'
import TestPreview from './components/TestPreview'
// import {  } from './styled'

interface Props {
  intl: any
  startTest(testName: string): any
  saveTestResult(testName: string, result: object): any
}

const HomePage = function(
  { intl, startTest }: Props
) {
  useInjectReducer({ key: 'tests', reducer })
  useInjectSaga({ key: 'tests', saga })

  const { tests } = useSelector(stateSelector)

  React.useEffect(() => {
    const testsNames = Object.keys(tests)
    for (let i = 0; i < testsNames.length; i++) {
      const name = testsNames[i]
      if (tests[name].state === 0) {
        startTest(name)
        break
      }
      if (tests[name].state === 1) {
        break
      }
    }
  }, [tests])

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
      <TestPreview
        name="html5Support"
        state={tests.html5Support.state}
      />
    </Page>
  )
}

const stateSelector = createStructuredSelector({
  tests: makeSelectTests(),
})

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    startTest: (testName: string) => dispatch(startTestAction(testName)),
    saveTestResult: (testName: string, result: object) => dispatch(saveTestResultAction(testName, result)),
  }
}

export const withConnect = connect(null, mapDispatchToProps)

export default injectIntl(compose(withConnect)(HomePage))
