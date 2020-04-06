import { createSelector } from 'reselect'
import { ApplicationRootState } from 'common/types'
import { initialState } from './reducer'

/**
 * Direct selector to the home state domain
 */
export const selectHomeDomain = (state: ApplicationRootState) => state.home || initialState


export const makeSelectEmail = () =>
  createSelector(selectHomeDomain, homeState => homeState.email)

export const makeSelectFirstname = () =>
  createSelector(selectHomeDomain, homeState => homeState.firstname)

export const makeSelectLastname = () =>
  createSelector(selectHomeDomain, homeState => homeState.lastname)
