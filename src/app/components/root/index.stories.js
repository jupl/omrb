import React from 'react'
import {storiesOf} from '@kadira/react-native-storybook'
import Template from './template'

// Define stories
storiesOf('App.Root', module)
  .add('template', () => <Template />)
