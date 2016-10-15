import {APPLICATION_NAME} from './config'
import reducer from './reducer'
import saga from './saga'
import createStore from '../lib/create-store'

const store = createStore({name: APPLICATION_NAME, saga, reducer})

if(module.hot) {
  module.hot.accept(() => {
    const newReducer = require('./reducer').default
    store.replaceReducer(newReducer)
  })
}

export default store
