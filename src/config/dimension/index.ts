import type { DimensionValue } from 'react-native'

// alignContent?:
// | 'flex-start'
// | 'flex-end'
// | 'center'
// | 'stretch'
// | 'space-between'
// | 'space-around'
// | undefined;
// alignItems?: FlexAlignType | undefined;
// alignSelf?: 'auto' | FlexAlignType | undefined;
// aspectRatio?: number | string | undefined;
// borderBottomWidth?: number | undefined;
// borderEndWidth?: number | undefined;
// borderLeftWidth?: number | undefined;
// borderRightWidth?: number | undefined;
// borderStartWidth?: number | undefined;
// borderTopWidth?: number | undefined;
// borderWidth?: number | undefined;
// display?: 'none' | 'flex' | undefined;
// flex?: number | undefined;
// flexDirection?:
// | 'row'
// | 'column'
// | 'row-reverse'
// | 'column-reverse'
// | undefined;
// rowGap?: number | undefined;
// gap?: number | undefined;
// columnGap?: number | undefined;
// flexGrow?: number | undefined;
// flexShrink?: number | undefined;
// flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
// justifyContent?:
// | 'flex-start'
// | 'flex-end'
// | 'center'
// | 'space-between'
// | 'space-around'
// | 'space-evenly'
// | undefined;
// position?: 'absolute' | 'relative' | undefined;
// zIndex?: number | undefined;
// flexBasis?: DimensionValue | undefined;
// height?: DimensionValue | undefined;
// bottom?: DimensionValue | undefined;
// end?: DimensionValue | undefined;
// left?: DimensionValue | undefined;
// margin?: DimensionValue | undefined;
// marginBottom?: DimensionValue | undefined;
// marginEnd?: DimensionValue | undefined;
// marginHorizontal?: DimensionValue | undefined;
// marginLeft?: DimensionValue | undefined;
// marginRight?: DimensionValue | undefined;
// marginStart?: DimensionValue | undefined;
// marginTop?: DimensionValue | undefined;
// marginVertical?: DimensionValue | undefined;
// maxHeight?: DimensionValue | undefined;
// maxWidth?: DimensionValue | undefined;
// minHeight?: DimensionValue | undefined;
// minWidth?: DimensionValue | undefined;
// overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
// padding?: DimensionValue | undefined;
// paddingBottom?: DimensionValue | undefined;
// paddingEnd?: DimensionValue | undefined;
// paddingHorizontal?: DimensionValue | undefined;
// paddingLeft?: DimensionValue | undefined;
// paddingRight?: DimensionValue | undefined;
// paddingStart?: DimensionValue | undefined;
// paddingTop?: DimensionValue | undefined;
// paddingVertical?: DimensionValue | undefined;
// right?: DimensionValue | undefined;
// start?: DimensionValue | undefined;
// top?: DimensionValue | undefined;
// width?: DimensionValue | undefined;

// { longhand: shorthand }
export const dimensionProps = {
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
  width: 'w'
} as const

// export const spacingProps = {
//   margin: 'm',
//   marginTop: 'mt',
//   marginRight: 'mr',
//   marginBottom: 'mb',
//   marginLeft: 'ml',
//   marginHorizontal: 'mx',
//   marginVertical: 'my',
//   marginStart: 'ms',
//   marginEnd: 'me',
//   padding: 'p',
//   paddingTop: 'pt',
//   paddingRight: 'pr',
//   paddingBottom: 'pb',
//   paddingLeft: 'pl',
//   paddingHorizontal: 'px',
//   paddingVertical: 'py',
//   paddingStart: 'ps',
//   paddingEnd: 'pe',
//   columnGap: 'cg',
//   rowGap: 'rg',
//   gap: 'g'
// } as const

type LongProps = {
  [Key in keyof typeof dimensionProps]?: DimensionValue
}

type ShortValues = (typeof dimensionProps)[keyof typeof dimensionProps]

type ShortProps = {
  [Key in ShortValues]?: DimensionValue
}

export type DimensionProps = LongProps & ShortProps

// for (const [key, value] of Object.entries(spacingProps)) {
//   console.log(`${value}: ${key}`)
// }
