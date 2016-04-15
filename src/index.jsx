import 'normalize.css/normalize.css'
import React from 'react'
import {render} from 'react-dom'
import App from './app/component'

const container = global.container

if(module.hot) {
  module.hot.accept('./app/component', () => setTimeout(renderRootOrError))
  renderRootOrError()
}
else {
  renderRoot()
}

function renderRoot() {
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
