import type { TextProps as RNTextProps } from 'react-native'
import type { TextStyleProps } from '../../config'

export interface TextProps extends RNTextProps, TextStyleProps {
  truncate?: boolean
}
