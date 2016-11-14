import '@kadira/react-native-storybook/addons'
import {AppRegistry} from 'react-native'
import {configure, getStorybookUI} from '@kadira/react-native-storybook'
import {APPLICATION_NAME} from './app/config'

// Load all stories defined in our codebase
configure(() => {
  require('./color/components/page/index.stories')
}, module)

// Tell React Native to use storybook to render application
const StorybookUI = getStorybookUI({host: 'localhost', port: 9001})
AppRegistry.registerComponent(APPLICATION_NAME, () => StorybookUI)
