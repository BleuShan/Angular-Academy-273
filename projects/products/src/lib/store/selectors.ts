import {createSelector} from '@ngrx/store'
import {selectFeature, FeatureKey} from '@demoapp/core'
import {ProductsState} from './state'

export const selectProductFeature = selectFeature<ProductsState, FeatureKey.Products>(
  FeatureKey.Products
)
export const selectProducts = createSelector(selectProductFeature, ({products}) => products)
export const selectProductList = createSelector(
  selectProducts,
  (state: ProductsState['products']) => Array.from(state.values())
)
