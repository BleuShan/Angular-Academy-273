import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {mergeMap, shareReplay} from 'rxjs/operators'
import {createProduct, Product} from '../store/state'

const BASE_URL = 'https://storerestservice.azurewebsites.net/api/products/'

@Injectable()
export class ProductsService {
  #httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  public all() {
    return this.#httpClient.get<Product[]>(BASE_URL).pipe(
      mergeMap((products: Product[]) => products.map(createProduct)),
      shareReplay()
    )
  }
}
