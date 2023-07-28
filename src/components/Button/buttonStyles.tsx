import { colors } from '../../theme/colors'

const colorVariants = {
  filled: {
    backgroundColorCode: 500,
    colorCode: 0,
    borderColorCode: undefined
  },
  light: {
    backgroundColorCode: 50,
    colorCode: 500,
    borderColorCode: undefined
  },
  outline: { backgroundColorCode: 0, colorCode: 500, borderColorCode: 500 },
  default: {
    backgroundColorCode: 0,
    colorCode: 900,
    borderColorCode: 300
  },
  subtle: {
    backgroundColorCode: 0,
    colorCode: 500,
    borderColorCode: undefined
  },
  disabled: {
    backgroundColorCode: 0,
    colorCode: 900,
    borderColorCode: 300
  }
}

const grayVariants = ['default', 'disabled']

const getColors = ({ events, colorString, variant }) => {
  if (grayVariants.includes(variant)) {
    colorString = 'gray'
  }
  let { backgroundColorCode, colorCode, borderColorCode } = colorVariants[variant]
  const color = colors[colorString][colorCode]
  let backgroundColor = colors[colorString][backgroundColorCode]
  let borderColor = borderColorCode ? colors[colorString][borderColorCode] : undefined

  if (events?.isPressed) {
    backgroundColor = colors[colorString][backgroundColorCode + 200]
  } else if (events?.isHovered) {
    backgroundColor = colors[colorString][backgroundColorCode + 100]
  }
  return {
    backgroundColor,
    color,
    borderColor
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

const getSizes = ({ size, compact }) => {
  const sizes = sizeVariants[size]

  if (compact) {
    sizes.height -= 10
    sizes.paddingHorizontal -= 10
  }

  return sizes
}

const borderedVariants = ['outline', 'default', 'disabled']

export const getButtonStyles = ({
  size = 'sm',
  variant = 'filled',
  radius = 'sm',
  color: colorString = 'blue',
  events,
  disabled,
  compact
}) => {
  if (disabled) {
    variant = 'disabled'
  }
  const { backgroundColor, color, borderColor } = getColors({
    events,
    colorString,
    variant
  })
  const { height, paddingHorizontal, fontSize } = getSizes({ size, compact })
  const { borderRadius } = getRadius({ radius })

  const pressableStyle = {
    display: 'flex',
    justifyContent: 'center',
    height,
    paddingHorizontal,
    backgroundColor,
    borderRadius,
    borderColor
  }

  if (borderedVariants.includes(variant) || disabled) {
    pressableStyle.borderWidth = 0.85
  }

  const textStyle = {
    fontSize,
    fontWeight: 600,
    color
  }
  return {
    pressableStyle,
    textStyle
  }
}
