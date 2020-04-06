import React from 'react'
import { injectIntl } from 'react-intl'
import messages from './messages'

import Page from 'containers/Page'
import InputText from 'common/components/InputText'

import { Wrapper, PageSubtitle, PageMessage } from './styled'

interface Props {
  intl: any
}

const HomePage = function({ intl }: Props) {
  const save = React.useCallback((value) => {
    console.log(value)
  }, [])

  return (
    <Page>
      <Wrapper>
        <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
        <PageMessage>{intl.formatMessage(messages.initialInstractions)}</PageMessage>

        <InputText
          type="email"
          name="email"
          placeholder={intl.formatMessage(messages.email)}
          onChange={save}
        />
        <InputText
          type="text"
          name="name"
          placeholder={intl.formatMessage(messages.name)}
          onChange={save}
        />
        <InputText
          type="text"
          name="surname"
          placeholder={intl.formatMessage(messages.surname)}
          onChange={save}
        />
      </Wrapper>
    </Page>
  )
}

export default injectIntl(HomePage)
