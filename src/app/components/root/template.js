import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const {CONTAINER_STYLE, TEXT_STYLE} = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @return {ReactElement} Root component
 */
export default function Root() {
  return (
    <View style={CONTAINER_STYLE}>
      <Text style={TEXT_STYLE}>Welcome to {Platform.OS}</Text>
    </View>
  )
}
