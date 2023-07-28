import React from 'react'
import { Pressable as RNPressable } from 'react-native'

import type { PressableProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'
import { useEvents } from './useEvents'

function Pressable({ children, ...rest }: PressableProps) {
  const style = getStyleProps(rest)
  const { events, ...setters } = useEvents()

  return (
    <RNPressable {...setters} style={style} {...rest}>
      {typeof children !== 'function' ? children : children({ ...events })}
    </RNPressable>
  )
}

export { Pressable }
