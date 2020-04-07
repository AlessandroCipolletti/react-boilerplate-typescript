import React from 'react'
import { injectIntl } from 'react-intl'

import { Wrapper, Img } from './styled'

import messages from '../../messages'

import LoadingIcon from 'medias/icons/Loading.svg'

interface Props {
  intl: any
}

const Saving = function({ intl }: Props) {
  return (
    <Wrapper>
      <Img src={LoadingIcon} alt={intl.formatMessage(messages.loading)} />
    </Wrapper>
  )
}

export default injectIntl(Saving)
