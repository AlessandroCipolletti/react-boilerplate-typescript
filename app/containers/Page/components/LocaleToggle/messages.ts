/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.Page.LocaleToggle'

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  de: {
    id: `${scope}.fr`,
    defaultMessage: 'fr',
  },
})
