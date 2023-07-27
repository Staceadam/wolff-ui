import React from 'react'
import { Pressable as RNPressable } from 'react-native'
import { Flex } from '../Flex'

import type { PressableProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'

function Pressable({ children, ...rest }: PressableProps) {
  const style = getStyleProps(rest)

  return <RNPressable style={style}>{children}</RNPressable>
}


export { Pressable }
