import React from 'react'
import { createSelector } from 'reselect'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'utils/styled-components'

import Toggle from 'common/components/Toggle'
import messages from './messages'
import { appLocales } from 'utils/locales'
import { changeLocale } from 'containers/LanguageProvider/actions'
import { makeSelectLocale } from 'containers/LanguageProvider/selectors'

const stateSelector = createSelector(makeSelectLocale(), locale => ({
  locale,
}))

export default function LocaleToggle() {
  const { locale } = useSelector(stateSelector)
  const dispatch = useDispatch()

  const onLocaleToggle = evt => dispatch(changeLocale(evt.target.value))
  return (
    <Wrapper>
      <Toggle
        value={locale}
        values={appLocales}
        messages={messages}
        onToggle={onLocaleToggle}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 2px;
  float: right;
  display: inline-block;
`
