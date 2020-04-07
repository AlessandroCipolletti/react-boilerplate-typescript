import React from 'react'
import { injectIntl } from 'react-intl'

import { Wrapper, Line1, Line2, Img } from './styled'

import messages from '../../messages'

import LikeImg from 'medias/images/like.png'

interface Props {
  intl: any
}

const ThankYouMessage = function({ intl }: Props) {
  return (
    <Wrapper>
      <Line1>{intl.formatMessage(messages.thankYouLine1)}</Line1>
      <br />
      <Line2>{intl.formatMessage(messages.thankYouLine2)}</Line2>
      <br />
      <Img src={LikeImg} alt={intl.formatMessage(messages.done)} />
    </Wrapper>
  )
}

export default injectIntl(ThankYouMessage)
