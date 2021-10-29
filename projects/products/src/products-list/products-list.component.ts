import {Component, OnInit, Output} from '@angular/core'
import {Store} from '@ngrx/store'
import {fetchProducts} from '../store/actions'
import {Observable} from 'rxjs'
import {Product, ProductsState} from '../store/state'
import {FeatureKey, AppState} from '@demoapp/store'
import {selectProductList} from '../store/selectors'

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  #store: Store<AppState<FeatureKey.Products, ProductsState>>
  @Output() products$!: Observable<Iterable<Readonly<Product>>>
  constructor(store: Store<AppState>) {
    this.#store = store
  }

  ngOnInit() {
    this.#store.dispatch(fetchProducts())
    this.products$ = this.#store.select(selectProductList)
  }
}
