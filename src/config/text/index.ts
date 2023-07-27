import type { TextStyle } from 'react-native'
import type { ViewStyleProps } from '../view'
const shortHandProps = {
  color: 'c',
  textTransform: 'tt',
  fontSize: 'fz',
  fontStyle: 'fs',
  fontWeight: 'fw',
  textAlign: 'ta'
}

interface ShorthandProps {
  c?: TextStyle['color']
  tt?: TextStyle['textTransform']
  fz?: TextStyle['fontSize']
  fs?: TextStyle['fontStyle']
  fw?: TextStyle['fontWeight']
  ta?: TextStyle['textAlign']
}

//shorthand for text Decoration
const newProps = {
  //TODO: would be cool to do the logic for the getStyleProps
  // as the value here
  td: true
}

type TextDecoration =
  | `${Required<TextStyle['textDecorationLine']>}`
  | `${Required<TextStyle['textDecorationLine']>} ${Required<
      TextStyle['textDecorationStyle']
    >}`
//TODO: not sure how to represent any ColorValue, could maybe grab this from when the theme gets hooked up
// | `${any} ${TextStyle['textDecorationLine']} ${TextStyle['textDecorationStyle']}`

interface NewProps {
  td?: TextDecoration
}

export const textProps = {
  ...shortHandProps,
  ...newProps,
  fontFamily: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: true,
  letterSpacing: true,
  lineHeight: true,
  textShadowColor: true,
  textShadowOffset: true,
  textShadowRadius: true,
  testID: true
}

export interface TextStyleProps
  extends ShorthandProps,
    NewProps,
    ViewStyleProps {}
