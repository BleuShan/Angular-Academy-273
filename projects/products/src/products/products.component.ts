import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {fetchProducts} from '../store/actions'
import {Observable} from 'rxjs'
import {Product, ProductsState} from '../store/state'
import {FeatureKey, AppState} from '@demoapp/store'
import {selectProductList} from '../store/selectors'

@Component({
  selector: 'products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  #store: Store<AppState<FeatureKey.Products, ProductsState>>
  products$?: Observable<Iterable<Readonly<Product>>>
  constructor(store: Store) {
    this.#store = store as Store<AppState<FeatureKey.Products, ProductsState>>
  }

  ngOnInit() {
    this.#store.dispatch(fetchProducts())
    this.products$ = this.#store.select(selectProductList)
  }
}
