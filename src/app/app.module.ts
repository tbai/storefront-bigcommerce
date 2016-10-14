import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import reduxLogger from 'redux-logger';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { AppReducer } from './app.reducer';
import { AppState, initialState } from './app.state';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: NgRedux<AppState>, appReducer:AppReducer) {
    store.configureStore(appReducer.reduce.bind(appReducer), initialState, [ ]);
  }
}
