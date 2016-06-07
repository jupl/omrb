import React from 'react'
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
      <ColorPage style={styles.CONTAINER} />
    </Provider>
  )
}
