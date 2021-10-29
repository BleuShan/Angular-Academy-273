import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProductsListComponent} from './products-list/products-list.component'
import {reducers} from './store'
import {StoreModule} from '@ngrx/store'
import {HttpClientModule} from '@angular/common/http'
import {FeatureKey} from '../app.constants'
import {EffectsModule} from '@ngrx/effects'
import {ProductsEffects} from './store/effects'
import {ProductsService} from './products.service'
import {ProductsDetailComponent} from './products-detail/products-detail.component'

const declarations = [ProductsListComponent, ProductsDetailComponent]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    StoreModule.forFeature(FeatureKey.Products, reducers),
    HttpClientModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsService],
  exports: declarations
})
export class ProductsModule {}
