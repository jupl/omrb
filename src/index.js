import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/components/root'

/** Component that contains root component as a class for hot reloading */
class Application extends Component {
  render() {
    return <Root />
  }
}

// Tell React Native to use our application component to render application
AppRegistry.registerComponent('Application', () => Application)
