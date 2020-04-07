import React from 'react'
import { createSelector } from 'reselect'
import { push } from 'connected-react-router'
import { injectIntl } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

import { makeSelectLocale } from 'containers/LanguageProvider/selectors'

import Page from 'containers/Page'
import { PageSubtitle } from 'common/styled/Page'
import { Message, BackButton } from './styled'

import messages from './messages'

const stateSelector = createSelector(makeSelectLocale(), locale => ({
  locale,
}))

interface Props {
  intl: any
}

const TermsPage = function({ intl }: Props) {
  const { locale } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const goBack = React.useCallback(() => {
    dispatch(push('/'))
  }, [])

  const terms = require(`./terms/${locale}.html`) // eslint-disable-line

  return (
    <Page>
      <PageSubtitle>{intl.formatMessage(messages.pageSubtitle)}</PageSubtitle>
      <Message dangerouslySetInnerHTML={{ __html: terms }} />
      <BackButton onClick={goBack}>{intl.formatMessage(messages.back)}</BackButton>
    </Page>
  )
}

export default injectIntl(TermsPage)
