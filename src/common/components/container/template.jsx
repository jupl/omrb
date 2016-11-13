import React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

/**
 * Render container component adding possible dev tools and redux store
 * @param {Object} props - Component properties
 * @return {Redux.Store} Container component
 */
export default function Container({store, component: Component}) {
  return (
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>
  )
}
