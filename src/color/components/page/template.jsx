import React from 'react'
import styled from 'styled-components'

// Background component
const Background = styled.div`
  transition: background 0.8s ease-out;
  display: flex;
  background-color: ${({color}) => color};
`

// Text component
const Text = styled.span`
  margin-left: 4px;
  margin-right: 4px;
`

// Gradient overlay component
const Gradient = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255, 255, 255, 0.4), transparent);
`

/** Button component */
export const Button = styled.button`
  border-radius: 50%;
  background: radial-gradient(white, gainsboro);
  border-color: gainsboro;
  outline: none;
`

/**
 * Render color page component showing current color and buttons to change
 * @param {Object} props Component properties
 * @return {React.ReactElement} Color page component
 */
export default function ColorPage({
  className,
  color,
  onNextColor,
  onPreviousColor,
}) {
  return (
    <Background color={color} className={className}>
      <Gradient>
        <Button onClick={onPreviousColor}>&lt;</Button>
        <Text>Hello, World</Text>
        <Button onClick={onNextColor}>&gt;</Button>
      </Gradient>
    </Background>
  )
}
