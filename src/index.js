import React from 'react'
import 'normalize.css/normalize.css'
import {render as renderToDOM} from 'react-dom'

// Reference app container and unhide it before rendering to
const {container} = global
container.style.display = null

// Render application, and register to rerender if hot loading is available
if(module.hot) {
  module.hot.accept('./app/components/root', () => setTimeout(render))
}
render()

/**
 * Render application to the container. If we are not in production and an
 * error is encountered the error is rendered to the screen instead. This may
 * be called multiple times to rerender when a hot reload occurs.
 * @return {undefined} Nothing
 */
function render() {
  if(process.env.NODE_ENV === 'production') {
    renderRoot()
  }
  else {
    try {
      renderRoot()
    }
    catch(e) {
      const RedBox = require('redbox-react')
      renderToDOM(<RedBox error={e} />, container)
    }
  }
}

/**
 * Render root component to the container
 * @return {undefined} Nothing
 */
function renderRoot() {
  const Root = require('./app/components/root').default
  renderToDOM(<Root />, container)
}
