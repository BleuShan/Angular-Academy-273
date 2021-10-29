import {createSelector} from '@ngrx/store'
import {identity} from 'rxjs'
import {FeatureKey} from 'src/app/app.constants'
import {createFeatureSelector} from 'src/app/store/selectors'
import {ProductsState} from './state'

export const selectProducts = createSelector(createFeatureSelector(FeatureKey.Products), identity)
export const selectProductList = createSelector(selectProducts, (state: ProductsState) =>
  state.values()
)
