import React from 'react'
import ColorPage from '../../../color/components/page'

/** Styling for root page */
const PAGE_STYLE = {
  flex: 1,
}

/**
 * Render root component representing the entire application
 * @return {React.ReactElement} Root component
 */
export default function Root() {
  return <ColorPage style={PAGE_STYLE} />
}
