import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import HomePage from 'pages/HomePage/'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from 'utils/global-styles'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  )
}
export default hot(App)
