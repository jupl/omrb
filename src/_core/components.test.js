import test from 'ava'
import React from 'react'
import {render} from 'enzyme'
import {Root} from './components'

test('<Root>', t => {
  const wrapper = render(<Root />)
  t.is(wrapper.text(), 'Welcome')
})
