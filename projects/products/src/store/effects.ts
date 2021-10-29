import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {mergeMap, map, catchError} from 'rxjs/operators'
import {ProductActionTypes, updateProduct} from './actions'
import {ProductsService} from '../services/products.service'
import {empty, Observable} from 'rxjs'

@Injectable()
export class ProductsEffects {
  fetchedProducts$: Observable<ReturnType<typeof updateProduct>>

  constructor(actions$: Actions, products: ProductsService) {
    this.fetchedProducts$ = createEffect(() => {
      return actions$.pipe(
        ofType(ProductActionTypes.fetchProduct),
        mergeMap(() =>
          products.all().pipe(map((product) => updateProduct({product}), catchError(empty)))
        )
      )
    })
  }
}
