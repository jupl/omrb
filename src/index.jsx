import 'normalize.css/normalize.css'
import React from 'react'
import {render} from 'react-dom'

if(module.hot) {
  module.hot.accept('./root/component', () => setTimeout(renderRootOrError))
  renderRootOrError()
}
else {
  renderRoot()
}

function renderRoot() {
  const {Root} = require('./root/component')
  render(<Root />, global.container)
}

function renderRootOrError() {
  try {
    renderRoot()
  }
  catch(e) {
    const RedBox = require('redbox-react')
    render(<RedBox error={e} />, global.container)
  }
}
