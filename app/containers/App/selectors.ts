import { createSelector } from 'reselect'
import { ApplicationRootState } from 'common/types'

const selectRoute = (state: ApplicationRootState) => state.router

const makeSelectLocation = () =>
  createSelector(selectRoute, (routeState) => routeState.location)

export { makeSelectLocation }
