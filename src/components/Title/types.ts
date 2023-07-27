import type { TextProps } from '../Text/types'

export interface TitleProps extends TextProps {
  order?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
