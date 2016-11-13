import React from 'react'

/** Styling for container background */
const BACKGROUND_STYLE: React.CSSProperties = {
  transition: 'background 0.8s ease-out',
  display: 'flex',
}

/** Styling for buttons */
const BUTTON_STYLE: React.CSSProperties = {
  borderRadius: '50%',
  background: 'radial-gradient(white, gainsboro)',
  borderColor: 'gainsboro',
  outline: 'none',
}

/** Styling for text */
const TEXT_STYLE: React.CSSProperties = {
  marginLeft: 4,
  marginRight: 4,
}

/** Styling for gradient overlay */
const GRADIENT_STYLE: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(rgba(255, 255, 255, 0.4), transparent)',
}

/**
 * Render color page component showing current color and buttons to change
 * @param {Object} props Component properties
 * @return {React.ReactElement} Color page component
 */
export default function ColorPage({
  color: backgroundColor,
  onNextColor,
  onPreviousColor,
  style,
}) {
  return (
    <div style={{...BACKGROUND_STYLE, ...style, backgroundColor}}>
      <div style={GRADIENT_STYLE}>
        <button style={BUTTON_STYLE} onClick={onPreviousColor}>&lt;</button>
        <span style={TEXT_STYLE}>Hello, World</span>
        <button style={BUTTON_STYLE} onClick={onNextColor}>&gt;</button>
      </div>
    </div>
  )
}
