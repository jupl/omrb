import React, {Component, PropTypes} from 'react'
import {StyleSheet, TouchableHighlight, Text, View} from 'react-native'
import * as rawStyles from './styles'
import * as platform from '../../../lib/platform'

// Create React Native stylesheet from style data
const styles = StyleSheet.create(rawStyles)

/** Color page component showing current color and buttons to change */
export default class Root extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      previousColor: PropTypes.func.isRequired,
      nextColor: PropTypes.func.isRequired,
    }),
    color: PropTypes.string.isRequired,
    style: View.propTypes.style,
  }

  render() {
    const {actions, color, style} = this.props
    const bgStyle = {backgroundColor: color}
    return (
      <View style={[style, styles.BACKGROUND, bgStyle]}>
        <TouchableHighlight
            style={styles.BUTTON}
            onPress={() => actions.previousColor()}>
          <Text>&lt;</Text>
        </TouchableHighlight>
        <Text style={styles.TEXT}>Welcome to {platform.NAME}</Text>
        <TouchableHighlight
            style={styles.BUTTON}
            onPress={() => actions.nextColor()}>
          <Text>&gt;</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
