import {createReducer, on} from '@ngrx/store'
import {updateProduct, updateProducts} from './actions'
import {createProductRecord, Product, INITIAL_STATE} from './state'

export const products = createReducer(
  INITIAL_STATE,
  on(updateProducts, (state, {products}) => {
    return state.withMutations((mutableState) => {
      for (const product of products) {
        mutableState.set(product.id, createProductRecord(product))
      }
    })
  }),
  on(updateProduct, (state, {product}) => state.set(product.id, product))
)
