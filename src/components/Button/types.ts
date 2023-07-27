import type { PressableProps } from 'react-native'
import type { ViewStyleProps } from '../../config'
import type { ReactNode } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends PressableProps, ViewStyleProps {
  variant?: 'filled' | 'light' | 'outline' | 'default' | 'subtle'
  //TODO: this should be dynamic and based off of theme
  color?: string
  radius?: number | Size
  size?: Size
  disabled?: boolean
  compact?: boolean
  uppercase?: boolean
  fullWidth?: boolean
  leftIcon?: ReactNode
  loaderPosition?: 'left' | 'center' | 'right'
  loaderProps?: any
  loading?: boolean
  rightIcon?: ReactNode
  type?: 'button' | 'reset' | 'submit'
}

export interface ButtonGroupProps extends ButtonProps {
  buttonBorderWidth?: string | number
  orientation: 'horizontal' | 'vertical'
}
