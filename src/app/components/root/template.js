import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @param {Object} props - Component properties passed on
 * @param {string} props.os - OS one is welcomed to
 * @return {ReactElement} Root component
 */
export default function Root({os}) {
  return (
    <View style={styles.CONTAINER}>
      <Text style={styles.TEXT}>Welcome to {os}</Text>
    </View>
  )
}
