import 'normalize.css/normalize.css'
import React from 'react'
import {render} from 'react-dom'

const container = global.container

if(module.hot) {
  module.hot.accept('./app/component', () => setTimeout(renderRootOrError))
  renderRootOrError()
}
else {
  renderRoot()
}

function renderRoot() {
  const App = require('./app/component').default
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
