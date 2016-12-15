import React from 'react'

/** Styling for root page */
const PAGE_STYLE = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(transparent, gainsboro)',
}

/**
 * Render root component representing the entire application
 * @return {React.Element} Root component
 */
export default function Root() {
  return <div style={PAGE_STYLE}>Hello, World</div>
}
