import React from 'react'
import { push } from 'connected-react-router'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { connect , useDispatch } from 'react-redux'
import { useInjectReducer } from 'redux-injectors'


import reducer from './reducer'
import {
  setUserEmailAction,
  setUserFirstnameAction,
  setUserLastnameAction,
} from './actions'

import messages from './messages'

import Page from 'containers/Page'
import FormEvent from 'common/types/FormEvent'
import InputText from 'common/components/InputText'
import Submit from './components/Submit'
import { PageSubtitle } from 'common/styled/PageSubtitle'
import { PageMessage, Form } from './styled'


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

  const goToTests = React.useCallback((e: FormEvent) => {
    e.preventDefault()
    dispatch(push('/tests'))
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
        />
        <br />
        <InputText
          type="text"
          name="firstname"
          placeholder={intl.formatMessage(messages.firstname)}
          onChange={setUserFirstname}
        />
        <br />
        <InputText
          type="text"
          name="lastname"
          placeholder={intl.formatMessage(messages.lastname)}
          onChange={setUserLastname}
        />
        <br />
        <br />
        <br />
        <Submit />
      </Form>
    </Page>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setUserEmail: (email: string) => dispatch(setUserEmailAction(email)),
    setUserFirstname: (firstname: string) => dispatch(setUserFirstnameAction(firstname)),
    setUserLastname: (lastname: string) => dispatch(setUserLastnameAction(lastname)),
  }
}

export const withConnect = connect(null, mapDispatchToProps)

export default injectIntl(compose(withConnect)(HomePage))
