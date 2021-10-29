import {Record, Map} from 'immutable'

export interface Product {
  id: bigint | null
  name: string
  description: string
  discontinued: boolean
  fixedPrice: boolean
  price: bigint
  modifiedDate: Date | null
  imageUrl: string | null
}

export const INITIAL_STATE = Map<Product['id'], Readonly<Product>>()
export type ProductsState = typeof INITIAL_STATE

export const createProductRecord = Record<Product>({
  id: null,
  name: '',
  description: '',
  discontinued: false,
  fixedPrice: false,
  price: 0n,
  modifiedDate: null,
  imageUrl: null
})
