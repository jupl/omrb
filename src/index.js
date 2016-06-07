import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/components/root'
import createStore from './app/store'

/** Component that contains root component as a class for hot reloading */
class Application extends Component {
  constructor(...args) {
    super(...args)
    this.store = createStore()
  }

  render() {
    return <Root store={this.store} />
  }
}

// Tell React Native to use our application component to render application
AppRegistry.registerComponent('Application', () => Application)
