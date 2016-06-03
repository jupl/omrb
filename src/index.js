import React from 'react'
import 'normalize.css/normalize.css'
import {render} from 'react-dom'

const {container} = global

container.style.display = null

if(module.hot) {
  module.hot.accept('./app/components/root', () => {
    setTimeout(renderRootOrError)
  })
  renderRootOrError()
}
else {
  renderRoot()
}

function renderRoot() {
  const Root = require('./app/components/root').default
  render(<Root />, container)
}

function renderRootOrError() {
  try {
    renderRoot()
  }
  catch(e) {
    const RedBox = require('redbox-react')
    render(<RedBox error={e} />, container)
  }
}
