
import { Product, CartItem } from './shared';

export interface ProductDictionary { [productId:string]:Product }

export interface AppState {
  loading: boolean,
  // product dictionary
  products: ProductDictionary,
  // list of items in the cart
  cartList: CartItem[]
}

export const initialState:AppState = {
  loading: true,
  products: {},
  cartList: []
};
