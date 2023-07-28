import type { FlexStyle } from 'react-native'
import type { ViewStyle } from 'react-native'
import type { Colors } from '../../theme/colors'

//   shorthand boarder = borderStyle, borderWidth, borderColor
const shorthandProps = {
  backgroundColor: 'bg'
}

interface ShorthandProps {
  bg?: Colors
}

export const viewColorProps = {
  ...shorthandProps,
  borderTopColor: true,
  borderRightColor: true,
  borderStartColor: true,
  borderLeftColor: true,
  borderEndColor: true,
  borderBlockColor: true,
  borderBlockEndColor: true,
  borderBlockStartColor: true,
  borderBottomColor: true
}

export type ViewColorProps = {
  [Key in keyof typeof viewColorProps]?: Colors
}

const newProps = {
  border: ['borderWidth', 'borderStyle', 'borderColor']
}

type Border = `${FlexStyle['borderWidth']} ${ViewStyle['borderStyle']}`

interface NewProps {
  border?: Border
}

export const viewProps = {
  ...shorthandProps,
  ...newProps,
  ...viewColorProps,
  backfaceVisibility: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderCurve: true,
  borderEndEndRadius: true,
  borderEndStartRadius: true,
  borderRadius: true,
  borderStartEndRadius: true,
  borderStartStartRadius: true,
  borderStyle: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  opacity: true,
  elevation: true,
  pointerEvents: true
}

export interface ViewStyleProps extends ViewStyle, ShorthandProps, NewProps {}
