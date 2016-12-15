import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'

// Check if Redux DevTools is available for redux-logger
const devToolsAvailable = !!window.__REDUX_DEVTOOLS_EXTENSION__

/**
 * @typedef {Object} StoreOptions
 * @property {Function} reducer Redux reducer
 * @property {Saga?} saga Redux saga generator
 * @property {Object?} initialState Initial store state
 */

/**
 * Create a Redux store complete with potential development settings and saga
 * @param {StoreOptions} options Options to construct store with as well
 * @return {Object} Redux store instance
 */
export default function newStore({reducer, saga, initialState, ...config}) {
  let middlewares = []

  // Create saga middleware if saga is provided
  const sagaMiddleware = saga && createSagaMiddleware()
  middlewares = sagaMiddleware ? [...middlewares, sagaMiddleware] : middlewares

  // Add redux-logger middleware in development when there's no Redux DevTools
  if(process.env.NODE_ENV !== 'production' && devToolsAvailable) {
    const createLogger = require('redux-logger')
    middlewares = [...middlewares, createLogger()]
  }

  // Create enhancer
  const enhancer = composeWithDevTools(config)(applyMiddleware(...middlewares))

  // Create store instance
  const store = createStore(reducer, initialState, enhancer)

  // Start running saga
  if(sagaMiddleware && saga) {
    sagaMiddleware.run(saga)
  }

  return store
}
