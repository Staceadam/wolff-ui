import get from 'lodash/get'

import { colors } from '../../theme/colors'

// const supportedColors = [
//   'dark',
//   'gray',
//   'red',
//   'pink',
//   'violet',
//   'blue',
//   'cyan',
//   'green',
//   'yellow',
//   'orange'
// ]
const colorVariants = {
  // TODO: need to find a way to get white
  filled: { backgroundColor: 500, colorz: 100 },
  light: { backgroundColor: 100, colorz: 500 },
  disabled: { backgroundColor: 200, colorz: 300 }
}

const getColors = ({ events, color, variant }) => {
  const { backgroundColor, colorz } = colorVariants[variant]
  const finalColor = colors[color][colorz]

  let finalBackground = colors[color][backgroundColor]
  if (events.isPressed) {
    finalBackground += 200
  } else if (events.isHovered) {
    finalBackground += 100
  }
  return {
    backgroundColor: finalBackground,
    colorFinal: finalColor
  }
}

const radiusVariants = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 20
}

const getRadius = ({ radius }) => {
  if (typeof radius === 'number') {
    return { borderRadius: radius }
  }
  return { borderRadius: radiusVariants[radius] }
}

const sizeVariants = {
  xs: {
    height: 32,
    paddingHorizontal: 18,
    fontSize: 12
  },
  sm: {
    height: 38,
    paddingHorizontal: 20,
    fontSize: 14
  },
  md: {
    height: 44,
    paddingHorizontal: 22,
    fontSize: 16
  },
  lg: {
    height: 50,
    paddingHorizontal: 24,
    fontSize: 18
  },
  xl: {
    height: 56,
    paddingHorizontal: 26,
    fontSize: 20
  }
}

const getSizes = ({ size }) => {
  return sizeVariants[size]
}

export const getButtonStyles = ({
  // size = 'sm',
  size = 'sm',
  variant = 'filled',
  radius = 'sm',
  color = 'blue',
  events
}) => {
  const { backgroundColor, colorFinal } = getColors({ events, color, variant })
  const { height, paddingHorizontal, fontSize } = getSizes({ size })
  const { borderRadius } = getRadius({ radius })
  return {
    pressableStyle: {
      display: 'flex',
      justifyContent: 'center',
      height,
      paddingHorizontal,
      backgroundColor,
      borderRadius
    },
    textStyle: {
      fontSize,
      fontWeight: 600,
      color: colorFinal
    }
  }
}
