import React from 'react'
import {action, storiesOf} from '@kadira/react-native-storybook'
import {Provider} from 'react-redux'
import {combineReducers} from 'redux'
import color from '../../reducer'
import createStore from '../../../lib/store'
import Component from './index'
import Template from './template'

// Create small store instance
const store = createStore({
  name: 'Color.Page',
  reducer: combineReducers({color}),
})

// Default props for template module
const props = {
  style: {flex: 1},
  actions: {
    previousColor: action('previousColor'),
    nextColor: action('nextColor'),
  },
}

// Define stories
storiesOf('Color.Page', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('component', () => <Component style={{flex: 1}} />)
  .add('template', () => <Template {...props} />)
