import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

// OS text to display
const OS = Platform.select({ios: 'iOS', android: 'Android'})

/**
 * Render color page component showing current color and buttons to change
 * @param {Object} props - Component properties passed on
 * @param {Object} props.actions- Actions that are called in response to events
 * @param {Object} props.actions.previousColor - Action for previous color
 * @param {Object} props.actions.nextColor - Action for next color
 * @param {string} props.color - CSS color to show
 * @param {?Object} props.style - Optional additional styling for component
 * @return {ReactElement} Color page component
 */
export default function ColorPage({actions, color, style = {}}) {
  const bgStyle = {backgroundColor: color}
  return (
    <View style={[style, styles.BACKGROUND, bgStyle]}>
      <Text style={styles.BUTTON} onPress={() => actions.previousColor()}>
        PREV
      </Text>
      <Text style={styles.TEXT}>Welcome to {OS}</Text>
      <Text style={styles.BUTTON} onPress={() => actions.nextColor()}>
        NEXT
      </Text>
    </View>
  )
}
