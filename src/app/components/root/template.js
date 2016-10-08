import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import * as rawStyles from './styles'

// Create React Native stylesheet from style data
const {CONTAINER_STYLE, TEXT_STYLE} = StyleSheet.create(rawStyles)

/** Root component that represents the entire application */
export default class Root extends Component {
  render() {
    return (
      <View style={CONTAINER_STYLE}>
        <Text style={TEXT_STYLE}>Welcome to {Platform.OS}</Text>
      </View>
    )
  }
}
