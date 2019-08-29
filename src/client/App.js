import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Router from './components/base/Router'
import history from './history'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const App = () => {
	return (
		<Provider {...{ store }}>
			<ConnectedRouter {...{ history }}>
				<Router />
			</ConnectedRouter>
		</Provider>
	)
}

export default App
