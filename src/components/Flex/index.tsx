import { View, Text } from 'react-native'
import React from 'react'
import type { FlexProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'
// import { makeStyledComponent } from '../makeStyledComponent'

// const StyledFlex = makeStyledComponent(View)
/*
1. map over types and inject them as props
2. include a style overlap

*/

export function Flex({ children, ...rest }: FlexProps) {
  const style = getStyleProps(rest)

  return (
    <View {...rest} style={style}>
      {children}
    </View>
  )
}
