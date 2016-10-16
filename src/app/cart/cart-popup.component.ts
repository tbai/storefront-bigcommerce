import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';
import { Product } from '../shared';
import { Observable } from 'rxjs';

import { AppState, ProductDictionary } from '../app.state';
import { removeFromCart, changeCartProductQuantity } from '../app.actions';

@Component({
  selector: 'cart-popup',
  styles: [`
    :host {
      display: block;
      width: 314px;
      position: absolute;
      top: 100%;
      right: 4px;

      font-size: 80%;
      text-transform: uppercase;
      padding: 0 10px 0 10px;

      -webkit-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.75);

      background: white;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
    }

    p.strong {
      color: black;
    }

    .cart-item {
      border-bottom: solid #e1e1e1 1px;
      padding: 10px 0;
      text-align: left;
    }

    .cart-item .remove-icon {
      float: right;

      font-size: 14px;
      font-weight: bold;
      margin-left: 10px;
      color: $font-color;
      text-decoration: none;
    }

    .cart-item .remove-icon:hover {
      color: red;
    }

    .cart-item img {
      width: 100px;
      float:left;
    }
    .cart-item p {
      margin-left: 110px;
      margin-bottom: 0;
    }

    .actions {
      margin-top: 10px;
      text-align: left;
    }

    .button {
      display: inline-block;
      width: 152px;
    }
  `],

  template: `
    <div *ngFor="let item of cartList" class="cart-item">

      <img src="assets/img/{{item.product.image}}">
      <a class="remove-icon noselect" href="#" title="Remove"
              (click)="removeProduct($event, item.product.id)">X</a>
      <p class="strong" title="{{item.product.title}}">
        {{item.product.title}}</p>
      <p>
        x {{item.quantity}}</p>
      <p title="{{item.product.brand}}">
        <small>{{item.product.brand}}</small></p>

      <div class="u-cf"></div>
    </div>

    <div class="actions">
      <div>
        <p class="u-pull-right">{{total | currency:USD:true}}</p>
        <p>Total</p>
        <div class="u-cf"></div>
      </div>
      <a class="button" routerLink="/cart" (click)="close($event)">View Cart</a>
      <a class="button button-primary u-pull-right" (click)="checkout($event)">Checkout</a>
      <div class="u-cf"></div>
    </div>
  `
})
export class CartPopupComponent implements OnInit, OnDestroy {
  cartList: {product:Product, quantity:number}[];
  total: number;
  unsubscribe: Unsubscribe;

  constructor(private store: NgRedux<AppState>) {}

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

  checkout(event){
    event.preventDefault();
    alert("checkout");
  }

  close(event) {
    alert("close");
  }


}
