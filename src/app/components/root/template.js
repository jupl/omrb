import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as platform from '../../../lib/platform'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @param {Object} props - Component properties passed on
 * @return {ReactElement} Root component
 */
export default function Root() {
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TEXT}>Welcome to {platform.NAME}</Text>
    </View>
  )
}
