import { Text as RNText } from 'react-native'
import React from 'react'
import type { TextProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'

export function Text({ children, truncate, ...rest }: TextProps) {
  const style = getStyleProps(rest)

  return (
    <RNText {...rest} numberOfLines={truncate ? 1 : undefined} style={style}>
      {children}
    </RNText>
  )
}
