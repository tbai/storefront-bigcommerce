import { Action, ActionCreator } from 'redux';
import { AppState, ProductDictionary } from './app.state';
import { Product } from './shared';

export const FETCH_PRODUCTS:string = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS:string = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART:string = 'ADD_TO_CART';
export const REMOVE_FROM_CART:string = 'REMOVE_FROM_CART';
export const CHANGE_CART_PRODUCT_QUANTITY:string = 'CHANGE_CART_PRODUCT_QUANTITY';
export const SHOW_CART_POPUP:string = 'SHOW_CART_POPUP';
export const HIDE_CART_POPUP:string = 'HIDE_CART_POPUP';


export interface CartAction extends Action {
  type: string,
  productId: string,
  quantity: number
}

export interface ProductAction extends Action {
  type: string,
  products: ProductDictionary
}

export const fetchProducts:ActionCreator<Action> = function(){
  return {
    type: FETCH_PRODUCTS
  };
};

export const fetchProductsSuccess:ActionCreator<ProductAction> = function(products: ProductDictionary){
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  };
};

export const addToCart:ActionCreator<CartAction> = function(productId:string, quantity:number =1){
  return {
    type: ADD_TO_CART,
    productId: productId,
    quantity: quantity
  };
};

export const removeFromCart:ActionCreator<CartAction> = function(productId:string){
  return {
    type: REMOVE_FROM_CART,
    productId: productId,
    quantity: null
  };
};


export const changeCartProductQuantity:ActionCreator<CartAction> = function(productId:string, quantity:number){
  return {
    type: CHANGE_CART_PRODUCT_QUANTITY,
    productId: productId,
    quantity: quantity
  };
}

export const showCartPopup:ActionCreator<Action> = function(){
  return {
    type: SHOW_CART_POPUP
  };
}

export const hideCartPopup:ActionCreator<Action> = function(){
  return {
    type: HIDE_CART_POPUP
  };
}
