import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import * as rawStyles from './styles'

const styles = StyleSheet.create(rawStyles)

/**
 * Render root component representing the entire application
 * @return {ReactElement} Root component
 */
export default function Root() {
  return (
    <View style={styles.CONTAINER}>
      <Text>Welcome</Text>
    </View>
  )
}
