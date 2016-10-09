import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const {
  BACKGROUND_STYLE,
  BUTTON_STYLE,
  TEXT_STYLE,
} = StyleSheet.create(rawStyles)

/**
 * @typedef {Object} ColorPageProps
 * @property {string} color - CSS color to show
 * @property {Function} onPreviousColor - Action for previous color
 * @property {Function} onNextColor - Action for next color
 * @property {?Object} style - Optional additional styling for component
 */

/**
 * Render color page component showing current color and buttons to change
 * @param {ColorPageProps} props - Component properties
 * @return {ReactElement} Color page component
 */
export default function ColorPage({
  color,
  onNextColor,
  onPreviousColor,
  style,
}) {
  return (
    <View style={[style, BACKGROUND_STYLE, {backgroundColor: color}]}>
      <TouchableHighlight style={BUTTON_STYLE} onPress={onPreviousColor}>
        <Text>&lt;</Text>
      </TouchableHighlight>
      <Text style={TEXT_STYLE}>Welcome to {Platform.OS}</Text>
      <TouchableHighlight style={BUTTON_STYLE} onPress={onNextColor}>
        <Text>&gt;</Text>
      </TouchableHighlight>
    </View>
  )
}
