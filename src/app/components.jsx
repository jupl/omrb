import React from 'react'
import prefix from 'react-prefixer'

const STYLE = prefix({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(white, gainsboro)',
})

export default function App() {
  return <div style={STYLE}>Welcome</div>
}
