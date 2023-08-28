import { createTheme } from 'wolff-ui'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3'
}

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  borderRadii: {
    s: 8,
    l: 30
  },
  flexVariants: {
    row: {
      flexDirection: 'row'
    },
    column: {
      flexDirection: 'column'
    },
    defaults: {
      flexDirection: 'column',
      gap: 's'
    }
  },
  textVariants: {
    h1: {
      fontWeight: 'bold',
      fontSize: 34
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 28
    },
    body: {
      fontSize: 16,
      lineHeight: 24
    },
    defaults: {
      // put actual font type here
    }
  },
  buttonVariants: {
    defaults: {
    },
    filled: {
      flexDirection: 'row'
    },
    light: {
      flexDirection: 'column'
    },
    outline: {},
    default: {},
    subtle: {}
  }
})

export type Theme = typeof theme
