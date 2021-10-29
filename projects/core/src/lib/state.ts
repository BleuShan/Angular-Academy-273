import {FeatureKey} from './constants'

export const FeatureKeySymbol = Symbol.for('@demoapp/core/featurekey')
export type FeatureState<K extends FeatureKey, State extends object> = State & {
  [FeatureKeySymbol]: K
}

export type AppState<Key extends FeatureKey, State extends object> = {
  [K in Key]: FeatureState<Key, State>
}

export function createFeatureState<Key extends FeatureKey, State extends object>(
  key: Key,
  initialState: State
): FeatureState<Key, State> {
  return {
    ...initialState,
    [FeatureKeySymbol]: key
  }
}
