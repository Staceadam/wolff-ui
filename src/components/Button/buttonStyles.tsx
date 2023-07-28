import get from 'lodash/get'

import { colors } from '../../theme/colors'

const variantNums = {
  filled: [700, 600, 500],
  light: [300, 200, 100]
}

const getBackgroundColor = (events, color, variant) => {
  const [pressed, hovered, regular] = variantNums['light']

  if (events.isPressed) {
    return get(colors, [color, pressed])
  } else if (events.isHovered) {
    return get(colors, [color, hovered])
  } else {
    return get(colors, [color, regular])
  }
}

const colors = [
  'dark',
  'gray',
  'red',
  'pink',
  'violet',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange'
]

const fontColors = {
  filled: {}
}

const getColor = (color, variant) => {
  return colors.white
}

const radiusSize = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 20
}

const getRadius = (radius) => {
  if (typeof radius === 'number') {
    return radius
  }
  return get(radiusSize, radius)
}

// const constants = {
//   color: getColor(color, variant),
//   fontWeight: 600
// }

export var styles = (events, radius, color, variant) => {
  return {
    filled: {
      xs: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 32,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 18
        },
        textStyle: {
          color: getColor(color, variant),
          fontWeight: 600,
          fontSize: 12
        }
      },
      sm: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 38,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 20
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 14,
          color: getColor(color, variant)
        }
      },
      md: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 44,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 22
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 16,
          color: getColor(color, variant)
        }
      },
      lg: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 24
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 18,
          color: getColor(color, variant)
        }
      },
      xl: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 56,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 26
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 20,
          color: getColor(color, variant)
        }
      }
    },
    light: {
      xs: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 32,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 18
        },
        textStyle: {
          color: getColor(color, variant),
          fontWeight: 600,
          fontSize: 12
        }
      },
      sm: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 38,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 20
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 14,
          color: getColor(color, variant)
        }
      },
      md: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 44,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 22
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 16,
          color: getColor(color, variant)
        }
      },
      lg: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 50,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 24
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 18,
          color: getColor(color, variant)
        }
      },
      xl: {
        pressableStyle: {
          backgroundColor: getBackgroundColor(events, color, variant),
          borderRadius: getRadius(radius),
          height: 56,
          display: 'flex',
          justifyContent: 'center',
          paddingHorizontal: 26
        },
        textStyle: {
          fontWeight: 600,
          fontSize: 20,
          color: getColor(color, variant)
        }
      }
    },
    outline: {},
    default: {},
    subtle: {}
  }
}

export const getButtonStyles = ({
  // size = 'sm',
  size = 'sm',
  variant = 'filled',
  radius = 'sm',
  color = 'blue',
  events
}) => {
  return get(styles(events, radius, color, variant), [variant, size])
}
