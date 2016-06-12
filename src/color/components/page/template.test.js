import React from 'react'
import {TouchableHighlight} from 'react-native'
import test from 'ava'
import {shallow} from 'enzyme'
import {spy} from 'sinon'
import ColorPage from './template'
import * as platform from '../../../lib/platform'

/** @test {color.components.Page} */
// TODO Try to remove use of intermediate variable
test('<ColorPage> - content', t => {
  const wrapper = shallow(<ColorPage actions={{}} />)
  const contains = wrapper.contains(['Welcome to ', platform.NAME])
  t.true(contains)
})

/** @test {color.components.Page} */
test('<ColorPage> - additional styles', t => {
  const override = {top: 0}
  const wrapper1 = shallow(<ColorPage actions={{}} />)
  const wrapper2 = shallow(<ColorPage actions={{}} style={override} />)
  t.false(wrapper1.prop('style').includes(override))
  t.true(wrapper2.prop('style').includes(override))
})

/** @test {color.components.Page} */
test('<ColorPage> - events', t => {
  const actions = {
    previousColor: spy(),
    nextColor: spy(),
  }
  const wrapper = shallow(<ColorPage actions={actions} />)
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
