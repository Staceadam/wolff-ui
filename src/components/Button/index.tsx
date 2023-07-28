import React from 'react'
import { Pressable } from 'react-native'

import type { ButtonGroupProps, ButtonProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'
import { colors } from '../../theme/colors'
import { useEvents } from '../Pressable/useEvents'
import { Text } from '../Text'
import { getButtonStyles } from './buttonStyles'

//TODO: https://mantine.dev/core/button/#usage
// 1. icon(left/right/center)
// 2. loading indicator over icon
// 3. full width
// 4. button group
function Button({ children, size, compact, color, variant, radius, disabled, onPress, ...rest }: ButtonProps) {
  const style = getStyleProps(rest)
  const { events, ...setters } = useEvents()

  const { pressableStyle, textStyle } = getButtonStyles({
    size,
    color,
    variant,
    radius,
    events,
    disabled,
    compact
  })

  return (
    <Pressable {...setters} disabled={disabled} onPress={onPress} style={{ ...pressableStyle, ...style }}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  )
}

//TODO: https://mantine.dev/core/button/#buttongroup
// Button.Group = ({ buttonBorderWidth, orientation }: ButtonGroupProps) => {
//   return <Flex></Flex>
// }

export { Button }
