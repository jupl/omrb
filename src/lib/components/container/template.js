import React from 'react'
import {Provider} from 'react-redux'

/**
 * Render container component adding possible dev tools and redux store
 * @param {Object} props Component properties
 * @return {ReactElement} Container component
 */
export default function Container({store, component: Component}) {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
