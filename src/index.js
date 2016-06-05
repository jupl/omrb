import {AppRegistry} from 'react-native'
import Root from './app/components/root'

// Supported platforms for React Native
const PLATFORMS = ['android', 'ios']

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

  // Tell React Native to use our root component to render application
  AppRegistry.registerComponent('App', () => Root)
}
