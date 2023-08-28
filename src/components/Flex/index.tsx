import * as React from 'react'
import { useRestyle, spacing, layout, composeRestyleFunctions, createVariant } from '@shopify/restyle'
import type { SpacingProps, LayoutProps, VariantProps } from '@shopify/restyle'

import type { Theme } from '../../../example/src/theme'
import { Box } from '../Box'

type RestyleProps = SpacingProps<Theme> & LayoutProps<Theme> & VariantProps<Theme, 'flexVariants'>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  layout,
  createVariant({ themeKey: 'flexVariants' })
])

type Props = RestyleProps & {
  children: React.ReactNode
}

export const Flex = ({ children, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest)

  return <Box {...props}>{children}</Box>
}
