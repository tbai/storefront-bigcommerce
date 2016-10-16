import {
  Component,
  OnInit,
  OnDestroy,
  HostBinding,
  ElementRef
} from '@angular/core';

import { NgRedux } from 'ng2-redux';
import { Unsubscribe } from 'redux';
import { Product } from '../shared';
import { Observable } from 'rxjs';

import { AppState, ProductDictionary } from '../app.state';

import {
  removeFromCart,
  changeCartProductQuantity,
  hideCartPopup
} from '../app.actions';



@Component({
  selector: 'cart-popup',
  styleUrls: ["cart-popup.component.scss"],
  templateUrl: 'cart-popup.component.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  }
})
export class CartPopupComponent implements OnInit, OnDestroy {
  cartList: {product:Product, quantity:number}[];
  total: number;
  unsubscribe: Unsubscribe;

  @HostBinding("class.visible") isVisible:boolean = false;

  constructor(private store: NgRedux<AppState>, private _eref: ElementRef) {}

  ngOnInit(){
    this.setupData();
    this.unsubscribe = this.store.subscribe( this.setupData.bind(this) );
  }

  ngOnDestroy (){
    this.unsubscribe();
  }

  setupData(){

    let state = this.store.getState();
    this.isVisible = state.cartPopupVisible;
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
    alert("Checkout not implementd :( ");
  }

  close() {
    this.store.dispatch(hideCartPopup());
  }

  onDocumentClick(event){
    // hide the popup when the user clicks outside
    if (this.isVisible && !this._eref.nativeElement.contains(event.target)){
      this.close();
    }
  }


}
