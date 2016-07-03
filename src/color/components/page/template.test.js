import React from 'react'
import {TouchableHighlight} from 'react-native'
import test from 'ava'
import {shallow} from 'enzyme'
import {spy} from 'sinon'
import ColorPage from './template'
import * as platform from '../../../lib/platform'

let props

test.beforeEach('reset props', () => {
  props = {
    actions: {
      previousColor: spy(),
      nextColor: spy(),
    },
    color: 'white',
  }
})

/** @test {color.components.Page} */
test('<ColorPage> - content', t => {
  const wrapper = shallow(<ColorPage {...props} />)
  t.true(wrapper.contains(['Welcome to ', platform.NAME]))
})

/** @test {color.components.Page} */
test('<ColorPage> - additional styles', t => {
  const override = {top: 0}
  const wrapper1 = shallow(<ColorPage {...props} />)
  const wrapper2 = shallow(<ColorPage {...props} style={override} />)
  t.false(wrapper1.prop('style').includes(override))
  t.true(wrapper2.prop('style').includes(override))
})

/** @test {color.components.Page} */
test('<ColorPage> - events', t => {
  const {actions} = props
  const wrapper = shallow(<ColorPage {...props} />)
  const buttons = wrapper.find(TouchableHighlight)
  const previousButton = buttons.at(0)
  const nextButton = buttons.at(1)

  t.false(actions.previousColor.called)
  t.false(actions.nextColor.called)

  previousButton.simulate('press')
  t.true(actions.previousColor.calledOnce)
  t.false(actions.nextColor.called)

  nextButton.simulate('press')
  t.true(actions.previousColor.calledOnce)
  t.true(actions.nextColor.calledOnce)
})
