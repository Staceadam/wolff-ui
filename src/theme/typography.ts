const typography = {
  letterSpacings: {
    'xs': '-0.05em',
    'sm': '-0.025em',
    'md': 0,
    'lg': '0.025em',
    'xl': '0.05em',
    '2xl': '0.1em'
  },
  lineHeights: {
    '2xs': '1em',
    'xs': '1.125em',
    'sm': '1.25em',
    'md': '1.375em',
    'lg': '1.5em',
    'xl': '1.75em',
    '2xl': '2em',
    '3xl': '2.5em',
    '4xl': '3em',
    '5xl': '4em'
  },
  fontConfig: {
    //   Roboto: {
    //     100: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-Lighttalic',
    //     },
    //     200: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-Lighttalic',
    //     },
    //     300: {
    //       normal: 'Roboto-Light',
    //       italic: 'Roboto-Lighttalic',
    //     },
    //     400: {
    //       normal: 'Roboto-Regular',
    //       italic: 'Roboto-talic',
    //     },
    //     500: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-Mediumtalic',
    //     },
    //     600: {
    //       normal: 'Roboto-Medium',
    //       italic: 'Roboto-Mediumtalic',
    //     },
    //     700: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-Boldtalic',
    //     },
    //     800: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-Boldtalic',
    //     },
    //     900: {
    //       normal: 'Roboto-Bold',
    //       italic: 'Roboto-Boldtalic',
    //     },
    //   },
    //   Montserrat: {
    //     100: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-Lighttalic',
    //     },
    //     200: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-Lighttalic',
    //     },
    //     300: {
    //       normal: 'Montserrat-Light',
    //       italic: 'Montserrat-Lighttalic',
    //     },
    //     400: {
    //       normal: 'Montserrat-Regular',
    //       italic: 'Montserrat-talic',
    //     },
    //     500: {
    //       normal: 'Montserrat-Medium',
    //       italic: 'Montserrat-Mediumtalic',
    //     },
    //     600: {
    //       normal: 'Montserrat-SemiBold',
    //       italic: 'Montserrat-SemiBoldtalic',
    //     },
    //     700: {
    //       normal: 'Montserrat-Bold',
    //       italic: 'Montserrat-Boldtalic',
    //     },
    //     800: {
    //       normal: 'Montserrat-ExtraBold',
    //       italic: 'Montserrat-ExtraBoldtalic',
    //     },
    //     900: {
    //       normal: 'Montserrat-Black',
    //       italic: 'Montserrat-Blacktalic',
    //     },
    //   },
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extraBlack: 950
  },
  fonts: {
    heading: undefined,
    body: undefined,
    mono: undefined
  },
  fontSizes: {
    '2xs': 10,
    'xs': 12,
    'sm': 14,
    'md': 16,
    'lg': 18,
    'xl': 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128
  }
}

export type Typography = typeof typography
export type FontSize = keyof typeof typography.fontSizes
export type LetterSpacing = keyof typeof typography.letterSpacings
export type LineHeight = keyof typeof typography.lineHeights
export type FontWeight = keyof typeof typography.fontWeights
// export type Font = typeof typography.fonts;
export interface Font {
  heading?: string
  body?: string
  mono?: string
}

export { typography }
