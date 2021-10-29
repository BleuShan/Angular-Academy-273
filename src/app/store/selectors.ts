import {FeatureKey} from '../app.constants'
import {AppState} from './state'

export function createFeatureSelector(featureKey: FeatureKey) {
  return function selectFeature(state: AppState) {
    return state[featureKey]
  }
}
