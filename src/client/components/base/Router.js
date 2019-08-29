import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import PrivateRoute from './PrivateRoute'

const Router = () => {
  return (
    <Switch>
      <Route
        {...{
          path: '/login',
          exact: true,
          component: loadScreen(() => {
            return import('../../layout/Authentication/SignIn')
          })
        }}
      />
      <PrivateRoute
        {...{
          path: '/',
          exact: true,
          component: loadScreen(() => {
            return import('../../layout/Users/Dashboard')
          })
        }}
      />
    </Switch>
  )
}

export default Router

const ScreenLoader = ({ error }) => {
  if (error) {
    return <div>Sorry, there was a problem to load this page.</div>
  }

  return <div />
}

const loadScreen = (loader) => {
  return Loadable({
    loader,
    loading: ScreenLoader
  })
}
