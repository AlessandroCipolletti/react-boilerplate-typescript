import { createSelector } from 'reselect'
import { ApplicationRootState } from 'common/types'
import { initialState } from './reducer'
import { resultSelector } from './utils'

/**
 * Direct selector to the home state domain
 */
export const selectTestsDomain = (state: ApplicationRootState) => state.tests || initialState


export const makeSelectTests = () =>
  createSelector(selectTestsDomain, testsState => testsState)

export const makeSelectResults = () => createSelector(selectTestsDomain, resultSelector)
