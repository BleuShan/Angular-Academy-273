import {Record, Map} from 'immutable'

export interface Product {
  id: bigint | null
  name: string
  description: string
  discontinued: boolean
  fixedPrice: boolean
  price: number
  modifiedDate: Date | null
  imageUrl: string | null
}

export interface ProductsState {
  products: Map<Product['id'], Readonly<Product>>
}

const productRecordFactory = Record<Product>({
  id: null,
  name: '',
  description: '',
  discontinued: false,
  fixedPrice: false,
  price: 0,
  modifiedDate: null,
  imageUrl: null
})

export function createProduct({id, price, ...rest}: Partial<Product>) {
  if (id != null && typeof id !== 'bigint') {
    id = BigInt(id)
  }

  return productRecordFactory({id, price, ...rest})
}
