import React, { Children, ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { injectIntl } from 'react-intl'

import logoImg from 'medias/images/logo.png'
import LocaleToggle from './components/LocaleToggle'

import { Wrapper, Logo, Title, Content } from './styled'
import messages from './messages'

interface Props {
  intl: any
  children?: ReactNode;
}

const Page = function ({ intl, children }: Props) {
  return (
    <Wrapper>
      <Helmet>
        <title>{intl.formatMessage(messages.pageTitle)}</title>
        <meta name="description" content="Description of Page" />
      </Helmet>

      <LocaleToggle />
      <Logo src={logoImg} />
      <Title>{intl.formatMessage(messages.title)}</Title>

      <Content>
        {Children.toArray(children)}
      </Content>

    </Wrapper>
  )
}

export default injectIntl(Page)
