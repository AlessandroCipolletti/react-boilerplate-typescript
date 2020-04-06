import React from 'react'
import { injectIntl } from 'react-intl'

import { TestStates, TestsTypes } from '../../constants'
import { Wrapper, Label, Dotted, IconContainer } from './styled'

import messages from '../../messages'

import LoadingIcon from 'medias/icons/Loading.svg'
import DoneIcon from 'medias/icons/Done.svg'

interface Props {
  intl: any
  name: keyof typeof TestsTypes
  state: TestStates.WAITING | TestStates.IN_PROGRESS | TestStates.DONE
}

const TestPreview = function({ intl, name, state }: Props) {
  return (
    <Wrapper>
      <Label>{intl.formatMessage(messages[`${name}Label`])}</Label>
      {state !== TestStates.WAITING && <Dotted />}
      <IconContainer>
        {state === TestStates.IN_PROGRESS && <img src={LoadingIcon} alt={intl.formatMessage(messages.loading)} />}
        {state === TestStates.DONE && <img src={DoneIcon} alt={intl.formatMessage(messages.done)} />}
      </IconContainer>
    </Wrapper>
  )
}

export default injectIntl(TestPreview)
