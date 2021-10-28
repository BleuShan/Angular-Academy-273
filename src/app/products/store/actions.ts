import {createAction, props} from '@ngrx/store'
import {List} from 'immutable'
import {Product} from './state'

export const enum ProductActionTypes {
  fetchProduct = '[Products] fetchProducts',
  updateProduct = '[Products] updateProduct',
  updateProducts = '[Products] updateProducts'
}

export const fetchProducts = createAction(ProductActionTypes.fetchProduct)

export const updateProduct = createAction(
  ProductActionTypes.updateProduct,
  props<{product: Readonly<Product>}>()
)

export const updateProducts = createAction(
  ProductActionTypes.updateProducts,
  props<{products: List<Readonly<Product>>}>()
)
