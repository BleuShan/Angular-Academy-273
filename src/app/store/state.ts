import {FeatureKey} from '../app.constants'
import {ProductsState} from '../products/store/state'

export interface AppState {
  [FeatureKey.Products]: ProductsState
}
