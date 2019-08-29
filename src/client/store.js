import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

import history from './history';

import * as reducers from './reducers';

const createRootReducer = () =>
	combineReducers({
		router: connectRouter(history),
		...reducers
	});

const middleware = [routerMiddleware(history), thunk, createLogger(), promiseMiddleware];

const store = createStore(createRootReducer(), applyMiddleware(...middleware));

export default store;
