import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {fetchProducts} from '../store/actions'
import {AppState} from 'src/app/store/state'
import {selectProductList, selectProducts} from '../store/selectors'
import {empty, from, Observable} from 'rxjs'
import {Product} from '../store/state'
import {mergeMap} from 'rxjs/operators'

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  #store: Store<AppState>
  products$?: Observable<Readonly<Product>>
  constructor(store: Store<AppState>) {
    this.#store = store
  }

  ngOnInit() {
    this.#store.dispatch(fetchProducts())
    this.products$ = this.#store
      .select(selectProductList)
      .pipe(mergeMap((products) => from(products)))
  }
}
