import React from 'react'
import { Pressable } from 'react-native'
import { Flex } from '../Flex'

import type { ButtonGroupProps, ButtonProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'

//TODO: https://mantine.dev/core/button/#usage
function Button({ children, ...rest }: ButtonProps) {
  const style = getStyleProps(rest)

  return <Pressable style={style}>{children}</Pressable>
}

//TODO: https://mantine.dev/core/button/#buttongroup
// Button.Group = ({ buttonBorderWidth, orientation }: ButtonGroupProps) => {
//   return <Flex></Flex>
// }

export { Button }
