import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {LayoutModule} from '@angular/cdk/layout'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
