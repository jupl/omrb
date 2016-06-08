import React from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider} from 'react-redux'
import ColorPage from '../../../color/components/page'
import {StyleSheet} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @param {Object} props - Component properties passed on
 * @param {Object} props.store - Redux store instance
 * @return {ReactElement} Root component
 */
export default function Root({store}) {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene initial hideNavBar key="home" component={FullColorPage} />
        </Scene>
      </Router>
    </Provider>
  )
}

/**
 * Maximize color page component for route
 * @return {ReactElement} Maximized color page component
 */
function FullColorPage() {
  return <ColorPage style={styles.CONTAINER} />
}
