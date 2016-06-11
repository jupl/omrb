import React from 'react'
import {Text} from 'react-native'
import test from 'ava'
import {shallow} from 'enzyme'
import Root from './template'
import * as styles from './styles'
import * as platform from '../../../lib/platform'

/** @test {app.components.Root} */
// TODO Try to remove use of intermediate variable
test('<Root>', t => {
  const wrapper = shallow(<Root />)
  const contains = wrapper.contains(
    <Text style={styles.TEXT}>Welcome to {platform.NAME}</Text>
  )
  t.true(contains)
})
