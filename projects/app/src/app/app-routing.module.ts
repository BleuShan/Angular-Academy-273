import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {FeatureKey} from '@demoapp/core'
import {HomeComponent} from './home/home.component'

export const ROUTES: Routes = [
  {
    path: '.',
    redirectTo: 'Home'
  },
  {
    path: 'Home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: FeatureKey.Products,
    async loadChildren() {
      const {ProductsModule} = await import('@demoapp/products')
      return ProductsModule
    },
    data: {
      title: FeatureKey.Products
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES), StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule, StoreRouterConnectingModule]
})
export class AppRoutingModule {}
