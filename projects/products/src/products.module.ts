import {NgModule} from '@angular/core'
import {ProductsDetailComponent} from './products-detail/products-detail.component'
import {ProductsListComponent} from './products-list/products-list.component'
import {ProductsComponent} from './products/products.component'
import {CommonModule} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {FeatureKey} from '@demoapp/store'
import {reducers} from './store'
import {ProductsEffects} from './store/effects'
import {ProductsService} from './services'
import {ProductsRoutingModule} from './products-routing.module'

const declarations = [ProductsListComponent, ProductsDetailComponent, ProductsComponent]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(FeatureKey.Products, reducers),
    HttpClientModule,
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsService],
  exports: [...declarations, ProductsRoutingModule, EffectsModule]
})
export class ProductsModule {}
