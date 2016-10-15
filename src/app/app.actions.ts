import { Action, ActionCreator } from 'redux';
import { AppState } from './app.state';
import { Product } from './shared';

export const FETCH_STATE:string = 'FETCH_INITIAL_STATE';
export const FETCH_STATE_SUCCESS:string = 'FETCH_STATE_SUCCESS';
export const ADD_TO_CART:string = 'ADD_TO_CART';
export const REMOVE_FROM_CART:string = 'REMOVE_FROM_CART';


export interface CartAction extends Action {
  type: string,
  legoId: string
}

export interface ProductAction extends Action {
  type: string,
  procuts: Product[]
}

export const fetchState:ActionCreator<Action> = function(){
  return {
    type: FETCH_STATE
  };
};

export const fetchStateSuccess:ActionCreator<Action> = function(receivedState:AppState){
  return {
    type: FETCH_STATE_SUCCESS,
    state: receivedState
  };
};

export const addToCart:ActionCreator<CartAction> = function(legoId:string){
  return {
    type: ADD_TO_CART,
    legoId: legoId
  };
};

export const removeFromCart:ActionCreator<CartAction> = function(legoId:string){
  return {
    type: REMOVE_FROM_CART,
    legoId: legoId
  };
};
