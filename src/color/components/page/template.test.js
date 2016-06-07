import React from 'react'
import test from 'ava'
import {mount, render} from 'enzyme'
import {spy} from 'sinon'
import ColorPage from './template'

/** @test {color.components.Page} */
test('<ColorPage> - content', t => {
  const wrapper = render(<ColorPage actions={{}} />)
  t.true(wrapper.text().includes('Welcome'))
})

/** @test {color.components.Page} */
test('<ColorPage> - additional styles', t => {
  const wrapper1 = render(<ColorPage actions={{}} />)
  const wrapper2 = render(<ColorPage actions={{}} style={{top: 0}} />)
  t.not(wrapper1.children().prop('style').top, '0')
  t.is(wrapper2.children().prop('style').top, '0')
})

/** @test {color.components.Page} */
test('<ColorPage> - events', t => {
  const actions = {
    previousColor: spy(),
    nextColor: spy(),
  }
  const buttons = mount(<ColorPage actions={actions} />).find('button')
  const previousButton = buttons.at(0)
  const nextButton = buttons.at(1)

  t.false(actions.previousColor.called)
  t.false(actions.nextColor.called)

  previousButton.simulate('click')
  t.true(actions.previousColor.calledOnce)
  t.false(actions.nextColor.called)

  nextButton.simulate('click')
  t.true(actions.previousColor.calledOnce)
  t.true(actions.nextColor.calledOnce)
})
