import pick from 'lodash/pick'

import { flexProps } from './flex'
import { viewProps } from './view'

export const getStyleProps = (rest: {}) => {
  const joinedProps = { ...flexProps, ...viewProps }
  const allProps = pick(rest, Object.entries(joinedProps).flat())

  let final = {}
  for (const [key, value] of Object.entries(allProps)) {
    if (key === 'border') {
      console.log('value', value)
      const [borderWidth, borderStyle, borderColor] = value.split(' ')
      final.borderWidth = borderWidth
      final.borderStyle = borderStyle
      final.borderColor = borderColor
    }
    // if (key === 'borderRadius') {
    if (key === 'borderRadius' && typeof value === 'string') {
      const split = value.split(' ')
      console.log('split', split)
      console.log('type', typeof key)
      if (split.length === 1) {
        final.borderRadius = value
      } else if (split.length === 2) {
        const [leftAxis, rightAxis] = split
        final.borderTopLeftRadius = leftAxis
        final.borderTopRightRadius = rightAxis
        final.borderBottomRightRadius = leftAxis
        final.borderBottomLeftRadius = rightAxis
      } else {
        const [topLeft, topRight, bottomRight, bottomLeft] = split
        final.borderTopLeftRadius = topLeft
        final.borderTopRightRadius = topRight
        final.borderBottomRightRadius = bottomRight
        final.borderBottomLeftRadius = bottomLeft
      }
    }
    if (Object.values(joinedProps).includes(key)) {
      const shortHand = Object.keys(joinedProps).find(
        (x) => joinedProps[x] === key
      )
      final[shortHand] = value
    } else {
      final[key] = value
    }
  }

  if (rest.style) {
    return { ...final, ...rest.style }
  }
  console.log(JSON.stringify(final, null, 2))
  return final
}
