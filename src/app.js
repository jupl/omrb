import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/components/root'
import reducer from './app/reducer'
import saga from './app/saga'
import {APPLICATION_NAME} from './app/config'
import Container from './common/components/container'
import createStore from './common/create-store'

/** Component that contains root component as a class for hot reloading */
class Application extends Component {
  constructor(...args) {
    super(...args)
    this.store = createStore({reducer, saga})

    if(module.hot) {
      module.hot.accept(() => setTimeout(() => this.updateReducer()))
    }
  }

  updateReducer() {
    const {default: newReducer} = require('./app/reducer')
    this.store.replaceReducer(newReducer)
  }

  render() {
    return <Container store={this.store} component={Root} />
  }
}

// Tell React Native to use our application component to render application
AppRegistry.registerComponent(APPLICATION_NAME, () => Application)
