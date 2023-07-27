import type { FlexStyle } from 'react-native'
import type { ViewStyle } from 'react-native'

//   shorthand boarder = borderStyle, borderWidth, borderColor
const shorthandProps = {
  backgroundColor: 'bg'
}

const newProps = {
  border: true
}

export const viewProps = {
  ...shorthandProps,
  ...newProps,
  backfaceVisibility: true,
  borderBlockColor: true,
  borderBlockEndColor: true,
  borderBlockStartColor: true,
  borderBottomColor: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderCurve: true,
  borderEndColor: true,
  borderEndEndRadius: true,
  borderEndStartRadius: true,
  borderLeftColor: true,
  borderRadius: true,
  borderRightColor: true,
  borderStartColor: true,
  borderStartEndRadius: true,
  borderStartStartRadius: true,
  borderStyle: true,
  borderTopColor: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  opacity: true,
  elevation: true,
  pointerEvents: true
}

interface ShorthandProps {
  bg: ViewStyle['backgroundColor']
}

type Border = `${FlexStyle['borderWidth']} ${ViewStyle['borderStyle']}`

interface NewProps {
  border: Border
}

export interface ViewStyle extends ShorthandProps, NewProps {}
