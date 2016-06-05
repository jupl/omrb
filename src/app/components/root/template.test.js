import React from 'react'
import {Text} from 'react-native'
import test from 'ava'
import {shallow} from 'enzyme'
import Root from './template'

/** @test {Root} */
test('<Root>', t => {
  const wrapper = shallow(<Root />)
  t.true(wrapper.contains(<Text>Welcome</Text>))
})
