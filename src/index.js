import React from 'react'
import 'normalize.css/normalize.css'
import {render} from 'react-dom'

const {container} = global

container.style.display = null

if(module.hot) {
  module.hot.accept('./app/components', () => setTimeout(renderRootOrError))
  renderRootOrError()
}
else {
  renderRoot()
}

function renderRoot() {
  const {App} = require('./app/components')
  render(<App />, container)
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
