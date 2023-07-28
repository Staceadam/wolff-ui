import React from 'react'
import { Pressable } from 'react-native'

import type { ButtonGroupProps, ButtonProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'
import { colors } from '../../theme/colors'
import { useEvents } from '../Pressable/useEvents'
import { Text } from '../Text'
import { getButtonStyles } from './buttonStyles'

//TODO: https://mantine.dev/core/button/#usage
function Button({
  children,
  size,
  color,
  variant,
  radius,
  ...rest
}: ButtonProps) {
  const style = getStyleProps(rest)
  const { events, ...setters } = useEvents()

  const { pressableStyle, textStyle } = getButtonStyles({
    size,
    color,
    variant,
    radius,
    events
  })

  return (
    <Pressable {...setters} style={pressableStyle}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  )
}

//TODO: https://mantine.dev/core/button/#buttongroup
// Button.Group = ({ buttonBorderWidth, orientation }: ButtonGroupProps) => {
//   return <Flex></Flex>
// }

export { Button }
