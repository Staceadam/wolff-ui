import React from 'react'

export const useEvents = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isPressed, setIsPressed] = React.useState(false)

  return {
    onPressIn: () => setIsPressed(true),
    onPressOut: () => setIsPressed(false),
    onHoverIn: () => setIsHovered(true),
    onHoverOut: () => setIsHovered(false),
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    events: {
      isHovered,
      isPressed,
      isFocused
    }
  }
}
