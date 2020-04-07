import React from 'react'
import { injectIntl } from 'react-intl'

import styled from 'utils/styled-components'
import { ButtonCss } from 'common/styled/Button'

import messages from '../messages'

interface Props {
  intl: any
}

function Submit({ intl }: Props) {
  return (
    <Input type="submit" value={intl.formatMessage(messages.start)} />
  )
}

export default injectIntl(Submit)

const Input = styled.input`
  ${ButtonCss}
`
