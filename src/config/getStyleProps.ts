import pick from 'lodash/pick'

import { dimensionProps } from './dimension'

export const getStyleProps = (rest: {}) => {
  const layoutProps = pick(rest, Object.entries(dimensionProps).flat())

  let final = {}
  for (const [key, value] of Object.entries(layoutProps)) {
    if (Object.values(dimensionProps).includes(key)) {
      const shortHand = Object.keys(dimensionProps).find(
        (x) => dimensionProps[x] === key
      )
      final[shortHand] = value
    } else {
      final[key] = value
    }
  }

  if (rest.style) {
    return { ...final, ...rest.style }
  }
  return final
}
