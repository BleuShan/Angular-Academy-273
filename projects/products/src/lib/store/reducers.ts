import {createReducer, on} from '@ngrx/store'
import {updateProduct, updateProducts} from './actions'
import {createProduct, Product} from './state'
import {Map} from 'immutable'

export const products = createReducer(
  Map<Product['id'], Product>(),
  on(updateProducts, (state, {products}) => {
    return state.withMutations((mutableState) => {
      for (const product of products) {
        mutableState.set(product.id, createProduct(product))
      }
    })
  }),
  on(updateProduct, (state, {product}) => state.set(product.id, product))
)
