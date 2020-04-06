import React from 'react'
import { injectIntl } from 'react-intl'
import { Dispatch, compose } from 'redux'
import { useSelector, connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useInjectReducer } from 'redux-injectors'

import reducer from './reducer'
import {
  makeSelectEmail,
  makeSelectFirstname,
  makeSelectLastname,
} from './selectors'

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

  const { email, firstname, lastname } = useSelector(stateSelector)

  React.useEffect(() => {
    console.table({email, firstname, lastname})
  }, [email, firstname, lastname])


  const a = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Page>
      <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
      <PageMessage>{intl.formatMessage(messages.initialInstractions)}</PageMessage>

      <Form onSubmit={a} method="post">
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
