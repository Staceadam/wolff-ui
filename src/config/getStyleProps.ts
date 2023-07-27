import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'

import { flexProps } from './flex'
import { viewColorProps, viewProps } from './view'
import { shadowIOSProps } from './shadow'
import { textProps } from './text'
import { colors } from '../theme/colors'

export const getStyleProps = (rest: {}) => {
  const joinedProps = {
    ...flexProps,
    ...viewProps,
    ...shadowIOSProps,
    ...textProps
  }
  const allProps = pick(rest, Object.entries(joinedProps).flat())

  let final = {}
  for (const [key, value] of Object.entries(allProps)) {
    // map theme colors
    if (Object.keys(viewColorProps).includes(key)) {
      //TODO: need a helper to check shorthand props
      const [color, number] = value.split('.')
      final[key] = colors[color][number]
      console.log('final after set', final)

      // if (key === 'bg') {
      //   const [color, number] = value.split('.')
      //   final[shortHand] = colors[color][number]
      // }
    } 
    if (key === 'td') {
      const split = value.split(' ')
      if (split.length === 1) {
        final.textDecorationLine = value
      } else if (split.length === 2) {
        const [textDecorationStyle, textDecorationLine] = split
        final.textDecorationStyle = textDecorationStyle
        final.textDecorationLine = textDecorationLine
      } else {
        const [textDecorationColor, textDecorationStyle, textDecorationLine] =
          split
        final.textDecorationColor = textDecorationColor
        final.textDecorationLine = textDecorationLine
        final.textDecorationStyle = textDecorationStyle
      }
    }
    // border shorthand
    if (key === 'border') {
      const [borderWidth, borderStyle, borderColor] = value.split(' ')
      final.borderWidth = borderWidth
      final.borderStyle = borderStyle
      final.borderColor = borderColor
    }
    // borderRadius shorthand
    if (key === 'borderRadius' && typeof value === 'string') {
      const split = value.split(' ')
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
      //Shorthand props
    } else if (Object.values(joinedProps).includes(key)) {
      const shortHand = Object.keys(joinedProps).find(
        (x) => joinedProps[x] === key
      )
      //TODO: this needs to dynamically get any shorthand or longhand color prop
      if (key === 'bg') {
        const [color, number] = value.split('.')
        final[shortHand] = colors[color][number]
      } else {
        final[shortHand] = value
      }
    } else {
      final[key] = value
    }
  }

  if (rest.style) {
    return { ...final, ...rest.style }
  }
  console.log('===> FINAL', JSON.stringify(final, null, 2))
  return final
}
