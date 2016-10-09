import React from 'react'
import {StyleSheet} from 'react-native'
import ColorPage from '../../../color/components/page'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const {CONTAINER_STYLE} = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @return {ReactElement} Root component
 */
export default function Root() {
  return <ColorPage style={CONTAINER_STYLE} />
}
