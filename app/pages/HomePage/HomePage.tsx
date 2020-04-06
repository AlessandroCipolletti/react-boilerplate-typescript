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
import InputText from 'common/components/InputText'
import Submit from './components/Submit'
import { Wrapper, PageSubtitle, PageMessage, Form } from './styled'

interface Props {
  intl: any
  setUserEmail(): any
  setUserFirstname(): any
  setUserLastname(): any
}

const HomePage = function(
  { intl, setUserEmail, setUserFirstname, setUserLastname }: Props
) {
  useInjectReducer({ key: 'home', reducer: reducer })

  const { email, firstname, lastname } = useSelector(stateSelector)

  React.useEffect(() => {
    console.table({email, firstname, lastname})
  }, [email, firstname, lastname])

  const a = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Page>
      <Wrapper>
        <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
        <PageMessage>{intl.formatMessage(messages.initialInstractions)}</PageMessage>

        <Form onSubmit={a}>
          <InputText
            type="email"
            name="email"
            placeholder={intl.formatMessage(messages.email)}
            onChange={setUserEmail}
          />
          <InputText
            type="text"
            name="firstname"
            placeholder={intl.formatMessage(messages.firstname)}
            onChange={setUserFirstname}
          />
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

      </Wrapper>
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
