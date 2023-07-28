import type { FlexStyle, DimensionValue } from 'react-native'

export const shortHandSpacingProps = {
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
  left: 'l',
  right: 'r',
  top: 't',
  bottom: 'b'
}

const shorthandProps = {
  ...shortHandSpacingProps,
  flexBasis: 'fb',
  height: 'h',
  end: 'e',
  start: 's',
  width: 'w',
  justifyContent: 'justify',
  alignItems: 'align',
  flexWrap: 'wrap',
  flexDirection: 'direction',
  maxHeight: 'mah',
  maxWidth: 'maw',
  minHeight: 'mih',
  minWidth: 'miw'
}

export const flexProps = {
  ...shorthandProps,
  alignContent: true,
  alignSelf: true,
  display: true,
  flex: true,
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
  borderWidth: true,
  overflow: true
}

//TODO: these need to be specked out better
type ShortValues = (typeof shorthandProps)[keyof typeof shorthandProps]

type ShortProps = {
  [Key in ShortValues]?: DimensionValue
}

export interface FlexStyleProps extends FlexStyle, ShortProps {}
