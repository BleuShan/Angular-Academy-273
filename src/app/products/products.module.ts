import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductListComponent} from './product-list/product-list.component'
import {reducers} from './store'
import {StoreModule} from '@ngrx/store'
import {HttpClientModule} from '@angular/common/http'
import {FEATURE_KEY} from './constants'
import {EffectsModule} from '@ngrx/effects'
import {ProductsEffects} from './store/effects'
import {ProductsService} from './products.service'

const DECLARATIONS = [ProductListComponent]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_KEY, reducers),
    HttpClientModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsService],
  exports: DECLARATIONS
})
export class ProductsModule {}
