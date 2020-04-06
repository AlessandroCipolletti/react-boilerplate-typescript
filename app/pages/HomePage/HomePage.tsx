import React from 'react'
import { injectIntl } from 'react-intl'
import messages from './messages'

import Page from 'containers/Page'
import { PageSubtitle, PageMessage } from './styled'

interface Props {
  intl: any
}

const HomePage = function({ intl }: Props) {
  return (
    <Page>
      <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
      <PageMessage>{intl.formatMessage(messages.initialInstractions)}</PageMessage>
    </Page>
  )
}

export default injectIntl(HomePage)
