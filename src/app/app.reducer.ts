import { NgRedux } from 'ng2-redux';
import { Action, Reducer } from 'redux';
import { AppState } from './app.state';
import * as Actions from './app.actions';
import { CartAction } from './app.actions';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class AppReducer {

  constructor(private store: NgRedux<AppState>, private http:Http) {

  }

  reduce(state:AppState, action:Action):AppState {
    switch (action.type){
      // case Actions.FETCH_STATE:
      //   return this.reduceFetchState(state, action as StateAction);

      // case Actions.FETCH_STATE_SUCCESS:
      //   return this.reduceFetchStateSuccess(state, action as StateAction);

      // case Actions.SAVE_STATE:
      //   return this.reduceSaveState(state, action as StateAction);

      // case Actions.ADD_TO_CART:
      //   return this.reduceAddToCart(state, action as CartAction);

      // case Actions.REMOVE_FROM_CART:
      //   return this.reduceRemoveFromCart(state, action as CartAction);

      // case Actions.SAVE_BUDGET:
      //   return this.reduceSaveBudget(state, action as BudgetAction);

      default:
        return state;
    }
  }



}
