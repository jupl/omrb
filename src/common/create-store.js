import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga'

/**
 * Create a Redux store complete with potential development settings and saga
 * @param {Object} options - Options to construct store with as well
 * @return {Object} Redux store instance
 */
export default function newStore({reducer, saga, initialState, ...config}) {
  let middlewares = []

  // Create saga middleware if saga is provided
  const sagaMiddleware = saga && createSagaMiddleware()
  middlewares = sagaMiddleware ? [...middlewares, sagaMiddleware] : middlewares

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
