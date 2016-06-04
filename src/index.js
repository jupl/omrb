import React from 'react'
import 'normalize.css/normalize.css'
import {render as renderToDOM} from 'react-dom'

// Reference app container and unhide it before rendering to
const {container} = global
container.style.display = null

// If in production, render root component. Otherwise render component or an
// error message if failed to render.
const production = process.env.NODE_ENV === 'production'
const render = production ? renderRoot : renderRootOrError

// Render root, and register to rerender if hot loading is available
if(module.hot) {
  module.hot.accept('./app/components/root', () => setTimeout(render))
}
render()

/**
 * Render root component to the container. This may be called multiple times
 * to rerender when a hot reload occurs.
 * @return {undefined} Nothing
 */
function renderRoot() {
  const Root = require('./app/components/root').default
  renderToDOM(<Root />, container)
}

/**
 * Try to render root component to the container. If an error is encountered
 * the error is displayed to the screen instead. This may be called multiple
 * times to rerender when a hot reload occurs.
 * @return {undefined} Nothing
 */
function renderRootOrError() {
  try {
    renderRoot()
  }
  catch(e) {
    const RedBox = require('redbox-react')
    renderToDOM(<RedBox error={e} />, container)
  }
}
