import {getSelectors} from '@ngrx/router-store'
import {FeatureKey} from './constants'
import {AppState} from './state'

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors()

export type FeatureSelector<Key extends FeatureKey, AppState extends Record<string, unknown>> = (
  state: AppState
) => AppState[Key]

const featureSelectorCache: Partial<Record<FeatureKey, any>> = {}

export function selectFeature<State, Key extends FeatureKey>(
  featureKey: Key
): FeatureSelector<Key, AppState<Key, State>> {
  function selectFeatureImplementation(state: AppState<Key, State>) {
    return state[featureKey]
  }
  if (featureSelectorCache[featureKey] == null) {
    featureSelectorCache[featureKey] = selectFeatureImplementation
  }

  return featureSelectorCache[featureKey]!
}
