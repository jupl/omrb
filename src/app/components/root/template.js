import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import * as platform from '../../../lib/platform'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/** Root component that represents the entire application */
export default class Root extends Component {
  render() {
    return (
      <View style={styles.CONTAINER}>
        <Text style={styles.TEXT}>Welcome to {platform.NAME}</Text>
      </View>
    )
  }
}
