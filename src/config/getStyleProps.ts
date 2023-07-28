import get from 'lodash/get'
import includes from 'lodash/includes'

import { flexProps, shortHandSpacingProps } from './flex'
import { viewProps } from './view'
import { shadowIOSProps } from './shadow'
import { textProps } from './text'
import { colors } from '../theme/colors'
import { sizes } from '../theme/size'

const joinedProps = {
  ...flexProps,
  ...viewProps,
  ...shadowIOSProps,
  ...textProps
}

const formatProp = (styleProp, stylePropReal) => {
  // this is a . color prop
  if (includes(styleProp, '.')) {
    return formatColor(styleProp)
    // the property exists in the spacing theme
  } else if (includes(Object.entries(shortHandSpacingProps).flat(), stylePropReal)) {
    return sizes[styleProp]
  } else if (includes(styleProp, ' ')) {
    // return formatLonghand(styleProp)
  } else {
    return styleProp
  }
}

const formatColor = (styleProp) => {
  return get(colors, styleProp)
}

//TODO: need to figure out how to do shorthands like border
// https://developer.mozilla.org/en-US/docs/Web/CSS/border
// const formatLonghand = (styleProp) => {
//   const chunks = split(styleProp, ' ')
//   // need a dynamic way to set these
//   return chunks
// }

const newVersion = (styleObject) => {
  let final = {}

  // object was passed in from a parent components style prop
  // TODO: find a better way to take this off
  let style
  if (styleObject.style) {
    style = styleObject.style
  } else {
    style = styleObject
  }

  for (const styleProp in style) {
    // console.log(`styleProps = ${styleProp}: ${style[styleProp]}`);
    for (const prop in joinedProps) {
      // property key is formatted for a rn style object
      if (styleProp === prop || styleProp === joinedProps[prop]) {
        final[prop] = formatProp(style[styleProp], styleProp)
      }
    }
  }

  return final
}

export const getStyleProps = (rest: {}) => {
  // oldVersion(rest)
  const final = newVersion(rest)
  return final
}
