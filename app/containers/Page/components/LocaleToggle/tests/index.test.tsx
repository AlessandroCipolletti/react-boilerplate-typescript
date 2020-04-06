import React from 'react'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import { action } from 'typesafe-actions'
import LocaleToggle from '../index'
import * as actions from 'containers/LanguageProvider/actions'
import LanguageProvider from 'containers/LanguageProvider'

import configureStore from 'utils/configureStore'
import { translationMessages } from 'utils/i18n'
import history from 'utils/history'

jest.mock('containers/LanguageProvider/actions')

describe('<LocaleToggle />', () => {
  let store

  beforeAll(() => {
    const mockedChangeLocale = actions.changeLocale as jest.Mock

    mockedChangeLocale.mockImplementation(
      () => action('test', undefined) as any,
    )
    store = configureStore({}, history)
  })

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should present the default `en` english language option', () => {
    const { queryByDisplayValue } = render(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    )
    expect(queryByDisplayValue('en')).toBeInTheDocument()
  })

  it('should dispatch changeLocale when user selects a new option', () => {
    const { container } = render(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    )
    const newLocale = 'de'
    const select = container.querySelector('select')!
    fireEvent.change(select, { target: { value: newLocale } })
    expect(actions.changeLocale).toHaveBeenCalledWith(newLocale)
  })
})
