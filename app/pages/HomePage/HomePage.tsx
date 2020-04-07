import React from 'react'
import { push } from 'connected-react-router'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { connect, useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer } from 'redux-injectors'

import reducer from './reducer'
import {
  setUserEmailAction,
  setUserFirstnameAction,
  setUserLastnameAction,
} from './actions'

import { makeSelectEmail, makeSelectFirstname, makeSelectLastname } from './selectors'

import messages from './messages'

import Page from 'containers/Page'
import FormEvent from 'common/types/FormEvent'
import InputText from 'common/components/InputText'
import Submit from './components/Submit'
import Checkbox from './components/Checkbox'
import { PageSubtitle, PageMessage } from 'common/styled/Page'
import { Form } from './styled'

interface Props {
  intl: any
  setUserEmail(email: string): any
  setUserFirstname(firstname: string): any
  setUserLastname(lastname: string): any
}

const HomePage = function(
  { intl, setUserEmail, setUserFirstname, setUserLastname }: Props
) {
  useInjectReducer({ key: 'home', reducer: reducer })
  const dispatch = useDispatch()

  const { email, firstname, lastname } = useSelector(stateSelector)
  const [userAcceptedTerms, setUserAcceptedTerms] = React.useState(false)

  const goToTests = React.useCallback((e: FormEvent) => {
    e.preventDefault()
    dispatch(push('/tests'))
  }, [])

  const goToTerms = React.useCallback(() => {
    dispatch(push('/terms'))
  }, [])

  const toggleAcceptedTerms = React.useCallback((e) => {
    setUserAcceptedTerms(e.target.checked)
  }, [])

  return (
    <Page>
      <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
      <PageMessage>{intl.formatMessage(messages.initialInstractions)}</PageMessage>

      <Form onSubmit={goToTests} method="post">
        <InputText
          type="email"
          name="email"
          placeholder={intl.formatMessage(messages.email)}
          onChange={setUserEmail}
          initialValue={email}
        />
        <br />
        <InputText
          type="text"
          name="firstname"
          placeholder={intl.formatMessage(messages.firstname)}
          onChange={setUserFirstname}
          initialValue={firstname}
        />
        <br />
        <InputText
          type="text"
          name="lastname"
          placeholder={intl.formatMessage(messages.lastname)}
          onChange={setUserLastname}
          initialValue={lastname}
        />
        <br />
        <PageMessage>
          <Checkbox onChange={toggleAcceptedTerms} />
          {intl.formatMessage(messages.accept)}&nbsp;<a href="#" role="button" onClick={goToTerms}>{intl.formatMessage(messages.terms)}</a>
        </PageMessage>
        <br />
        <Submit disabled={!userAcceptedTerms} />
      </Form>
    </Page>
  )
}

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
  firstname: makeSelectFirstname(),
  lastname: makeSelectLastname(),
})

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setUserEmail: (email: string) => dispatch(setUserEmailAction(email)),
    setUserFirstname: (firstname: string) => dispatch(setUserFirstnameAction(firstname)),
    setUserLastname: (lastname: string) => dispatch(setUserLastnameAction(lastname)),
  }
}

export const withConnect = connect(null, mapDispatchToProps)

export default injectIntl(compose(withConnect)(HomePage))
