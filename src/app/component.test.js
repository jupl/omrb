import test from 'ava'
import React from 'react'
import {render} from 'enzyme'
import App from './component'

test('<App>', t => {
  const wrapper = render(<App />)
  t.is(wrapper.text(), 'Welcome')
})
