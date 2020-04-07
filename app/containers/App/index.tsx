import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from 'pages/HomePage/'
import TermsPage from 'pages/TermsPage/'
import TestsPage from 'pages/TestsPage/'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from 'utils/global-styles'
import { makeSelectEmail, makeSelectFirstname, makeSelectLastname }  from 'pages/HomePage/selectors'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/terms" component={TermsPage} />
        <PrivateRoute path="/tests">
          <TestsPage />
        </PrivateRoute>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}
export default hot(App)

function PrivateRoute({ children, ...rest }) {
  const stateSelector = createStructuredSelector({
    email: makeSelectEmail(),
    firstname: makeSelectFirstname(),
    lastname: makeSelectLastname(),
  })
  const { email, firstname, lastname } = useSelector(stateSelector)
  
  return (
    <Route
      {...rest}
      render={() =>
        (email && firstname && lastname)
          ? children
          : <Redirect to={{ pathname: '/' }} />
      }
    />
  )
}
