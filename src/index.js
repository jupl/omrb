import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import Root from './app/components/root'

// Supported platforms for React Native
const PLATFORMS = ['android', 'ios']

// Flag to keep track if this is a first load for hot reloading purposes
let firstLoad = true

/** Component that contains root component as a class for hot reloading */
class Application extends Component {
  render() {
    return <Root />
  }
}

/**
 * Entry point for application
 * @param {String} platform - Native platform application is running in
 * @return {void}
 */
export default function start(platform) {
  // Throw error if platform is not supported
  if(!PLATFORMS.includes(platform)) {
    throw new Error('Platform is not supported')
  }

  // Run any required first-time code
  if(firstLoad) {
    firstLoad = false

    // Add first-time code to run here
  }

  // Tell React Native to use our root component to render application
  AppRegistry.registerComponent('Application', () => Application)
}
