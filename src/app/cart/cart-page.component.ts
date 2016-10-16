import { Component, OnDestroy, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import { AppState } from '../app.state';
import { CartBaseComponent } from './cart-base.component';


@Component({
  selector: 'cart-page',
  styleUrls: ['cart-page.component.scss'],
  templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent {

  constructor(protected store: NgRedux<AppState>) {
    super(store);
  }

}
