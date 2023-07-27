import React from 'react'

import { Text } from '../Text'
import type { TitleProps } from './types'
import { getStyleProps } from '../../config/getStyleProps'

const BASE_SIZE = 40

const sizeOptions = {
  h1: {
    fontSize: BASE_SIZE,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 24
  },
  h2: {
    fontSize: BASE_SIZE - 4,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 24
  },
  h3: {
    fontSize: BASE_SIZE - 8,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 24
  },
  h4: {
    fontSize: BASE_SIZE - 12,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 22
  },
  h5: {
    fontSize: BASE_SIZE - 16,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 20
  },
  h6: {
    fontSize: BASE_SIZE - 20,
    fontWeight: 'bold',
    lineHeight: BASE_SIZE + 18
  }
}

export function Title({ children, order, size = 'h3', ...rest }: TitleProps) {
  const style = getStyleProps(rest)
  const final = { ...style, ...sizeOptions[size] }

  return <Text style={final}>{children}</Text>
}
