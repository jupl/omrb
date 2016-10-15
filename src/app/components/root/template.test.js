import React from 'react'
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer'
import Root from './template'
import reducer from '../../reducer'
import createStore from '../../../lib/create-store'

describe('<App.Root> Template', () => {
  const store = createStore({reducer})

  it('should render as expected', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Root />
      </Provider>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })
})
