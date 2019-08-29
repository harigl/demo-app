import React from 'react'
import { Route } from 'react-router-dom'
import AccessToken from '../../helpers/token'
import Header from './Header'

const PrivateRoute = ({ component: Component, ...rest }) => {
	if (AccessToken.get() === '' || AccessToken.get() == null) {
		window.location.href = '/login'
		return null
	} else {
		const render = (renderProps) => {
			return [<Header key="header" />, <Component {...renderProps} key="component" />]
		}
		return <Route {...rest} {...{ render }} />
	}
}

export default PrivateRoute
