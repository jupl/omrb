import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

const buttonSize = 32

/** Styling for color page */
const {BACKGROUND_STYLE, BUTTON_STYLE, TEXT_STYLE} = StyleSheet.create({
  BACKGROUND_STYLE: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TEXT_STYLE: {
    fontSize: 24,
    marginLeft: 12,
    marginRight: 12,
  },
  BUTTON_STYLE: {
    justifyContent: 'center',
    alignItems: 'center',
    width: buttonSize,
    height: buttonSize,
    backgroundColor: 'white',
    borderRadius: buttonSize / 2,
  },
})

/**
 * Render color page component showing current color and buttons to change
 * @param {Object} props Component properties
 * @return {React.ReactElement} Color page component
 */
export default function ColorPage({
  color: backgroundColor,
  onNextColor,
  onPreviousColor,
  style,
}) {
  return (
    <View style={[style, BACKGROUND_STYLE, {backgroundColor}]}>
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
