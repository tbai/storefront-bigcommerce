import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import * as createLogger from 'redux-logger';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { AppReducer } from './app.reducer';
import { AppState, initialState } from './app.state';

import { AppComponent } from './app.component';
import { QuantitySelectorComponent } from './shared';
import { CategoryPageComponent } from './category';
import { CartPageComponent } from './cart';
import { ProductPageComponent, ProductTileComponent } from './product';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    CartPageComponent,
    ProductPageComponent,
    ProductTileComponent,
    QuantitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: 'category', component: CategoryPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'product/:id', component: ProductPageComponent },
      { path: '**', redirectTo: '/category', pathMatch: 'full' }
    ])
  ],
  providers: [AppReducer],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: NgRedux<AppState>, appReducer:AppReducer) {
    store.configureStore(appReducer.reduce.bind(appReducer), initialState, [ createLogger() ]);
  }
}
