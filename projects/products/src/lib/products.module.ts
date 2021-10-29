import {NgModule} from '@angular/core'
import {ProductsDetailComponent} from './products-detail/products-detail.component'
import {ProductsListComponent} from './products-list/products-list.component'
import {ProductsComponent} from './products/products.component'
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {FeatureKey} from '@demoapp/core'
import {reducers} from './store'
import {ProductsEffects} from './store/effects'
import {ProductsService} from './services'
import {ProductsRoutingModule} from './products-routing.module'
import {LayoutModule} from '@angular/cdk/layout'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list'
import {CommonModule} from '@angular/common'
import {ProductsListItemComponent} from './products-list-item/products-list-item.component'

const declarations = [
  ProductsListComponent,
  ProductsDetailComponent,
  ProductsComponent,
  ProductsListItemComponent
]

@NgModule({
  declarations,
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(FeatureKey.Products, reducers),
    HttpClientModule,
    EffectsModule.forFeature([ProductsEffects]),
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [ProductsService],
  exports: declarations
})
export class ProductsModule {}
