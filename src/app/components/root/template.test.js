import React from 'react'
import renderer from 'react-test-renderer'
import Root from './template'

describe('<App.Root> Template', () => {
  it('should render as expected', () => {
    const component = renderer.create(<Root />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
