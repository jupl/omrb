import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

/** Styling for root page */
const {PAGE_STYLE} = StyleSheet.create({
  PAGE_STYLE: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

/**
 * Render root component representing the entire application
 * @return {React.ReactElement} Root component
 */
export default function Root() {
  return (
    <View style={PAGE_STYLE}>
      <Text>Hello, World</Text>
    </View>
  )
}
