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
 * error is encountered the error is rendered to the screen. This may be called
 * multiple times to rerender when a hot reload occurs.
 * @return {void}
 */
function render() {
  try {
    // For hot loading support require is used instead of import so that if
    // this function is called again, then the updated code is loaded
    const Root = require('./app/components/root').default
    renderToDOM(<Root />, container)
  }
  catch(e) {
    if(process.env.NODE_ENV !== 'production') {
      // Production builds will not have this code included, which is why
      // require is used instead of import to exclude redbox code
      const RedBox = require('redbox-react')
      renderToDOM(<RedBox error={e} />, container)
    }
    throw e
  }
}
