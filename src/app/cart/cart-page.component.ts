import { Component, OnDestroy, OnInit } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';
import { Product } from '../shared';
import { Observable } from 'rxjs';

import { AppState, ProductDictionary } from '../app.state';
import { removeFromCart } from '../app.actions';


@Component({
  selector: 'cart-page',
  styleUrls: ['cart-page.component.scss'],
  templateUrl: 'cart-page.component.html'
})
export class CartPageComponent implements OnDestroy {


  cartList: {product:Product, quantity:number}[];
  total: number;
  unsubscribe: Unsubscribe;

  constructor(private store: NgRedux<AppState>) {
  }

  ngOnInit(){
    this.setupData();
    this.unsubscribe = this.store.subscribe( this.setupData.bind(this) );
  }

  ngOnDestroy (){
    this.unsubscribe();
  }

  setupData(){

    let state = this.store.getState();
    let products = state.products;

    this.total = 0;
    this.cartList = state.cartList.map(item => {

      let prod = products[item.productId];
      this.total += item.quantity * prod.price;

      return {
        product: prod,
        quantity: item.quantity
      };
    });

  }

  removeProduct(event, productId:string){
    event.preventDefault();
    this.store.dispatch(removeFromCart(productId));
  }

}
