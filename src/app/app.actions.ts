import { Action, ActionCreator } from 'redux';
import { AppState, ProductDictionary } from './app.state';
import { Product } from './shared';

export const FETCH_PRODUCTS:string = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS:string = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_TO_CART:string = 'ADD_TO_CART';
export const REMOVE_FROM_CART:string = 'REMOVE_FROM_CART';


export interface CartAction extends Action {
  type: string,
  productId: string
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

export const addToCart:ActionCreator<CartAction> = function(productId:string){
  return {
    type: ADD_TO_CART,
    productId: productId
  };
};

export const removeFromCart:ActionCreator<CartAction> = function(productId:string){
  return {
    type: REMOVE_FROM_CART,
    productId: productId
  };
};
