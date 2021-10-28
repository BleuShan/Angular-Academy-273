import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {mergeMap, map, catchError} from 'rxjs/operators'
import {ProductActionTypes, updateProduct} from './actions'
import {ProductsService} from '../products.service'
import {empty} from 'rxjs'

@Injectable()
export class ProductsEffects {
  #actions$: Actions
  #products: ProductsService
  public loadProducts$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(ProductActionTypes.fetchProduct),
      mergeMap(() =>
        this.#products.all().pipe(map((product) => updateProduct({product}), catchError(empty)))
      )
    )
  )

  constructor(actions$: Actions, products: ProductsService) {
    this.#actions$ = actions$
    this.#products = products
  }
}
