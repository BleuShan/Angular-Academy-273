import {FeatureKey} from './constants'

export type AppState<Key extends FeatureKey, State> = {
  [K in Key]: FeatureState<Key, State>
}

export const FeatureKeySymbol = Symbol.for('@demoapp/store/featurekey')
export type FeatureState<K extends FeatureKey, State> = State & {
  [FeatureKeySymbol]: K
}

export function createFeatureState<Key extends FeatureKey, State extends {[key: string]: unknown}>(
  key: Key,
  initialState: State
): FeatureState<Key, State> {
  return {
    ...initialState,
    [FeatureKeySymbol]: key
  }
}
