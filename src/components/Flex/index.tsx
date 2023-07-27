import { View } from 'react-native'
import React from 'react'
import type { FlexProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'

//TODO: should be a wrapping function that handles all the refs and prop injection
// then returns a Component
// const StyledFlex = makeStyledComponent(View)
/*
1. map over types and inject them as props
2. include a style overlap

*/

export function Flex({ children, ...rest }: FlexProps) {
  const style = getStyleProps(rest)
  console.log('style', style)

  return (
    <View {...rest} style={style}>
      {children}
    </View>
  )
}
