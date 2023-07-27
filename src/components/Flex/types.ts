import type { ViewProps } from 'react-native'
import type {
  FlexStyleProps,
  ViewStyleProps,
  ShadowStylesIOSProps
} from '../../config'

export interface FlexProps
  extends ViewProps,
    FlexStyleProps,
    ViewStyleProps,
    ShadowStylesIOSProps {}
