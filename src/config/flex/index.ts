import type { FlexStyle, DimensionValue } from 'react-native'

const shorthandProps = {
  flexBasis: 'fb',
  height: 'h',
  bottom: 'b',
  end: 'e',
  left: 'l',
  margin: 'm',
  marginTop: 'mt',
  marginRight: 'mr',
  marginBottom: 'mb',
  marginLeft: 'ml',
  marginHorizontal: 'mx',
  marginVertical: 'my',
  marginStart: 'ms',
  marginEnd: 'me',
  padding: 'p',
  paddingTop: 'pt',
  paddingRight: 'pr',
  paddingBottom: 'pb',
  paddingLeft: 'pl',
  paddingHorizontal: 'px',
  paddingVertical: 'py',
  paddingStart: 'ps',
  paddingEnd: 'pe',
  right: 'r',
  start: 's',
  top: 't',
  width: 'w',
  justifyContent: 'justify',
  alignItems: 'align',
  flexWrap: 'wrap',
  flexDirection: 'direction'
}

export const flexProps = {
  ...shorthandProps,
  alignContent: true,
  alignSelf: true,
  display: true,
  flex: true,
  rowGap: true,
  gap: true,
  columnGap: true,
  flexGrow: true,
  flexShrink: true,
  aspectRatio: true,
  position: true,
  zIndex: true,
  borderBottomWidth: true,
  borderEndWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStartWidth: true,
  borderTopWidth: true,
  borderWidth: true
}

type ShortValues = (typeof shorthandProps)[keyof typeof shorthandProps]

type ShortProps = {
  [Key in ShortValues]?: DimensionValue
}

export interface FlexStyleProps extends FlexStyle, ShortProps {}
