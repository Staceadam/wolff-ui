import { createBox } from '@shopify/restyle'

//TODO: how do you dynamically get this based on each apps provided theme?
import type { Theme } from '../../../example/src/theme'

export const Box = createBox<Theme>()
