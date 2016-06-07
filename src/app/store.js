import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import saga from './saga'

/**
 * Entry point to start running all initial saga tasks
 * @param {?Object} initialState - Initial store state (should not be required)
 * @return {Object} Redux store instance
 */
export default function newStore(initialState) {
  // Build store middleware
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  // If Redux DevTools extension is available and this is a non-production
  // build, hook into it
  let enhancer = applyMiddleware(...middlewares)
  if(process.env.NODE_ENV !== 'production') {
    const devTools = require('remote-redux-devtools')
    enhancer = compose(enhancer, devTools())
  }

  // Create store instance
  const store = createStore(reducer, initialState, enhancer)

  // If hot loading is available, update store's reducer on change
  if(module.hot) {
    module.hot.accept(() => {
      // For hot loading support require is used instead of import so that if
      // this function is called again, then the updated code is loaded
      const newReducer = require('./reducer').default
      store.replaceReducer(newReducer)
    })
  }

  // Kick off saga code
  sagaMiddleware.run(saga)

  return store
}
