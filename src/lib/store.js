import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga'

/**
 * @typedef {Object} StoreOptions
 * @property {Function} reducer - Redux reducer
 * @property {?GeneratorFunction} saga - Redux saga entry point generator
 * @property {?*} initialState - Optional starting state for Redux store
 */

/**
 * Create a Redux store complete with potential development settings and saga
 * @param {StoreOptions} options - Options (remaining goes to Redux DevTools)
 * @return {Store} Redux store instance
 */
export default function newStore({initialState, saga, reducer, ...config}) {
  let middlewares = []

  // Create saga middleware if saga is provided
  let sagaMiddleware
  if(saga) {
    sagaMiddleware = createSagaMiddleware()
    middlewares = [...middlewares, sagaMiddleware]
  }

  // Create enhancer
  const enhancer = composeWithDevTools(config)(applyMiddleware(...middlewares))

  // Create store instance
  const store = createStore(reducer, initialState, enhancer)

  // Start running saga if available
  if(sagaMiddleware) {
    sagaMiddleware.run(saga)
  }

  return store
}
