import React from 'react'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'

/**
 * @typedef {Object} ContainerProps
 * @property {Redux.Store} store Redux store instance
 * @property {React.Component} component Component to render
 */

/**
 * Render container component adding possible dev tools and redux store
 * @param {ContainerProps} props Component properties
 * @return {React.Element} Container component
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
