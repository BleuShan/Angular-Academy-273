import {Record, Map} from 'immutable'

export interface Product {
  id?: number
  name: string
  description: string
  discontinued: boolean
  fixedPrice: boolean
  price: bigint
  modifiedDate?: Date
  imageUrl?: string
}

export const INITIAL_STATE = Map<Product['id'], Readonly<Product>>()

export const createProductRecord = Record<Product>({
  name: '',
  description: '',
  discontinued: false,
  fixedPrice: false,
  price: 0n
})
