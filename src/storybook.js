import {AppRegistry} from 'react-native'
import {configure, getStorybookUI} from '@kadira/react-native-storybook'
import '@kadira/react-native-storybook/addons'

// Load all stories defined in our codebase
configure(() => {
  require('./app/components/root/index.stories')
}, module)

// Tell React Native to use storybook to render application
const StorybookUI = getStorybookUI({host: 'localhost', port: 9001})
AppRegistry.registerComponent('Application', () => StorybookUI)
