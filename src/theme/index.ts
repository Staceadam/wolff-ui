import { breakpoint } from './breakpoint'
import { colors } from './colors'
import { radii } from './radius'
import { shadow } from './shadow'
import { sizes } from './size'
import { spacing } from './space'
import { typography } from './typography'
import { opacity } from './opacity'

const theme = {
  breakpoint,
  colors,
  radii,
  ...typography,
  sizes,
  space: spacing,
  shadow,
  opacity
}

export const themePropertyMap: any = {
  borderRadius: 'radii',
  color: 'colors',
  letterSpacing: 'letterSpacings',
  lineHeight: 'lineHeights',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  size: 'sizes',
  space: 'space',
  shadow: 'shadows'
}

export { theme }
