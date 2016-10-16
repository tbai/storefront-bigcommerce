import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';
import { Product } from '../shared';
import { Observable } from 'rxjs';

import { AppState, ProductDictionary } from '../app.state';
import { removeFromCart, changeCartProductQuantity } from '../app.actions';

// Base component to be used by the other cart related pages
export class CartBaseComponent implements OnInit, OnDestroy {
  cartList: {product:Product, quantity:number}[];
  total: number;
  unsubscribe: Unsubscribe;

  constructor(protected store: NgRedux<AppState>) {}

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
    event.stopPropagation();
    this.store.dispatch(removeFromCart(productId));
  }

  changeQuantity(productId:string, quantity:number){
    this.store.dispatch(changeCartProductQuantity(productId, quantity));
  }

  checkout(event){
    alert("Checkout not implementd :( ");
  }


}
