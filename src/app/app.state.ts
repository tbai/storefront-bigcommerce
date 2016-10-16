
import { Product, CartItem } from './shared';

export interface ProductDictionary { [productId:string]:Product }

export interface AppState {
  loading: boolean,
  cartPopupVisible: boolean,
  // product dictionary
  products: ProductDictionary,
  // list of items in the cart
  cartList: CartItem[]
}

export const initialState:AppState = {
  loading: true,
  cartPopupVisible: false,
  products: {},
  cartList: []
};
