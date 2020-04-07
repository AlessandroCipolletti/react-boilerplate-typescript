import React from 'react'
import { injectIntl } from 'react-intl'

import { Wrapper, Label } from './styled'

import messages from '../../messages'

interface Props {
  intl: any
}

const SaveError = function({ intl }: Props) {
  return (
    <Wrapper>
      <Label>{intl.formatMessage(messages.savingError)}</Label>
    </Wrapper>
  )
}

export default injectIntl(SaveError)
