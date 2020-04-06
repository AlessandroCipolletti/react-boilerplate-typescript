import React from 'react'
import { injectIntl } from 'react-intl'

import styled from 'utils/styled-components'
import Theme from 'common/Theme'

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
  width: ${Theme.spacing.size10};
  height: ${Theme.spacing.size7};
  background-color: ${Theme.palette.primary(1)};
  color: ${Theme.palette.gray(8)};
  cursor: pointer;
  border: none;
  font-size: ${Theme.fontSizing.size5};
`
