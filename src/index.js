import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import {APPLICATION_NAME} from './app/config'
import Root from './app/components/root'
import store from './app/store'
import Container from './lib/components/container'

/** Component that contains root component as a class for hot reloading */
class Application extends Component {
  render() {
    return <Container store={store} component={Root} />
  }
}

// Tell React Native to use our application component to render application
AppRegistry.registerComponent(APPLICATION_NAME, () => Application)
