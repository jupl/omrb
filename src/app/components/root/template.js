import React from 'react'
import {StyleSheet} from 'react-native'
import ColorPage from '../../../color/components/page'

/** Styling for root page */
const {PAGE_STYLE} = StyleSheet.create({
  PAGE_STYLE: {
    flex: 1,
  },
})

/**
 * Render root component representing the entire application
 * @return {React.ReactElement} Root component
 */
export default function Root() {
  return (
    <ColorPage style={PAGE_STYLE} />
  )
}
