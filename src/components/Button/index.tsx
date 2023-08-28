import * as React from 'react'
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { useRestyle, spacing, composeRestyleFunctions, createVariant, border, backgroundColor } from '@shopify/restyle'
import type { SpacingProps, VariantProps, BorderProps, BackgroundColorProps } from '@shopify/restyle'

import type { Theme } from '../../../example/src/theme'
import { Text } from '../Text'

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  createVariant({ themeKey: 'buttonVariants' })
])

type Props = RestyleProps &
  TouchableOpacityProps & {
    children: React.ReactNode
    disabled?: boolean
    uppercase?: boolean
    compact?: boolean
    //TODO: these should use the t-shirt sizing from theme
    radius?: 's' | 'm' | 'l' | 'xl'
    size?: 's' | 'm' | 'l' | 'xl'
  }

export const Button = ({ children, onPress, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text>{children}</Text>
      <Text>{JSON.stringify(props, null, 2)}</Text>
    </TouchableOpacity>
  )
}
