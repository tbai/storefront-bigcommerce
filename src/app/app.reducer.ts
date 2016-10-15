import { NgRedux } from 'ng2-redux';
import { Action, Reducer } from 'redux';
import { AppState } from './app.state';
import * as Actions from './app.actions';
import { CartAction, ProductAction } from './app.actions';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class AppReducer {

  constructor(private store: NgRedux<AppState>, private http:Http) {

  }

  reduce(state:AppState, action:Action):AppState {
    switch (action.type){
      case Actions.FETCH_PRODUCTS:
        return this.reduceFetchProducts(state);

      case Actions.FETCH_PRODUCTS_SUCCESS:
        return this.reduceFetchProductsSuccess(state, action as ProductAction);

      case Actions.ADD_TO_CART:
        return this.reduceAddToCart(state, action as CartAction);

      // case Actions.REMOVE_FROM_CART:
      //   return this.reduceRemoveFromCart(state, action as CartAction);

      // case Actions.SAVE_BUDGET:
      //   return this.reduceSaveBudget(state, action as BudgetAction);

      default:
        return state;
    }
  }


  reduceFetchProducts(state:AppState) : AppState{
    this.http.get('assets/json/products.json').map(
      response => response.json()
    ).subscribe( productsJson => {
      this.store.dispatch(Actions.fetchProductsSuccess(productsJson));
    });

    return Object.assign({}, state, {
      loading: true
    });
  }

  reduceFetchProductsSuccess(state:AppState, action:ProductAction):AppState {
    return Object.assign({}, state, {
      loading: false,
      products: action.products
    });
  }


  reduceAddToCart(state:AppState, action:CartAction) : AppState {
    let productId = action.productId;

    // clone the list to prevent changing the state object
    let cartList = Array.from(state.cartList);

    let cartItem = cartList.find(item => item.productId === productId);
    if (!cartItem){
      cartItem = {
        productId: productId,
        quantity: 0
      };
      cartList.push(cartItem);
    }

    // increment the quantity
    cartItem.quantity ++;

    return Object.assign({}, state, {
      cartList: cartList
    });
  }

}
