import React from 'react'
import ReactDOM from 'react-dom'

import './client/index.css'
import App from './client/App'

import * as serviceWorker from './client/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
