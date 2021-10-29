import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {FeatureKey} from '@demoapp/store'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {
    path: '.',
    redirectTo: 'Home'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: FeatureKey.Products,
    async loadChildren() {
      const {ProductsModule} = await import('@demoapp/products')
      return ProductsModule
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreRouterConnectingModule.forRoot()],
  exports: [RouterModule, StoreRouterConnectingModule]
})
export class AppRoutingModule {}
