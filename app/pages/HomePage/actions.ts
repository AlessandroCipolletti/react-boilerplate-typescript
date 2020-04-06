import { action } from 'typesafe-actions'
// import { } from './types'

import ActionTypes from './constants'


export const setUserEmailAction = (email: string) => action(ActionTypes.SET_USER_EMAIL, { email })

export const setUserFirstnameAction = (firstname: string) => action(ActionTypes.SET_USER_FIRSTNAME, { firstname })

export const setUserLastnameAction = (lastname: string) => action(ActionTypes.SET_USER_LASTNAME, { lastname })
