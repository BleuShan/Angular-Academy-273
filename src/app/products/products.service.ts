import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {mergeMap} from 'rxjs/operators'
import {createProductRecord, Product} from './store/state'

const BASE_URL = 'https://storerestservice.azurewebsite.net/api/products'

@Injectable()
export class ProductsService {
  #httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  public all() {
    return this.#httpClient
      .get(BASE_URL)
      .pipe(mergeMap((products: Product[]) => products.map(createProductRecord)))
  }
}
